<template>
  <div class="tree-structure-page">
    <h2>分野：木構造</h2>

    <!-- 問題画像 -->
    <div class="question-image">
      <img src="@/assets/tree-structure/tree-structure8.png" alt="問8の問題文画像" />
    </div>

    <!-- 選択ボタン -->
    <div class="buttons">
      <button :disabled="selected" @click="selectAnswer('ア')">ア</button>
      <button :disabled="selected" @click="selectAnswer('イ')">イ</button>
      <button :disabled="selected" @click="selectAnswer('ウ')">ウ</button>
      <button :disabled="selected" @click="selectAnswer('エ')">エ</button>
    </div>

    <!-- 状態操作 -->
    <div class="toolbar">
      <button :class="['review-button', { marked: isMarkedForReview }]" @click="markForReview">
        <span v-if="isMarkedForReview">✅ 後で見直す</span>
        <span v-else>後で見直す</span>
      </button>
    </div>

    <!-- ステータス再表示ボタン -->
    <button class="reopen-popup" v-if="!showPopup" @click="handleOpenPopup">解答状況を表示</button>

    <!-- ステータス吹き出し -->
    <StatusPopup
      v-if="showPopup"
      :status-map="statusMap"
      :basePath="'/workbook/tree-structure'"
      @close="handleClosePopup"
    />

    <!-- 判定表示 -->
    <div class="judge" v-if="selected !== null">
      <p v-if="isCorrect" class="correct">正解です！🎉</p>
      <p v-else class="incorrect">不正解です。正解は「{{ correctAnswer }}」です。</p>
    </div>

    <!-- 解説 -->
    <div class="explanation" v-if="selected" ref="explanation">
      <div class="question-image">
        <img src="@/assets/tree-structure/tree-structure8answer.png" alt="問8の解説文画像" />
      </div>
      <button class="reset-button" @click="resetSelection">やり直す</button>
    </div>

    <!-- ナビゲーション -->
    <div class="navigation">
      <router-link to="/workbook/tree-structure7">
        <button class="nav-button">◀ 前の問題</button>
      </router-link>
      <router-link to="/workbook/tree-structure9">
        <button class="nav-button">次の問題 ▶</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import StatusPopup from '../../../components/StatusPopup.vue'

export default {
  name: 'tree-structurePage8',
  components: { StatusPopup },
  props: ['statusMap'],
  data() {
    return {
      selected: null,
      correctAnswer: 'ア', // ★ ここは実際の答えに応じて変更
      isCorrect: null,
      showPopup: sessionStorage.getItem('showPopup') !== 'false',
      isMarkedForReview: false,
    }
  },
  computed: {
    number() {
      return 8
    },
  },
  methods: {
    selectAnswer(choice) {
      this.selected = choice
      this.isCorrect = choice === this.correctAnswer
      this.$emit('update-status', { number: this.number, status: 'answered' })
      this.$nextTick(() => {
        const explanation = this.$refs.explanation
        if (explanation) explanation.scrollIntoView({ behavior: 'smooth' })
      })
    },
    markForReview() {
      this.isMarkedForReview = !this.isMarkedForReview
      const status = this.isMarkedForReview ? 'review' : 'unanswered'
      this.$emit('update-status', { number: this.number, status })
    },
    resetSelection() {
      this.selected = null
      this.isCorrect = null
      this.isMarkedForReview = false
    },
    handleClosePopup() {
      this.showPopup = false
      sessionStorage.setItem('showPopup', 'false')
    },
    handleOpenPopup() {
      this.showPopup = true
      sessionStorage.setItem('showPopup', 'true')
    },
  },
}
</script>

<style scoped>
.tree-structure-page {
  padding: 2rem;
  font-family: sans-serif;
  line-height: 1.6;
}
.question-image {
  text-align: center;
  margin: 1rem 0;
}
.question-image img {
  max-width: 55%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin: 1rem auto 2rem auto;
  max-width: 600px;
}
.buttons button {
  padding: 0.6rem 1.8rem;
  font-size: 1.1rem;
  cursor: pointer;
  border: 1px solid #aaa;
  border-radius: 5px;
  background-color: #f0f0f0;
  transition: background-color 0.3s ease;
}
.buttons button:hover:enabled {
  background-color: #e0e0e0;
}
.buttons button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}
.explanation {
  background-color: #f9f9f9;
  border-left: 5px solid #2c3e50;
  padding: 1rem;
}
.reset-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
}
.navigation {
  text-align: center;
  margin-top: 2rem;
}
.nav-button {
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 0.5rem;
  background-color: #e3e3e3;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.judge {
  font-size: 1.2rem;
  text-align: center;
  margin: 1rem 0;
}
.correct {
  color: green;
  font-weight: bold;
}
.incorrect {
  color: red;
  font-weight: bold;
}
.toolbar {
  text-align: center;
  margin-top: 1rem;
}
.toolbar button {
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
}
.review-button.marked {
  background-color: #ffecb3;
  color: #d17c00;
  font-weight: bold;
  border: 1px solid #d17c00;
}
.reopen-popup {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 0.4rem 0.8rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  z-index: 1001;
  font-size: 0.9rem;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
}
.reopen-popup:hover {
  background-color: #43a047;
}
</style>
