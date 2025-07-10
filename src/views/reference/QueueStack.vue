<template>
  <div class="reference">
    <h1>基本情報技術者試験〈科目B 擬似言語〉</h1>
    <p class="subtitle">― はじめてでも解ける “キュー & スタック” 攻略本 ―</p>
    <p>
      この参考書は <strong>プログラミング初心者</strong> が「キュー」と「スタック」を使った問題を自力で解けるようになることを目的に作りました。<br />
      <em>概念をつかむ → ひな形を覚える → 典型問題に当てはめる</em> の 3 ステップで理解しやすいように，代表的テクニックを 10 トピックに整理しています。
    </p>

    <section v-for="section in sections" :key="section.title" class="section">
      <h2>{{ section.title }}</h2>
      <div v-html="section.content"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'QueueStackReferencePage',
  data() {
    return {
      sections: [
        {
          title: '1. Stack vs Queue ― “積む” か “並ぶ” か',
          content: `
            <p><strong>スタック</strong> は LIFO（Last-In First-Out）— 後から入れたものが先に出る「積み重ね」。<br />
            <strong>キュー</strong> は FIFO（First-In First-Out）— 先に並んだものが先に出る「行列」。</p>
            <table><thead><tr><th>構造</th><th>入口</th><th>出口</th><th>典型用途</th></tr></thead><tbody>
              <tr><td>スタック</td><td>push</td><td>pop</td><td>戻る/Undo, 式評価, 再帰</td></tr>
              <tr><td>キュー</td><td>enqueue</td><td>dequeue</td><td>BFS, プリンタ待ち行列</td></tr>
            </tbody></table>
            <p>擬似言語では<strong>組込み型は無い</strong>ので，自分で配列を使って実装するのが基本です。</p>`
        },
        {
          title: '2. 基本操作ひな形 ― push/pop と enqueue/dequeue',
          content: `
            <pre><code>// スタック (top は末尾)
手続き: push(配列: S, 要素型: x)
  Sの末尾 に x を追加する
終
関数: pop(配列: S) 返り値: 要素型
  要素型: x ← S[Sの要素数]
  Sの末尾 を削除する
  return x
終

// キュー (head と tail で管理)
手続き: enqueue(配列: Q, 要素型: x)
  Qの末尾 に x を追加する
終
関数: dequeue(配列: Q) 返り値: 要素型
  要素型: x ← Q[1]
  Q[1] を削除する
  return x
終</code></pre>
            <p>キューは削除で要素が左詰めになり <code>O(n)</code> になりがち。実用では<strong>循環配列</strong>を使い <code>head, tail</code> をインデックスで管理します。</p>`
        },
        {
          title: '3. 配列で作るスタック ― top だけ覚えれば OK',
          content: `
            <p>添字 <code>top</code> を指標に <code>push → top ← top＋1</code>, <code>pop → top ← top−1</code> の 2 行で管理。</p>
            <pre><code>// 空スタック生成
S ← {max 個の 未定義}
top ← 0

// push(x)
if (top = max) then エラー
else
  top ← top＋1
  S[top] ← x
endif</code></pre>
            <p>メモリ上は<strong>後ろから詰める</strong>イメージで，計算量はすべて <code>O(1)</code>。</p>`
        },
        {
          title: '4. 配列で作る循環キュー ― head と tail を回す',
          content: `
            <pre><code>// 空キュー生成
Q ← {k 個の 未定義}
head ← 1  // 次に取り出す位置
tail ← 1  // 次に入れる位置
size ← 0

// enqueue(x)
if (size = k) then エラー
else
  Q[tail] ← x
  tail ← (tail mod k) ＋ 1
  size ← size＋1
endif</code></pre>
            <p><code>mod k</code> で“折り返し”させるのがポイント。配列サイズ +1 ルールで<strong>空と満杯の判定</strong>を区別する手法も押さえておきましょう。</p>`
        },
        {
          title: '5. 括弧列判定 ― スタックの鉄板問題',
          content: `
            <p>開き括弧を <code>push</code>，閉じ括弧が来たら <code>pop</code> して対応確認。<br />
            最後にスタックが空なら「正しい括弧列」。</p>
            <pre><code>for each ch in expr
  if (ch = "(") then push(S, ch)
  elseif (ch = ")") then
    if (isEmpty(S)) return false
    pop(S)
  endif
endfor
return isEmpty(S)</code></pre>
            <p><strong>{}</strong>, <strong>[]</strong> など複数種類にも対応できるよう，辞書でペア情報を持つ汎用版も作っておくと応用が利きます。</p>`
        },
        {
          title: '6. 幅優先探索 (BFS) ― キューで層を広げる',
          content: `
            <p>BFS は <strong>キュー</strong> に頂点を入れ，取り出しながら隣接を追加。距離最短問題の定番。</p>
            <pre><code>enqueue(Q, s)
visited[s] ← true
while (not isEmpty(Q))
  v ← dequeue(Q)
  for each u in G[v]
    if (not visited[u]) then
      visited[u] ← true
      enqueue(Q, u)
    endif
  endfor
endwhile</code></pre>
            <p>キューに入れた瞬間に <code>visited</code> を立てると多重登録を防げます。</p>`
        },
        {
          title: '7. 再帰をスタックで手動展開 ― フレームを自作する',
          content: `
            <p>再帰呼び出しが深いとスタックオーバーフローの恐れ。<br />
            関数引数を <code>push</code> して while で回せば<strong>反復(deep→wide)版</strong>を作れます。</p>
            <pre><code>// 深さ優先探索 (DFS) iterative
push(S, s)
while (not isEmpty(S))
  v ← pop(S)
  if (not visited[v]) then
    visited[v] ← true
    for each u in G[v] 降順
      push(S, u)
    endfor
  endif
endwhile</code></pre>
            <p>降順で push するとグラフは昇順に処理され，<em>再帰版</em>と同じ順番が得られます。</p>`
        },
        {
          title: '8. 2 スタックで作るキュー／2 キューで作るスタック',
          content: `
            <p>データ構造の置き換え問題。試験では「制約ライブラリが片方しか無い」設定で出題されがち。</p>
            <ul>
              <li><strong>2 スタック → キュー</strong>: 入力用 <code>S1</code>, 出力用 <code>S2</code>. <code>dequeue</code> 時に S2 が空なら S1 から全部移す。</li>
              <li><strong>2 キュー → スタック</strong>: <code>push</code> で空キューに入れてから残りを enqueue し直し，先頭をトップにする。</li>
            </ul>`
        },
        {
          title: '9. 優先度付きキュー (ヒープ) 入門',
          content: `
            <p>通常キューは順序維持だが，<strong>ヒープ</strong> を使うと常に最小(最大)を <code>O(log n)</code> で取り出せます。
            配列実装なら <code>parent = i div 2</code>, <code>left = 2i</code>, <code>right = 2i＋1</code> のインデックス計算を暗記。</p>`
        },
        {
          title: '10. 実戦フローチャート ― 4 手で形にする',
          content: `
            <ol>
              <li><strong>何を保持？</strong> — 入順・出順・優先度を確認</li>
              <li><strong>サイズ制限？</strong> — 配列長を先に確定 (循環か動的か)</li>
              <li><strong>操作は 2 種以内？</strong> — push/pop だけ？ enqueue/dequeue＋他？</li>
              <li><strong>擬似言語テンプレ貼付 → 変数置換</strong> — バグらせない最短コース</li>
            </ol>
            <p>スタック or キューの見分けがつけば 8 割クリア。残りは<strong>サイズ管理</strong>と<strong>境界条件</strong>です！</p>`
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
