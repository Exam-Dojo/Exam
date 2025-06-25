<template>
  <div class="reference">
    <h1>基本情報技術者試験〈科目B 擬似言語〉</h1>
    <p class="subtitle">― 再帰分野 “これだけ” 参考書 ―</p>
    <p>
      このページでは<strong>再帰 (Recursion)</strong>
      アルゴリズムに関して、試験で必要なポイントだけを 10
      枚の“見開きカード”形式にギュッと凝縮しました。各セクションを順に読めば、ベースケースからメモ化最適化まで一気にマスターできます。
    </p>

    <section v-for="section in sections" :key="section.title" class="section">
      <h2>{{ section.title }}</h2>
      <div v-html="section.content"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ReferencePage',
  data() {
    return {
      sections: [
        {
          title: '1. 再帰とは何か',
          content: `
            <p><strong>定義：</strong>「ある関数が <em>自分自身</em> を呼び出し、問題をより小さな部分問題へ分割しながら最終解を構築する手法」。</p>
            <ul>
              <li>入れ子構造（木・フォルダ・数列）をコードでそのまま表現できる。</li>
              <li>数学の漸化式を写経感覚で実装でき、アルゴリズムが読みやすい。</li>
              <li>実装が短くループ＋手動スタックを記述する手間が減る。</li>
            </ul>`,
        },
        {
          title: '2. 再帰の 2 大ルール',
          content: `
            <table class="striped-table">
              <thead><tr><th>ルール</th><th>役割</th><th>例 (階乗 <code>fact</code>)</th></tr></thead>
              <tbody>
                <tr><td><strong>① ベースケース</strong></td><td>再帰を<strong>必ず</strong>終了させる条件</td><td><code>if n = 1 then return 1</code></td></tr>
                <tr><td><strong>② 再帰ステップ</strong></td><td>問題サイズを縮小して自分を呼ぶ</td><td><code>return n × fact(n − 1)</code></td></tr>
              </tbody>
            </table>`,
        },
        {
          title: '3. コールスタックのしくみ',
          content: `
            <p>呼び出しごとに「自分専用メモ（ローカル変数）」がスタックに積まれる。下位呼び出しが終わるまで待機し、巻き戻し時に 1 枚ずつ外れる。</p>
            <pre><code>fact(4)            ← 4 × fact(3) を待機
 └─ fact(3)        ← 3 × fact(2) を待機
     └─ fact(2)    ← 2 × fact(1) を待機
         └─ fact(1)→ 1 を返す</code></pre>
            <p>深さ = スタック使用量。入力が大きすぎるとスタックオーバーフローに注意！</p>`,
        },
        {
          title: '4. 定番パターン早見',
          content: `
            <ul>
              <li><strong>数列型</strong>：階乗 / フィボナッチ</li>
              <li><strong>分割統治型</strong>：二分探索 / クイックソート</li>
              <li><strong>木・グラフ走査</strong>：ファイル検索 / DOM 解析</li>
              <li><strong>累積・比較型</strong>：配列合計 / 最小値抽出</li>
              <li><strong>桁・ビット操作</strong>：10 進 → 2 進変換 / 桁和</li>
            </ul>`,
        },
        {
          title: '5. 代表アルゴリズム早見表',
          content: `
            <table class="striped-table">
              <thead><tr><th>タスク</th><th>擬似コード</th><th>呼出例 → 結果</th></tr></thead>
              <tbody>
                <tr><td>階乗</td><td><code>if n=1 return 1<br>return n×fact(n-1)</code></td><td><code>fact(5)</code> → 120</td></tr>
                <tr><td>フィボナッチ</td><td><code>if n<2 return n<br>return fib(n-1)+fib(n-2)</code></td><td><code>fib(6)</code> → 8</td></tr>
                <tr><td>二分探索</td><td>中央を調べ、左右どちらかを再帰</td><td><code>search([1,3,5,7,9],7)</code> → 4</td></tr>
                <tr><td>高速べき乗</td><td>偶数→指数/2 を 2 乗<br>奇数→1 つ抜いて偶数化</td><td><code>pow(2,10)</code> → 1024</td></tr>
                <tr><td>10 進 → 2 進</td><td><code>proc(n÷2); print(n mod 2)</code></td><td><code>proc(6)</code> → 110</td></tr>
              </tbody>
            </table>`,
        },
        {
          title: '6. メモ化で高速化',
          content: `
            <p>重複部分問題をキャッシュして再利用 ➔ 計算量劇的削減。</p>
            <pre><code>// フィボナッチのメモ化例
if memo[n] ≠ -1 return memo[n]
memo[n] ← fib(n-1) + fib(n-2)</code></pre>
            <p><code>fib(30)</code> の呼び出し回数：<br>通常 2,692,537 回 → メモ化 59 回！</p>`,
        },
        {
          title: '7. 再帰 vs ループ',
          content: `
            <table class="striped-table">
              <thead><tr><th>観点</th><th>再帰</th><th>ループ</th></tr></thead>
              <tbody>
                <tr><td>コード量</td><td>短い / 宣言的</td><td>やや長い / 手続き的</td></tr>
                <tr><td>可読性</td><td>数式をそのまま表現</td><td>単純反復は分かりやすい</td></tr>
                <tr><td>性能</td><td>スタックコスト有</td><td>メモリ少 / 高速</td></tr>
                <tr><td>最適化</td><td>言語により末尾呼び最適化</td><td>不要</td></tr>
              </tbody>
            </table>`,
        },
        {
          title: '8. デバッグのコツ',
          content: `
            <ol>
              <li>トレース出力：<code>enter</code>/<code>leave</code> を表示して深さ確認</li>
              <li>小さな入力 (n=0,1,2) で動作検証</li>
              <li>紙に呼び出しツリーを書く</li>
              <li>スタック深さ上限 (<code>recursionlimit</code> etc.) を把握</li>
            </ol>`,
        },
        {
          title: '9. よくある落とし穴',
          content: `
            <ul>
              <li>ベースケース未設定 → 無限再帰</li>
              <li>サイズが減らない呼び出し → 同上</li>
              <li>グローバル変数乱用 → 予期しない副作用</li>
              <li>巨大入力 &amp; メモ化なし → 計算量爆発</li>
            </ul>`,
        },
        {
          title: '10. 再帰マスターへのロードマップ',
          content: `
            <ol>
              <li>ベースケース＋サイズ縮小を意識したミニ関数を書く</li>
              <li>配列 → 木 → グラフへ対象を拡大</li>
              <li>メモ化 → 分割統治 → 動的計画法へ発展</li>
              <li>人に説明できれば再帰は身についた証拠</li>
            </ol>
            <p>“小さなパズルを積み重ね、大きな問題を解決する” その楽しさを味わおう！</p>`,
        },
      ],
    }
  },
}
</script>

<style scoped>
.reference {
  max-width: 900px;
  margin: auto;
  padding: 20px;
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
}
.subtitle {
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
}
h1 {
  font-size: 28px;
  margin-bottom: 10px;
}
h2 {
  margin-top: 30px;
  font-size: 22px;
  border-bottom: 2px solid #ccc;
}
pre {
  background: #f8f8f8;
  padding: 10px;
  overflow-x: auto;
  border-radius: 4px;
  border: 1px solid #ddd;
}
/* テーブル強化スタイル */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1em 0;
}
thead th {
  background-color: #f0f0f0;
  font-weight: bold;
}
th,
td {
  border: 1px solid #ccc;
  padding: 8px 12px;
  text-align: left;
}
tbody tr:nth-child(even) {
  background-color: #fafafa;
}
tbody tr:hover {
  background-color: #f5f5f5;
}
ul {
  padding-left: 20px;
  list-style: disc;
}
</style>
