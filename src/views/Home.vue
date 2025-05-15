<!-- src/views/Home.vue -->
<template>
  <div class="home-container">
    <section class="section">
      <h2>基本情報の考察</h2>
      <p>
        ここに基本情報技術者試験の重要性や特徴、IT業界における位置づけなどについての説明を記載します。
      </p>
    </section>

    <section class="section">
      <h2>科目B 勉強法</h2>
      <p>
        科目Bの効率的な学習法、インプットとアウトプットのバランス、継続的な学習のコツについて記載します。
      </p>
    </section>

    <section class="section">
      <h2>科目B 得点の取り方</h2>
      <p>
        問題の傾向分析や時間配分、選択肢の絞り方、苦手分野の対策方法など得点を上げるテクニックを解説します。
      </p>
    </section>

    <section class="section">
      <h2>おすすめの参考書</h2>
      <p>
        科目Bに特化した参考書や問題集、レビューの高い書籍、初心者向けと上級者向けの書籍の比較などを紹介します。
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
.home-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: Inter, sans-serif;
}

.section {
  margin-bottom: 50px;
}

.section h2 {
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
  border-bottom: 2px solid #ccc;
  padding-bottom: 5px;
}

.section p {
  font-size: 18px;
  line-height: 1.8;
  color: #555;
}
</style>
