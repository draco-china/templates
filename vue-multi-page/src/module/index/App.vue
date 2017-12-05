<template>
  <div id="app">
    <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
    <mu-appbar title="首页">
    <mu-icon-button icon="close" slot="left"/>
    <mu-icon-menu icon="more_vert" slot="right">
      <mu-menu-item title="菜单 1"/>
      <mu-menu-item title="菜单 2"/>
      <mu-menu-item title="菜单 3"/>
      <mu-menu-item title="菜单 4"/>
      <mu-menu-item title="菜单 5"/>
    </mu-icon-menu>
  </mu-appbar>
  <div class="demo" style="margin-bottom:60px;">
    <mu-pape :zDepth="1" v-for="item in list">
      <mu-card>
        <mu-card-header :title="item" subTitle="这个人很懒什么都没留下">
          <mu-avatar src="" slot="avatar"/>
        </mu-card-header>
        <mu-card-media>
          <img height="200" src="./images/logo.png" />
        </mu-card-media>
        <mu-card-text>
          散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
          调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
          似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
          找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
