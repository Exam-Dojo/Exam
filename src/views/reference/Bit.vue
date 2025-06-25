<template>
  <div class="reference">
    <h1>基本情報技術者試験〈科目B 擬似言語〉</h1>
    <p class="subtitle">― ビット列 “これだけ” 参考書 ―</p>
    <p>
      本章では，科目 B で出題されやすい <strong>ビット列（2 進数表現とビット操作）</strong> を，
      プログラミング初心者でも読み切れるように 10 のトピックに整理しました。<br />
      例示コードはすべて試験公式擬似言語の記法に準拠しています。
    </p>

    <section v-for="section in sections" :key="section.title" class="section">
      <h2>{{ section.title }}</h2>
      <div v-html="section.content"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BitReferencePage',
  data() {
    return {
      sections: [
        {
          title: '1. ビットとバイトの基礎',
          content: `
            <p>コンピュータは <strong>ビット(bit)</strong> を最小単位とし，8 ビットを 1 バイト(byte) として扱います。試験では 32 ビット（4 バイト）を 1 ワードとする問題が多く出題されます。</p>
            <table><thead><tr><th>単位</th><th>ビット数</th><th>よく使う値</th></tr></thead><tbody>
            <tr><td>ビット</td><td>1</td><td>0 / 1</td></tr>
            <tr><td>バイト</td><td>8</td><td>2<sup>8</sup>=256 通り</td></tr>
            <tr><td>ワード(32bit)</td><td>32</td><td>2<sup>32</sup>-1=4,294,967,295</td></tr>
            </tbody></table>`,
        },
        {
          title: '2. 2 進数の読み書き',
          content: `
            <p>左端が最上位ビット(MSB)，右端が最下位ビット(LSB)。10 進↔2 進を暗算できるように <code>2<sup>0</sup>〜2<sup>10</sup></code> は丸暗記がおすすめです。</p>
            <pre><code>// 2 進 → 10 進
value ← "101101"  // 45</code></pre>`,
        },
        {
          title: '3. ビット演算 (and / or / not)',
          content: `
            <table><thead><tr><th>演算</th><th>働き</th><th>例</th></tr></thead><tbody>
            <tr><td>x and y</td><td>共通する 1 だけ残す</td><td>下位 4 ビット抽出</td></tr>
            <tr><td>x or y</td><td>どちらかの 1 を立てる</td><td>フラグ ON</td></tr>
            <tr><td>not x</td><td>0/1 反転</td><td>選択ビットを消す準備</td></tr>
            </tbody></table>`,
        },
        {
          title: '4. シフトを掛け算・割り算で表す',
          content: `
            <pre><code>// 1 ビット左シフト
y ← x × 2
// 1 ビット右シフト
y ← x div 2</code></pre>
            <p>擬似言語に <code>&lt;&lt; / &gt;&gt;</code> はないため，上記変換が必須です。</p>`,
        },
        {
          title: '5. 「残す」「消す」の基本パターン',
          content: `
            <ul>
              <li><strong>残す</strong> : <code>value and 15</code>  → 下位 4 ビットを読む</li>
              <li><strong>消す</strong> : <code>value and (not mask)</code>  → 指定ビットを 0 に</li>
              <li><strong>反転</strong> : <code>(value and not m) or (not value and m)</code></li>
            </ul>`,
        },
        {
          title: '6. 小技レシピ集',
          content: `
            <table><thead><tr><th>目的</th><th>一行テクニック</th></tr></thead><tbody>
            <tr><td>LSB が 1 か?</td><td><code>if x mod 2 = 1</code></td></tr>
            <tr><td>符号ビット取得</td><td><code>if (n and 2_147_483_648) ≠ 0</code></td></tr>
            <tr><td>8 ビット左回転</td><td>carry ← x div 128 → x ← (x×2) mod 256 → x ← x+carry</td></tr>
            </tbody></table>`,
        },
        {
          title: '7. 偶奇パリティの計算',
          content: `<pre><code>論理型: parityEven(整数型: n)
  整数型: c ← 0
  while (n ≠ 0)
    c ← c + (n mod 2)
    n ← n div 2
  endwhile
  return (c mod 2 = 0)</code></pre>`,
        },
        {
          title: '8. 試験でよく使う定数',
          content: `
            <ul>
              <li>2<sup>4</sup>-1 = <strong>15</strong>  … 下位 4 ビット全て 1</li>
              <li>2<sup>7</sup>   = <strong>128</strong> … 8 ビット値の MSB</li>
              <li>2<sup>31</sup>  = <strong>2,147,483,648</strong> … 32 ビット符号ビット</li>
            </ul>`,
        },
        {
          title: '9. よくある落とし穴',
          content: `
            <ul>
              <li>添字は 1 から（0 始まりと混同しない）</li>
              <li>整数除算は小数部切り捨て</li>
              <li>and / or の優先順位は <code>not &gt; and &gt; or</code></li>
              <li>左回転と左シフトの違い</li>
            </ul>`,
        },
        {
          title: '10. まとめと学習のコツ',
          content: `
            <p>ビット操作は次の 3 ステップで整理すると覚えやすい。</p>
            <ol>
              <li><strong>どのビットを対象にするか</strong> — 位置を決める (定数 2<sup>k</sup> 系)</li>
              <li><strong>何をしたいか</strong> — 残す / 消す / 動かす を and / not / ×2 で表現</li>
              <li><strong>結果の正規化</strong> — 必要なら 0/1 へ変換や mod で範囲調整</li>
            </ol>
            <p>まずは "手を動かす" ことが理解への近道です。電卓や短いスクリプトで 2 進⇄10 進変換，ビット演算の挙動を何度も確認しましょう。</p>`,
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
