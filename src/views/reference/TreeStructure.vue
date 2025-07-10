<template>
  <div class="reference">
    <h1>基本情報技術者試験〈科目B 擬似言語〉</h1>
    <p class="subtitle">― はじめてでも解ける “木構造” 攻略本 ―</p>
    <p>
      この参考書は <strong>プログラミング初心者</strong> が「木構造」を扱う問題を自力で解けるようになることを目標に作成しました。<br />
      <em>イメージする → ひな形を写す → 指標を計算する</em> の 3 ステップで習得できるよう，代表パターンを 10 トピックに凝縮しています。
    </p>

    <section v-for="section in sections" :key="section.title" class="section">
      <h2>{{ section.title }}</h2>
      <div v-html="section.content"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TreeReferencePage',
  data() {
    return {
      sections: [
        {
          title: '1. 木構造とは？ ― "親" と "子" の階層',
          content: `
            <p>木(Tree) は <strong>サイクルを持たない連結グラフ</strong>。各ノードは 1 つの親(parent) と 0 個以上の子(children) を持ち，<strong>根(root)</strong> だけ親を持ちません。</p>
            <ul>
              <li>レベル(level) : 根 = 0，その子 = 1 ...</li>
              <li>高さ(height) : 最下層レベル (ノード数でなく「段」数)</li>
              <li>葉(leaf) : 子を持たないノード</li>
            </ul>
            <p>“家系図” を思い出すと構造がつかみやすいです。</p>`
        },
        {
          title: '2. 2 通りの表現 ― 配列 vs 連結',
          content: `
            <table><thead><tr><th>方式</th><th>利点</th><th>欠点</th></tr></thead><tbody>
              <tr><td>配列(完全二分木)</td><td>添字計算のみで <code>O(1)</code> アクセス (<code>left = 2i</code>)</td><td>穴が空くと無駄メモリ</td></tr>
              <tr><td>連結リスト(ポインタ)</td><td>疎な木でも省メモリ</td><td>ポインタ追跡の手間</td></tr>
            </tbody></table>
            <p>試験では “完全二分木 = 配列” ／ “一般木 = child[] 配列” と覚えると実装がスムーズです。</p>`
        },
        {
          title: '3. 深さ優先走査 ― Pre / In / Post ひな形',
          content: `
            <pre><code>// 再帰版 (二分木)
手続き: preorder(Node: v)
  if (v = null) return
  処理(v)         // Pre
  preorder(v.left)
  preorder(v.right)
終
// inorder, postorder は「処理」の位置を変更するだけ！</code></pre>
            <p>まず 3 パターンを書き分け，機械的に<strong>左・右</strong> を呼び出す流れを体に覚えさせましょう。</p>`
        },
        {
          title: '4. 幅優先走査 (BFS) ― キュー 1 本で層を読む',
          content: `
            <pre><code>enqueue(Q, root)
while (not isEmpty(Q))
  v ← dequeue(Q)
  処理(v)
  for each child in v.children
    enqueue(Q, child)
  endfor
endwhile</code></pre>
            <p>層番号 <code>depth</code> を保存したければ <strong>キューにペア (node, level)</strong> を積むだけ。</p>`
        },
        {
          title: '5. 再帰のスタック変換 ― Iterative DFS',
          content: `
            <p>再帰が禁止の問題では自分で <strong>スタック</strong> を使い関数フレームを模倣。</p>
            <pre><code>push(S, root)
while (not isEmpty(S))
  v ← pop(S)
  処理(v)
  // 右 → 左 の順で push すると左が先に処理され preorder と同じ順番になる
  push(S, v.right)
  push(S, v.left)
endwhile</code></pre>`
        },
        {
          title: '6. 二分探索木(BST) ― 挿入 & 探索 2 行パターン',
          content: `
            <pre><code>// 探索 search(key)
if (v = null) return null
if (key = v.key) return v
elseif (key < v.key) return search(v.left)
else return search(v.right)

// 挿入 insert(key)
if (v = null) then v ← 新ノード(key)
elseif (key < v.key) v.left ← insert(v.left, key)
else v.right ← insert(v.right, key)</code></pre>
            <p>左右比較のみで <code>O(h)</code> で済むのが BST の強み。ただし高さ <code>h</code> が偏ると最悪 <code>O(n)</code> になる点に注意。</p>`
        },
        {
          title: '7. 木の指標 ― 高さ・節点数・葉数 を一括取得',
          content: `
            <pre><code>関数: stats(Node: v) 返り値: (height, nodes, leaves)
  if (v = null) return (−1, 0, 0)  // 高さ: 空木 = −1
  (hl, nl, ll) ← stats(v.left)
  (hr, nr, lr) ← stats(v.right)
  h ← max(hl, hr) ＋ 1
  n ← nl ＋ nr ＋ 1
  l ← (v.left = null and v.right = null) ? 1 : (ll ＋ lr)
  return (h, n, l)</code></pre>
            <p>同時に返すと 1 回の走査で済む (<code>O(n)</code>)。空木高さを −1 にすることで葉高さが 0 になります。</p>`
        },
        {
          title: '8. 最小共通祖先 (LCA) ― 2 つの道をそろえる',
          content: `
            <p>最もシンプルなのは「<strong>親ポインタをたどる</strong> → リストで比べる」方法。</p>
            <ol>
              <li>各ノードから根までの道を配列 pathA, pathB に push</li>
              <li>後ろ(根側)から比べて分岐直前のノードが LCA</li>
            </ol>
            <p>必要十分。多クエリなら <em>二分リフト</em> などが登場しますが科目Bではまず出ません。</p>`
        },
        {
          title: '9. ヒープ ― 完全二分木の親子計算',
          content: `
            <p><strong>最小ヒープ</strong>は「親 ≦ 子」が条件。配列添字だけで操作できます。</p>
            <pre><code>// insert(x)
size ← size＋1
H[size] ← x
i ← size
while (i > 1 and H[i] < H[i div 2])
  swap(H[i], H[i div 2])
  i ← i div 2
endwhile</code></pre>
            <p>親⇔子 の <code>swap</code> をループで上に上げる『ヒープ化(up-heap)』をマスターしましょう。</p>`
        },
        {
          title: '10. 実戦フローチャート ― 木問題を 5 秒で分類',
          content: `
            <ol>
              <li><strong>木の種類</strong> — 一般木 / 二分木 / 完全二分木? 配列かポインタか決まる</li>
              <li><strong>走査方法</strong> — DFS(Pre/In/Post) か BFS か</li>
              <li><strong>値操作</strong> — 探索 / 挿入 / 削除 → BST or ヒープ か</li>
              <li><strong>指標計算</strong> — 高さ / LCA / パス長 は再帰ひな形で一発</li>
              <li><strong>境界条件</strong> — 空木(null) の返り値を決めてバグ防止</li>
            </ol>
            <p>この 5 手順を当てはめると，木構造の問題は “型 → 走査 → 計算式” の順に分解でき，合格レベルのコードが最短で書けます！</p>`
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
