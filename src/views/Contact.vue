<template>
  <div class="contact-page">
    <h1>お問い合わせフォーム</h1>
    <p>＊ お問い合わせ内容には全て目を通しており不具合等は適宜修正しておりますが、返信先メールアドレスを記載していただいた場合でも、返信を保証するわけではございませんのでご了承ください</p>
    <p>＊ 過去問題について個別の解説を求められても、諸事情により対応することはできかねます。</p>

    <!-- Formspreeへ送信するフォーム -->
    <form
      action="https://formspree.io/f/【ここにあなたのID】"
      method="POST"
      class="contact-form"
    >
      <!-- 名前 -->
      <div class="form-group">
        <label for="name">お名前</label>
        <input type="text" name="name" id="name" required />
      </div>

      <!-- お問い合わせ内容 -->
      <div class="form-group">
        <label for="message">お問い合わせ内容</label>
        <textarea name="message" id="message" rows="5" required></textarea>
      </div>

      <!-- メールアドレス（確認用） -->
      <div class="form-group">
        <label for="email">メールアドレス</label>
        <input type="email" name="_replyto" id="email" required />
      </div>

      <!-- 送信ボタン -->
      <button type="submit" class="btn-submit">送信する</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>

<style scoped>
.contact-page {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  font-family: sans-serif;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 4px;
}

.required {
  color: #e74c3c;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.error-msg {
  color: #e74c3c;
  font-size: 0.875em;
  margin-top: 4px;
}

.btn-submit {
  align-self: flex-start;
  padding: 10px 20px;
  background-color: #3498db;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #2980b9;
}
</style>
