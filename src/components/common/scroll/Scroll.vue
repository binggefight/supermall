<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
 
  mounted() {
    //1.创建BSscroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    })
    
    // 2.监听滚动位置
    if(this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', (position) => {
        // console.log(position);
        // 自定义事件向外传递position
        this.$emit('scroll', position)
      })
    }
    
    //3.监听上拉加载
    if(this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
        // console.log("上拉加载更多");
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    //对scrollTo进一步封装
    scrollTo(x, y, time=300) {
        this.scroll.scrollTo(x, y, time)
    },

    //对finishPullUp进一步封装
    finishPullUp() {
      this.scroll.finishPullUp()
    },

    //对refresh进一步封装
    refresh() {
      // this.scroll.refresh()
      // console.log("-------");
      //优化
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>