<template>
  <!-- <h2>分类</h2> -->
  <div class="wrapper">
    <div class="content">
      <ul>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
        <li>曾海兵， 牛逼</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll'
  // import PullUp from '@better-scroll/pull-up'

  // BetterScroll.use(PullUp)

  export default {
    name: "Category",
    data() {
      return {
        scroll: null
      }
    },
    //组件创建完调用
    mounted() {

      this.scroll = new BetterScroll(document.querySelector('.wrapper'), {
        probeType: 3,
        pullUpLoad: true
      })

      this.scroll.on('scroll', position => {
        console.log(position);
      })

      this.scroll.on('pullingUp', () => {
        console.log("上拉加载更多");
      })
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 200px;
    background-color: red;
    overflow: hidden;
  }
</style>
