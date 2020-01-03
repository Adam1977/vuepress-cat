<template>
  <div class="copy-right">
     Copyright © 2019-present Adam | <span class="record-number" @click="jumpToGX">沪ICP备19013428号-1</span>
  </div>
</template>

<script>
  export default {
    name: "copy-right",
    methods: {
        jumpToGX() {
            window.open('http://www.beian.miit.gov.cn')
        }
    }
  }
</script>

<style scoped>
.copy-right {
    padding: 2.5rem;
    border-top: 1px solid #eaecef;
    text-align: center;
    color: #4e6e8e;
}
.record-number {
    cursor: pointer;
}
.record-number:hover {
    color: red;
}
</style>
