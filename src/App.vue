<template>
  <div>
    <NavBar />
    <router-view :status-map="statusMap" @update-status="updateStatus" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      statusMap: {
        1: 'unanswered',
        2: 'unanswered',
        3: 'unanswered',
        4: 'unanswered',
        5: 'unanswered',
        6: 'unanswered',
        7: 'unanswered',
        8: 'unanswered',
        9: 'unanswered',
        10: 'unanswered',
      },
    }
  },
  methods: {
    updateStatus({ number, status }) {
      this.statusMap[number] = status
    },
  },
}
</script>
