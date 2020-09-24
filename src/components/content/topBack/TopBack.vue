<template>
  <div class="top-back" @click="backClick">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>

export default {
  name: 'TopBack',
  methods: {
    backClick() {
      console.log("按键被按");
    }
  }
}
</script>

<style>
  .top-back {
    position: fixed;
    right: 8px;
    bottom: 55px;
  }
  .top-back img {
    width: 43px;
    height: 43px;
  }
</style>