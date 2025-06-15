<template>
  <div class="workbook-container">
    <section class="section">
      <h2>参考書</h2>
      <ul class="topic-list">
        <li v-for="item in topics" :key="item.name" class="topic-item">
          <span>{{ item.name }}</span>
          <button @click="goToPage(item.link)">説明ページへ</button>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ReferenceView',
  data() {
    return {
      topics: [
        { name: '文法', link: '/reference/grammar' },
        { name: '配列', link: '/reference/array' },
        { name: 'リスト', link: '/reference/list' },
        { name: 'キューとスタック', link: '/reference/queue-stack' },
        { name: '木構造', link: '/reference/tree' },
        { name: 'データの整列', link: '/reference/sort' },
        { name: 'データの探索', link: '/reference/search' },
      ],
    }
  },
  methods: {
    goToPage(link) {
      this.$router.push(link)
    },
  },
}
</script>

<style scoped>
.workbook-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: Inter, sans-serif;
}

.section {
  margin-bottom: 50px;
}

h2 {
  font-size: 26px;
  border-bottom: 2px solid #ccc;
  padding-bottom: 5px;
  margin-bottom: 15px;
}

.topic-list {
  list-style: none;
  padding: 0;
}

.topic-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 18px;
}

.topic-item button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;
}

.topic-item button:hover {
  background-color: #388e3c;
}
</style>
