<template>
  <div class="demo-infinite-container">
    <mu-list>
      <template v-for="item in list">
        <mu-list-item :title="item"/>
        <mu-divider/>
      </template>
    </mu-list>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
  </div>
