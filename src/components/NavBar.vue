<template>
  <div>
    <!-- ヘッダータイトル -->
    <router-link to="/" style="text-decoration: none">
      <div class="header-title">基本情報技術者試験 科目B</div>
    </router-link>

    <!-- ナビゲーションバー -->
    <div class="navbar">
      <div class="separator"></div>
      <router-link to="/" class="nav-item">ホーム</router-link>
      <div class="separator"></div>
      <router-link to="/reference" class="nav-item">参考書</router-link>
      <div class="separator"></div>
      <router-link to="/workbook" class="nav-item">問題集</router-link>
      <div class="separator"></div>
      <router-link to="/contact" class="nav-item">お問い合わせ</router-link>
      <div class="separator"></div>
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
  display: flex;
  flex-direction: column;
  justify-content: center; /* ← 中央→左寄せ */
  align-items: flex-start; /* ← 横方向にも左寄せ */
  color: black;
  font-size: 28px;
  font-family: Inter;
  font-weight: 500;
  line-height: 40px;
  word-wrap: break-word;
  cursor: pointer;
  margin-left: 20px; /* ← 画面端から少し余白を持たせる */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.nav-item {
  margin: 0 25px;
  padding: 10px 15px;
  color: white;
  font-size: 20px; /* ← ここを変更 */
  font-family: Inter;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.navbar {
  width: 100%;
  height: 50px;
  background: linear-gradient(90deg, #6e6e6e, #a0a0a0);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.nav-item:hover {
  color: #ffd700;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.6);
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 10%;
  width: 80%;
  height: 2px;
  background: #ffd700;
  transform: scaleX(0);
  transition: transform 0.3s ease;
  transform-origin: center;
}

.nav-item:hover::after {
  transform: scaleX(1);
}

.separator {
  width: 1px;
  height: 32px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 10px;
}
</style>
