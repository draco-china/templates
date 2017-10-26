<template>
  <div class="demo-infinite-container">
    <mu-list>
      <template v-for="item in list">
        <mu-list-item :title="item"/>
