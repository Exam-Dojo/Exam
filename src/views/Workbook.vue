<template>
  <div class="workbook-container">
    <section class="section">
      <h2>問題集</h2>
      <ul class="topic-list">
        <li v-for="item in topics" :key="item.name" class="topic-item">
          <span>{{ item.name }}</span>
          <button @click="goToPage(item.link)">問題を解く</button>
        </li>
      </ul>
    </section>

    <section class="section">
      <h2>オプション機能</h2>
      <p>今後、問題のランダム出題機能や、タイマー付きの模擬テスト機能などを追加予定です。</p>
    </section>

    <section class="section">
      <h2>更新履歴</h2>
      <ul>
        <li>2025/05/14 - 問題集リンクボタン追加</li>
        <li>2025/05/12 - Workbookページ作成</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WorkbookView',
  data() {
    return {
      topics: [
        { name: '文法', link: '/workbook/grammar1' },
        { name: '配列', link: '/workbook/array1' },
        { name: 'リスト', link: '/workbook/list1' },
        { name: 'キューとスタック', link: '/workbook/queue-stack1' },
        { name: '木構造', link: '/workbook/tree-structure1' },
        { name: 'データの整列', link: '/workbook/data-sorting1' },
        { name: 'データの探索', link: '/workbook/data-searching1' },
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
