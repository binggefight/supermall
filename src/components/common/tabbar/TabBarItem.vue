<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- <img src="../../assets/img/tabbar/home.svg" alt=""> 
    <div>首页</div> -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    <!-- <slot v-if="isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <slot name="item-text"></slot> -->
    
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
      path: String,
      activeColor: {
          type: String,
          default: 'red'
      }
  },
//   data() {
//       return {
//           isActive: true
//       }
//   },
  methods: {
      itemClick() {
        // console.log("itemClick");
        this.$router.replace(this.path)
      }
  },
  computed: {
      isActive() {
          //    /home -> item1(/home) = true
          return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
          return this.isActive ? {color: this.activeColor} : {}
      }
  }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  .active {
      color: red;
  }
</style>