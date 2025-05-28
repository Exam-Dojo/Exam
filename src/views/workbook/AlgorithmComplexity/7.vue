<template>
  <div class="array-page">
    <h2>分野：配列</h2>

    <!-- 問題文 -->
    <div class="question">
      <p><strong>問6</strong></p>
      <p><code>uniqueSort({3,1,2,3,2,1,4})</code> の戻り値はどれか。</p>
      <p>
        関数 uniqueSort は、整数配列 A から重複を排除し、昇順にソートした配列を返す。
        ここでは一旦重複排除後、簡易のバブルソートを適用するとする。
      </p>
    </div>

    <!-- プログラム -->
    <pre class="program">
〈プログラム〉

○整数型の配列: uniqueSort(整数型の配列: A)
  整数型の配列: uniq ← {}
  整数型: i, j, tmp
  // 重複排除
  for (i を 1 から Aの要素数 まで)
    if (for all j in 1..uniqの要素数: uniq[j] ≠ A[i])
      uniqの末尾 に A[i] を追加
    endif
  endfor
  for (i を 1 から uniqの要素数 - 1)
    for (j を 1 から uniqの要素数 - i)
      if (uniq[j] > uniq[j+1])
        tmp ← uniq[j]; uniq[j] ← uniq[j+1]; uniq[j+1] ← tmp
      endif
    endfor
  endfor
  return uniq
    </pre>

    <!-- 選択肢 -->
    <div class="choices">
      <p class="choice-labels">ア. {1,2,3,4} イ {4,3,2,1} ウ {3,1,2,4} エ {1,4,2,3}</p>
      <div class="buttons">
        <button :disabled="selected" @click="selectAnswer('ア')">ア</button>
        <button :disabled="selected" @click="selectAnswer('イ')">イ</button>
        <button :disabled="selected" @click="selectAnswer('ウ')">ウ</button>
        <button :disabled="selected" @click="selectAnswer('エ')">エ</button>
      </div>
    </div>

    <div class="toolbar">
      <button :class="['review-button', { marked: isMarkedForReview }]" @click="markForReview">
        <span v-if="isMarkedForReview">✅ 後で見直す</span>
        <span v-else>後で見直す</span>
      </button>
    </div>

    <button class="reopen-popup" v-if="!showPopup" @click="handleOpenPopup">解答状況を表示</button>

    <StatusPopup v-if="showPopup" :status-map="statusMap" @close="handleClosePopup" />

    <div class="judge" v-if="selected !== null">
      <p v-if="isCorrect" class="correct">正解です！🎉</p>
      <p v-else class="incorrect">不正解です。正解は「{{ correctAnswer }}」です。</p>
    </div>

    <div class="explanation" v-if="selected" ref="explanation">
      <h3>◎解説</h3>
      <ol>
        <li>重複排除で得る uniq は、初出順に {3,1,2,4}</li>
        <li>これをバブルソートで昇順に並べ替えると {1,2,3,4}</li>
      </ol>
      <p>
        よって正解は <strong>{{ correctAnswer }}</strong
        >。
      </p>
      <button class="reset-button" @click="resetSelection">やり直す</button>
    </div>

    <div class="navigation">
      <router-link to="/workbook/array6">
        <button class="nav-button">◀ 前の問題</button>
      </router-link>
      <router-link to="/workbook/array8">
        <button class="nav-button">次の問題 ▶</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import StatusPopup from '../../../components/StatusPopup.vue'

export default {
  name: 'ArrayPage',
  components: { StatusPopup },
  props: ['statusMap'],
  data() {
    return {
      selected: null,
      correctAnswer: 'ア',
      isCorrect: null,
      showPopup: sessionStorage.getItem('showPopup') !== 'false',
      isMarkedForReview: false,
    }
  },
  computed: {
    number() {
      return 7
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
.array-page {
  padding: 2rem;
  font-family: sans-serif;
  line-height: 1.6;
}
.program {
  background: #f0f0f0;
  padding: 1rem;
  font-family: monospace;
  white-space: pre-wrap;
  margin: 1rem 0;
}
.choices {
  margin-top: 1rem;
}
.choices p {
  margin-bottom: 0.5rem;
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
.explanation h3 {
  margin-top: 0;
}
.reset-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
}
.choice-labels {
  text-align: center;
  font-size: 1.05rem;
  margin-bottom: 0.8rem;
  line-height: 1.8;
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
