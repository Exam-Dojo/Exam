<template>
  <div class="reference">
    <h1>基本情報技術者試験〈科目B 擬似言語〉</h1>
    <p class="subtitle">― はじめてでも解ける “配列” 攻略本 ―</p>
    <p>
      この参考書は <strong>プログラミング初心者</strong> が「配列」を使った問題を自力で解けるようになることを目的に作りました。<br />
      <em>覚える → まねする → 自分で組み合わせる</em> の 3 ステップで理解が深まるよう，典型テクニックを 10 個に厳選し，<strong>パターン化</strong> して解説します。
      例示コードはすべて試験公式擬似言語に合わせています。
    </p>

    <section v-for="section in sections" :key="section.title" class="section">
      <h2>{{ section.title }}</h2>
      <div v-html="section.content"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ArrayReferencePage',
  data() {
    return {
      sections: [
        {
          title: '1. 配列って何？ ― “箱” を並べただけ',
          content: `
            <p>配列は「<strong>同じ型</strong> の変数を <strong>番号付き</strong> で並べたもの」。<br />
            擬似言語では <code>{}</code> で表し，<em>1 から</em> 数えます（C や Python の 0 始まりと違う点に注意）。</p>
            <pre><code>// 要素数3の整数配列を 1 行で宣言
scores ← {70, 80, 90}
// 要素2 の値を読む（2 番目）
print(scores[2])  // 80</code></pre>
            <p>重要なのは「位置(index) が分かれば <strong>O(1)</strong> で取り出せる」こと。高速アクセスの武器になります。</p>`
        },
        {
          title: '2. 参照・代入の基本形 ＆ 範囲外チェック',
          content: `
            <ul>
              <li><strong>読む</strong> : <code>x ← a[i]</code></li>
              <li><strong>書く</strong> : <code>a[i] ← x</code></li>
            </ul>
            <p>要素番号が範囲外だと<strong>実行時エラー</strong>。<br />
            安全策として「<code>if (1 ≦ i ≦ aの要素数)</code>」を毎回はさむクセをつけましょう。</p>`
        },
        {
          title: '3. ループ 4 兄弟 ― 添字を味方に付ける',
          content: `
            <table><thead><tr><th>名前</th><th>目的</th><th>型</th></tr></thead><tbody>
              <tr><td><code>for</code></td><td>全走査</td><td>整数型カウンタ</td></tr>
              <tr><td><code>while</code></td><td>条件付き走査</td><td>整数型 + 論理型</td></tr>
              <tr><td><code>repeat ... until</code></td><td>少なくとも 1 回</td><td>同上</td></tr>
              <tr><td>拡張 <code>for ... in</code></td><td>読み取り専用</td><td>要素型</td></tr>
            </tbody></table>
            <p>配列問題は <strong>添字変数</strong> を 1 つか 2 つ動かす設計図を描けるかが勝負。<br />
            まず「何回回す？」「どこを指してる？」を紙に書くと迷いません。</p>`
        },
        {
          title: '4. 累積和 & 差分 ― 部分和を <em>O(1)</em> で取り出す',
          content: `
            <p><strong>累積和(prefix sum)</strong> 配列 <code>sum</code> を作れば，区間和 <code>in[l..r]</code> は<br />
            <code>sum[r] − sum[l−1]</code> の 1 行で計算できます。</p>
            <pre><code>sum[1] ← in[1]
for (i を 2 から n)
  sum[i] ← sum[i−1] ＋ in[i]
endfor</code></pre>
            <p>逆に「差分配列」を取れば <em>増減だけ</em> を高速更新できます。範囲更新 → 差分 → 累積で値復元の流れを覚えましょう。</p>`
        },
        {
          title: '5. 探索パターン ― 線形 or 二分？',
          content: `
            <ul>
              <li><strong>線形探索</strong> : 順に見るだけ。未ソート向き。<code>O(n)</code></li>
              <li><strong>二分探索</strong> : ソート済み前提。<code>O(log n)</code></li>
            </ul>
            <pre><code>// 二分探索ひな形
low ← 1
high ← n
while (low ≦ high)
  mid ← (low ＋ high) div 2
  if (key = a[mid]) return mid
  elseif (key < a[mid]) high ← mid − 1
  else low ← mid ＋ 1
endwhile
return 0  // 見つからない</code></pre>
            <p>境界更新を <code>mid ± 1</code> にしないと無限ループになる典型バグは要注意！</p>`
        },
        {
          title: '6. 並べ替え入門 ― 手計算で理解する 3 つのソート',
          content: `
            <table><thead><tr><th>手法</th><th>安定性</th><th>計算量</th><th>イメージ</th></tr></thead><tbody>
              <tr><td>挿入</td><td>○</td><td><code>O(n²)</code></td><td>トランプを並べ替える</td></tr>
              <tr><td>マージ</td><td>○</td><td><code>O(n log n)</code></td><td>半分に割って再帰</td></tr>
              <tr><td>クイック</td><td>× (普通)</td><td><code>O(n log n)</code></td><td>ピボットで分割</td></tr>
            </tbody></table>
            <p>まずは 6〜8 個の配列で手を動かし「要素の動き」をスライドに描くと腹落ちします。</p>`
        },
        {
          title: '7. マージテク (merge) ― 2 本の指で“挟む”',
          content: `
            <p>ソート済み配列 <code>L</code>, <code>R</code> を 1 本にまとめる基本形。<br />
            <strong>i, j</strong> の 2 ポインタと <code>while (i ≦ n1) and (j ≦ n2)</code> が合言葉。</p>
            <pre><code>k ← 1
while ((i ≦ n1) and (j ≦ n2))
  if (L[i] ≦ R[j])
    out[k] ← L[i]; i ← i＋1
  else
    out[k] ← R[j]; j ← j＋1
  endif
  k ← k＋1
endwhile
// どちらか残りをコピー
copy 残り を out[k..]</code></pre>
            <p>マージは <em>ソート</em>・<em>重複削除</em>・<em>集合演算</em> など応用範囲が広いので必修！</p>`
        },
        {
          title: '8. 2 次元配列 ― 行列は「配列の配列」',
          content: `
            <p><strong>行×列</strong> のイメージで，添字は <code>a[row, col]</code>。<br />
            全初期化は <code>{h行 w列の 0}</code> と書けます。</p>
            <pre><code>// 辺リスト → 隣接行列
for each edge {{u, v}} in edges
  adj[u, v] ← 1
  adj[v, u] ← 1  // 無向
endfor</code></pre>
            <p>要素数は <em>h×w</em> と増えるため，メモリ制限にも注意。</p>`
        },
        {
          title: '9. 計数＆ビンソート ― 値を添字にする発想',
          content: `
            <p>範囲が狭い整数 (<code>0〜100</code> など) なら，<strong>添字＝値</strong> で即座に格納できます。</p>
            <pre><code>// Frequency 配列を作る
freq ← {k個の 0}
for (i を 1 から n)
  freq[data[i]] ← freq[data[i]] ＋ 1
endfor
// 昇順出力
for (v を 0 から k−1)
  repeat freq[v] 回 print(v)
endfor</code></pre>
            <p><code>O(n＋k)</code> で高速。ハッシュ法／オープンアドレス法との違いも整理しておきましょう。</p>`
        },
        {
          title: '10. 実戦フローチャート ― 4 ステップで必ず解ける',
          content: `
            <ol>
              <li><strong>何を並べている？</strong> ― 要素の <em>型</em> と <em>範囲</em> をチェック</li>
              <li><strong>順番は重要？</strong> ― ソート済みなら <em>二分・マージ</em>，未ソートなら <em>線形・挿入</em></li>
              <li><strong>一部 or 全体？</strong> ― 累積和 / ポインタ で部分範囲を狙い撃ち</li>
              <li><strong>制約を満たす最小コード</strong> ― 擬似言語の構文に合わせ“ひな形”を貼り付け→変数名を置換</li>
            </ol>
            <p>この 4 手順を問題文に当て，<strong>必要なパターン</strong> を 2 つ以内に絞る練習を積めば，配列問題はほぼ攻略できます！</p>`
        }
      ]
    }
  }
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
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1em 0;
}
thead th {
  background-color: #f0f0f0;
  font-weight: bold;
}
th, td {
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
ol {
  padding-left: 20px;
}
</style>
