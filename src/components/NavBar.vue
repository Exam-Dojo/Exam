<template>
  <div>
    <!-- ヘッダータイトル -->
    <router-link to="/" style="text-decoration: none">
      <div class="header-title">基本情報技術者試験 科目B</div>
    </router-link>

    <!-- ナビゲーションバー -->
    <div class="navbar">
      <router-link to="/" class="nav-item">ホーム</router-link>
      <router-link to="/reference" class="nav-item">参考書</router-link>
      <router-link to="/workbook" class="nav-item">問題集</router-link>
      <router-link to="/contact" class="nav-item">お問い合わせ</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
.header-title {
  width: 525px;
  height: 76px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: black;
  font-size: 40px;
  font-family: Inter;
  font-weight: 500;
  line-height: 60px;
  word-wrap: break-word;
  cursor: pointer;
}

.navbar {
  width: 100%;
  height: 70px;
  background: #828282;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-item {
  margin: 0 40px;
  color: white;
  font-size: 32px;
  font-family: Inter;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
}

.nav-item:hover {
  color: yellow;
}
</style>
