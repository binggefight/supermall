<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control 
        :titles="['流行', '新款', '精选']" 
        @tabClick="tabClick" ref="tabControl1" class="tab-control" v-show="isTabFixed"/>
    <scroll class="content"  
            ref="scroll" 
            :probe-type="3" 
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control 
        :titles="['流行', '新款', '精选']" 
        @tabClick="tabClick" ref="tabControl2"/>
      <goods-list :goods="showGoods"/>
    </scroll>

    <top-back @click.native="backClick" v-show="isShowTopBack"/>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'
 
  
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import TopBack from 'components/content/topBack/TopBack'
  
  import {getHomeMultidata, getHomeGoods} from 'network/home'
  import {debounce} from 'common/utils'

  export default {
    name: "Home",
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      TopBack
    },
    // 数据
    data() {
      return {
        banners: [],
        recommends: [],
        // 商品数据
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        isShowTopBack: false,
        tabOffsetTop: 0,
        isTabFixed: false
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      },
    },
    created() {
      //1.请求多条数据
      this.getHomeMultidata()
      
      //请求商品数据
      this.getHomeGoods("pop")
      this.getHomeGoods("new")
      this.getHomeGoods("sell")
    },
    mounted() {
      // 监听item中图片加载完成
      const refresh = debounce(this.$refs.scroll.refresh, 50)
      this.$bus.$on('itemImageLoad', () => {
        // console.log("----------");
        // this.$refs.scroll.refresh()
        refresh()
      })
    },
    
    methods: {
      /**
       * 事件监听相关的方法
       */
      
      tabClick(index) {
        // console.log(index);
        switch(index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2: 
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },

      //回到顶部事件监听
      backClick() {
        // this.$refs.scrollTo(0, 0)
        this.$refs.scroll.scrollTo(0, 0)
      },

      //滚动一定距离出现按钮
      contentScroll(position) {
        // 1.判断topback显示
        this.isShowTopBack = (-position.y) > 1000

        // 2.判断
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },

      //上拉加载更多
      loadMore() {
        // console.log("上拉加载更多");
        this.getHomeGoods(this.currentType)

        this.$refs.scroll.scroll.refresh()
      },

      swiperImageLoad() {
        // 获取tabControl中的offsettop
        //所有组件都有一个属性$el，用于获取组件中的元素
        // console.log(this.$refs.tabControl.$el.offsetTop);
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
        
      },
      /**
       * 网络请求相关的方法
       */
      getHomeMultidata() {
          getHomeMultidata().then(res => {
          // console.log(res);
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list
        })
      },

      getHomeGoods(type) {
          const page = this.goods[type].page + 1
          getHomeGoods(type, page).then(res => {
            // console.log(res);
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1

            this.$refs.scroll.finishPullUp();
        })
      }
    }
  }

</script>

<style scoped>
  #home {
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /* 使用原生js滚动 */
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }

  .content {
    overflow: hidden;   

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .tab-control {
    position: relative;
    z-index: 9;
  }

  /* .content1 {
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  } */
</style>