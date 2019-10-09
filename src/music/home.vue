<template>
  <div>
   
      <div id="dplayer"></div>
   <div>sss</div>
  </div>
</template>
<script>
import "dplayer/dist/DPlayer.min.css";
import DPlayer from "dplayer";

export default {
  mounted() {
    const dp = new DPlayer({
      container: document.getElementById("dplayer"),
      video: {
        url: "http://47.93.201.74:8082/img/ATPGradientMP4.mp4"
      }
    });
  }
};
</script>
<style lang="stylus" scoped></style>