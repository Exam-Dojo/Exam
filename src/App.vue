<template>
  <div>
    <NavBar />
    <router-view :statusMap="statusMap" @update-status="updateStatus" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: { NavBar },
  data() {
    return {
      statusMap: this.initStatusMap(),
    }
  },
  methods: {
    initStatusMap() {
      const map = {}
      for (let i = 1; i <= 10; i++) {
        map[i] = 'unanswered'
      }
      return map
    },
    updateStatus({ number, status }) {
      this.statusMap[number] = status
    },
    watchRouteReset(to) {
      // ✅ 正規表現で /workbook/array3, /workbook/algorithm9 などにマッチ
      const isProblemPage = /^\/workbook\/[a-zA-Z]+\d+$/.test(to.path)
      if (!isProblemPage) {
        this.statusMap = this.initStatusMap()
        sessionStorage.setItem('showPopup', 'true') // ポップアップ初期表示に戻す（任意）
      }
    },
  },
  mounted() {
    this.$router.afterEach((to) => {
      this.watchRouteReset(to)
    })
  },
}
</script>
