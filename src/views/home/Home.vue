<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="titles" class="tab-control"></tab-control>

    <ul>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
      <li>曾海兵</li>
    </ul>
  </div>
</template>

<script>
  
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'
  import HomeSwiper from './childComps/HomeSwiper'
  
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'

  import {getHomeMultidata, getHomeGoods} from 'network/home'

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl
    },
    // 数据
    data() {
      return {
        banners: [],
        recommends: [],
        titles: ['流行', '新款', '精选'],
        // 商品数据
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        }
      }
    },
    created() {
      //1.请求多条数据
      this.getHomeMultidata()
      
      //请求商品数据
      this.getHomeGoods("pop")
      this.getHomeGoods("new")
      this.getHomeGoods("sell")
    },
    methods: {
      getHomeMultidata() {
        
          getHomeMultidata().then(res => {
          console.log(res);
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list
        })
      },

      getHomeGoods(type) {
          const page = this.goods[type].page + 1
          getHomeGoods(type, page).then(res => {
            console.log(res);
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1
        })
      }
    }
  }


  // //将一个数组元素传入另一个数组中
  
  // totalNums = []
  // const num1 = [20, 11, 222]
  // const num2 = [111, 22, 333]

  // // for(let n of num1){
  // //   totalNums.push(n)
  // // }
  // //...num1相当于结构数组
  // totalNums.push(...num1)
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
