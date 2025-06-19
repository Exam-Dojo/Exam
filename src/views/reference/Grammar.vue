<template>
  <div class="reference">
    <h1>基本情報技術者試験〈科目B 擬似言語〉</h1>
    <p class="subtitle">― 文法をゼロから学ぶやさしいガイド ―</p>
    <p>
      ここでは、試験公式の擬似言語を<strong>10 のトピック</strong>に分けて解説します。<br />
      コード例はそのまま試験形式で書いてあるので、写経しながら読むと効果倍増です。
    </p>

    <!-- 各章をループで描画 -->
    <section v-for="section in sections" :key="section.title" class="section">
      <h2>{{ section.title }}</h2>
      <!-- content は HTML 文字列で保持し、v-html で展開 -->
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
          /* ───────────────────────────── 1 ───────────────────────────── */
          title: '1. 変数とデータ型 — プログラムの材料を知ろう',
          content: `
            <p>変数は <strong>“情報をしまう箱”</strong>。箱ごとに入れていいものの種類(=型)が決まっています。</p>
            <table>
              <thead><tr><th>型</th><th>サンプル</th><th>初心者ポイント</th></tr></thead>
              <tbody>
                <tr><td>整数型</td><td>n ← 10</td><td>小数なし。÷ は端数切り捨て</td></tr>
                <tr><td>実数型</td><td>x ← 3.14</td><td>小数あり。0.1+0.2 が 0.3 にならない誤差に注意</td></tr>
                <tr><td>論理型</td><td>flag ← true</td><td>true / false だけを入れるスイッチ</td></tr>
                <tr><td>文字列型</td><td>s ← "ABC"</td><td>文字のならび。計算は × だが連結(＋)は可</td></tr>
                <tr><td>配列</td><td>a ← {1,2,3}</td><td>同じ型を列にして保存。番号は <strong>1 から</strong></td></tr>
                <tr><td>レコード</td><td>Person { 名前, 年齢 }</td><td>複数の項目を 1 セットに</td></tr>
              </tbody>
            </table>
            <pre><code>// 例: 宣言と代入\n整数型: score ← 0\nscore ← score + 10</code></pre>
          `,
        },
        {
          /* ───────────────────────────── 2 ───────────────────────────── */
          title: '2. 演算子と優先順位 — どの計算が先？',
          content: `
            <p>暗算と同じで「掛け算が先」などのルールがあります。<br>
            <strong>覚え方: not &gt; and &gt; or ／ *, ÷, mod &gt; +, -</strong></p>
            <pre><code>// 掛け算・割り算が先\n整数型: r ← 3 + 4 * 5 ÷ 2  // → 13</code></pre>
          `,
        },
        {
          /* ───────────────────────────── 3 ───────────────────────────── */
          title: '3. 分岐 (if / elseif / else) — 条件で道を分ける',
          content: `
            <p>コンピュータに「もし ～ なら …」をさせる文。elseif は if が <em>偽</em> のときだけ実行。</p>
            <pre><code>文字列型: sign(整数型: n)\n  if (n > 0)\n    return "正"\n  elseif (n < 0)\n    return "負"\n  else\n    return "零"\nendif</code></pre>
          `,
        },
        {
          /* ───────────────────────────── 4 ───────────────────────────── */
          title: '4. ループ構造 — 同じ処理をくり返す',
          content: `
            <p><strong>while</strong> は「条件が true の間ずっと」。<strong>for</strong> は回数を決めてループ。</p>
            <pre><code>// while\n整数型: i ← 1\nwhile (i ≤ 5)\n  出力(i)\n  i ← i + 1\nendwhile</code></pre>
            <pre><code>// for (1 ずつ増やす)\nfor (i を 1 から 10 まで 1 ずつ増やす)\n  ...\nendfor</code></pre>
            <p>配列を見るときは添字 1 スタートを忘れずに。</p>
          `,
        },
        {
          /* ───────────────────────────── 5 ───────────────────────────── */
          title: '5. 関数と手続き — よく使う処理を名前で保存',
          content: `
            <p>関数は「入力 → 出力」。return に来た瞬間に終わります。</p>
            <pre><code>// x の 2 乗を返す\n整数型: square(整数型: x)\n  return x * x</code></pre>
          `,
        },
        {
          /* ───────────────────────────── 6 ───────────────────────────── */
          title: '6. スコープと名前隠蔽 — 変数が生きている範囲',
          content: `
            <p>同じ名前でも <strong>内側</strong> (局所) が <strong>外側</strong> (大域) を隠します。</p>
            <pre><code>// 大域変数\n大域: 整数型: g ← 1\n\n整数型: foo()\n  整数型: g ← 2  // これは別物\n  return g</code></pre>
          `,
        },
        {
          /* ───────────────────────────── 7 ───────────────────────────── */
          title: '7. 配列・多次元配列 — 整理整頓された箱の列',
          content: `
            <pre><code>// 1 次元\n整数型の配列: arr ← {10, 20, 30}\nfor (i を 1 から arrの要素数 まで 1 ずつ増やす)\n  sum ← sum + arr[i]\nendfor</code></pre>
            <pre><code>// 2 次元 (行×列)\n整数型の配列: mat[2][3]\nmat[2][3] ← 5</code></pre>
            <p>左が行、右が列という順番がほとんどの言語で共通。</p>
          `,
        },
        {
          /* ───────────────────────────── 8 ───────────────────────────── */
          title: '8. 文字列の基本操作 — 文章もデータ！',
          content: `
            <table>
              <thead><tr><th>操作</th><th>例</th><th>結果</th></tr></thead>
              <tbody>
                <tr><td>連結 (＋)</td><td>"AB" + "CD"</td><td>"ABCD"</td></tr>
                <tr><td>部分取得</td><td>substr("ABCDE", 2, 3)</td><td>"BCD"</td></tr>
                <tr><td>長さ</td><td>length("FE")</td><td>2</td></tr>
                <tr><td>検索</td><td>index("banana", "na")</td><td>3 (最初に見つかる位置)</td></tr>
              </tbody>
            </table>
          `,
        },
        {
          /* ───────────────────────────── 9 ───────────────────────────── */
          title: '9. 論理型とブール代数 — 条件式をシンプルに',
          content: `
            <p>否定を内側に入れ替えられる「ド・モルガンの法則」は超頻出！</p>
            <pre><code>not (p and q)  ≡  (not p) or (not q)\nnot (p or  q)  ≡  (not p) and (not q)</code></pre>
          `,
        },
        {
          /* ───────────────────────────── 10 ───────────────────────────── */
          title: '10. よくある勘違いチェックリスト',
          content: `
                        <p>試験や実装で<strong>本当に踏みやすい</strong>ポイントを、原因 &amp; 解決ワザ付きでまとめました。</p>
            <ul>
              <li>
                <strong>添字は 1 から</strong><br>
                <em>原因:</em> C や Python のクセで 0 から数えてしまう。<br>
                <em>解決:</em> 「先頭 = 1」と紙に書いて貼る。<br>
                <pre><code>// NG: 先頭を 0 で読む → エラー\n出力(arr[0])</code></pre>
              </li>
              <li>
                <strong>整数除算は常に切り捨て</strong><br>
                <em>原因:</em> 電卓の 3 ÷ 2 = 1.5 が頭に残っている。<br>
                <em>解決:</em> 実数型にキャストするか、あえて余りを使う。<br>
                <pre><code>// 結果は 1 (整数)\n整数型: r ← 3 ÷ 2</code></pre>
              </li>
              <li>
                <strong>and / or の優先順位</strong><br>
                <em>原因:</em> カッコを省いて読み違える。<br>
                <em>解決:</em> 迷ったら必ずカッコ。not &gt; and &gt; or と暗唱。<br>
                <pre><code>// 正しくは (p and q) or r\n論理型: x ← p and q or r</code></pre>
              </li>
              <li>
                <strong>変数交換で値が消える</strong><br>
                <em>原因:</em> tmp を用意せず上書き。<br>
                <em>解決:</em> 「tmp → a → b → tmp」の 3 歩を脳内マクロ化。<br>
                <pre><code>// OK 例\n整数型: tmp ← a\na ← b\nb ← tmp</code></pre>
              </li>
              <li>
                <strong>スコープの誤解 (大域を書き換えたつもりが…)</strong><br>
                <em>原因:</em> 関数内で同名宣言 → 実は別物。<br>
                <em>解決:</em> 大域へ書き込むときは <code>大域:</code> を再宣言しない。<br>
                <pre><code>// g は大域のまま変わらない\n整数型: change()\n  整数型: g ← 2  // ← 局所！\n  return</code></pre>
              </li>
              <li>
                <strong>for ループの境界が 1 ずれる (off-by-one)</strong><br>
                <em>原因:</em> 「≤」「<」 を混同。<br>
                <em>解決:</em> 要素数 n 個 → 1 から <strong>n</strong> まで、と口に出す。<br>
                <pre><code>// 5 個要素なら\nfor (i を 1 から 5 まで 1 ずつ増やす)</code></pre>
              </li>
              <li>
                <strong>ループ内でカウンタを初期化し忘れる</strong><br>
                <em>原因:</em> 内側 while 用の j を外で宣言したまま。<br>
                <em>解決:</em> 必ず for の中で j ← i などと再セット。<br>
              </li>
            </ul>
            <p>まずは<strong>ミスのパターンを知る</strong>ことが最短の品質向上です。</p>
          `,
        },
        {
          title: '総仕上げ：理解度セルフチェック',
          content: `
            <ul>
              <li>配列の最後の要素番号はいくつ？ (<em>ヒント: 要素数と同じ</em>)</li>
              <li>not p or q and r をカッコで厳密に書くと？</li>
              <li>2 重ループで内側カウンタを初期化し忘れると合計はどうなる？</li>
              <li>大域 counter を安全に +1 する関数を書ける？</li>
            </ul>
            <p class="mt-2"><strong>暗記でなく“手を動かす”こと</strong>が合格への近道です。</p>
          `,
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
  border-collapse: collapse; /* 境界線の重複を防ぐ */
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

/* リスト */
ul {
  padding-left: 20px;
  list-style: disc;
}
</style>
