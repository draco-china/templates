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
