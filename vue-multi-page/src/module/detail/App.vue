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
</template>

<script>
    import lib from '@/assets/js/lib.js'
    export default {
        data () {
            const list = []
