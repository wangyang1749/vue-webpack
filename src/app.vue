<template>
  <div id="app">
    <div>
      <mu-appbar color="pink">
        <mu-button icon slot="left">
          <mu-icon value="menu"></mu-icon>
        </mu-button>新概念英语音频
        <mu-button icon slot="right">
          <mu-icon value="search"></mu-icon>
        </mu-button>
      </mu-appbar>

      <router-view></router-view>
    </div>

    <div id="home-bottom">
      <mu-bottom-nav>
        <mu-bottom-nav-item title="Recents" icon="restore" router-link to="/"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="Favorites" router-link to="/list" icon="favorite"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="Nearby" router-link to="/my" icon="cloud_download"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
#home-bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
