<template>
  <div class="status-popup">
    <button class="close-btn" @click="$emit('close')">×</button>
    <h3>🗂 解答状況</h3>
    <ul>
      <li v-for="n in 10" :key="n" class="status-item">
        <router-link :to="basePath + n" class="status-link">
          問{{ n }}:
          <span :class="'status ' + statusMap[n]">
            {{ getLabel(statusMap[n]) }}
            <span v-if="statusMap[n] === 'review'" class="icon">🔁</span>
          </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    statusMap: Object,
    basePath: {
      type: String,
      required: true,
    },
  },
  methods: {
    getLabel(status) {
      return (
        {
          unanswered: '未回答',
          answered: '解答済み',
          review: '後で見直す',
        }[status] || '未回答'
      )
    },
  },
}
</script>

<style scoped>
.status-popup {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background: #d5e3d5;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 240px;
  max-height: 420px;
  overflow-y: auto;
}
.status-item {
  margin-bottom: 0.6rem;
  font-size: 0.95rem;
}
.number {
  width: 60px;
  display: inline-block;
}
.badge {
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  font-weight: bold;
}
.unanswered {
  background-color: #ccc;
  color: #fff;
}
.answered {
  background-color: #4caf50;
  color: #fff;
}
.review {
  background-color: #ff9800;
  color: #fff;
}
.icon {
  margin-left: 0.3rem;
}
.close-btn {
  position: absolute;
  top: 0.2rem;
  right: 0.5rem;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
.status-item {
  margin-bottom: 0.6rem;
  font-size: 0.95rem;
}
.status-link {
  text-decoration: none;
  color: inherit;
}
.status-link:hover .status {
  text-decoration: underline;
}
</style>
