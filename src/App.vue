<template>
  <div>
    <NavBar />
    <router-view />
    <!-- ここにページが切り替わって表示される -->
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar,
  },
}
</script>
