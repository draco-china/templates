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
