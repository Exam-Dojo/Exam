<template>
  <div class="algorithm-container">
    <h1>プログラムの属性 問題集</h1>

    <div v-for="(question, index) in questions" :key="index" class="question-block">
      <h2>問題 {{ index + 1 }}</h2>
      <p>{{ question.text }}</p>

      <div class="choices">
        <button
          v-for="(choice, key) in question.choices"
          :key="key"
          @click="selectAnswer(index, key)"
          :disabled="question.selected"
          :class="{
            correct: question.selected && key === question.correct && key === question.userAnswer,
            incorrect: question.selected && key !== question.correct && key === question.userAnswer,
          }"
        >
          {{ key }}. {{ choice }}
        </button>
      </div>

      <div v-if="question.selected" class="result">
        <p>
          <span v-if="question.userAnswer === question.correct" class="maru">◯ 正解！</span>
          <span v-else class="batsu">× 不正解</span>
        </p>
        <div class="explanation"><strong>解説:</strong> {{ question.explanation }}</div>
        <!-- 解説の下に再挑戦ボタンを追加 -->
        <button v-if="question.selected" @click="resetQuestion(index)" class="reset-button">
          もう一度答える
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgramAttributesPage',
  data() {
    return {
      questions: [
        {
          text: 'ある配列を昇順に並べ替えるアルゴリズムとして最も効率的なものはどれか？',
          choices: {
            ア: 'バブルソート',
            イ: '選択ソート',
            ウ: 'クイックソート',
            エ: '挿入ソート',
            オ: '線形探索',
            カ: 'スタック法',
          },
          correct: 'ウ',
          explanation: 'クイックソートは平均的に高速なソートアルゴリズムです。',
          selected: false,
          userAnswer: null,
        },
        {
          text: 'スタックにおいて正しい動作順はどれか？',
          choices: {
            ア: 'FIFO',
            イ: 'LIFO',
            ウ: '先入れ先出し',
            エ: '昇順処理',
            オ: 'ランダムアクセス',
            カ: '選択方式',
          },
          correct: 'イ',
          explanation: 'スタックは「後入れ先出し（LIFO）」の構造です。',
          selected: false,
          userAnswer: null,
        },
        {
          text: '再帰呼び出しに最も関連のあるデータ構造はどれか？',
          choices: {
            ア: '配列',
            イ: 'リスト',
            ウ: 'スタック',
            エ: 'キュー',
            オ: 'ツリー',
            カ: 'ヒープ',
          },
          correct: 'ウ',
          explanation: '関数の再帰呼び出しはコールスタック上で管理されます。',
          selected: false,
          userAnswer: null,
        },
      ],
    }
  },
  methods: {
    selectAnswer(questionIndex, selectedKey) {
      const question = this.questions[questionIndex]
      if (!question.selected) {
        question.selected = true
        question.userAnswer = selectedKey
      }
    },
    resetQuestion(index) {
      const q = this.questions[index]
      q.selected = false
      q.userAnswer = null
    },
  },
}
</script>

<style scoped>
.algorithm-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: 'Inter', sans-serif;
}
.question-block {
  margin-bottom: 40px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
}
.choices button {
  margin: 5px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
}
.correct {
  background-color: #d4edda;
  color: #155724;
}
.incorrect {
  background-color: #f8d7da;
  color: #721c24;
}
.maru {
  color: green;
  font-weight: bold;
}
.batsu {
  color: red;
  font-weight: bold;
}
.explanation {
  margin-top: 10px;
  background: #f1f1f1;
  padding: 10px;
  border-left: 4px solid #888;
}
.reset-button {
  margin-top: 10px;
  background-color: #eee;
  color: #333;
  border: 1px solid #aaa;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
}
.reset-button:hover {
  background-color: #ddd;
}
</style>
