<template>
  <div class="reference">
    <h1>リスト総まとめ ― 科目B 擬似言語で学ぶ“つなぐ”データ構造</h1>
    <p class="subtitle">ねらい</p>
    <p>
      1 本で単方向・双方向・循環・配列表現リストを一気に理解し、<br />
      基本情報技術者試験（科目 B）で頻出の操作パターンを自力で書けるようになる。
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
          title: '1. リストとは何か',
          content: `
            <table class="striped-table">
              <thead><tr><th>配列</th><th>リスト</th></tr></thead>
              <tbody>
                <tr><td>メモリ上で連続</td><td>ノードが「バラバラ」でも next でリンク</td></tr>
                <tr><td>添字 で O(1) 参照</td><td>先頭から順にたどる ― ランダムアクセス苦手</td></tr>
                <tr><td>挿入・削除は要素ずらしが必要</td><td>ポインタ付け替えだけ（O(1））</td></tr>
              </tbody>
            </table>
          `,
        },
        {
          title: '2. 単方向リスト（Singly Linked List）',
          content: `
            <pre><code>// ノード定義
クラス Node
  整数型: val
  Node  : next ← 未定義の値
  コンストラクタ Node(整数型: x)
    val ← x
クラス終わり</code></pre>
            <table class="striped-table">
              <thead><tr><th>操作</th><th>擬似コードひな形</th><th>ポイント</th></tr></thead>
              <tbody>
                <tr><td>先頭挿入</td><td>newNode.next ← head; head ← newNode</td><td>O(1)</td></tr>
                <tr><td>末尾挿入</td><td>末尾まで while、p.next ← newNode</td><td>走査 O(n)</td></tr>
                <tr><td>中間挿入</td><td>「前ノード prev を見つけて → 付け替え」</td><td>delete も同様</td></tr>
                <tr><td>走査</td><td>p ← head; while(p≠未) { …; p ← p.next }</td><td>典型パターン</td></tr>
                <tr><td>長さ</td><td>カウンタ方式 or 再帰方式</td><td>試験で頻出</td></tr>
                <tr><td>検索</td><td>線形探索のみ（平均 n/2）</td><td>if(p.val＝k)</td></tr>
              </tbody>
            </table>
          `,
        },
        {
          title: '3. 双方向リスト（Doubly Linked List）',
          content: `
            <p>prev ⇄ [ val | next ]<br>削除が O(1)。後ろを指す prev があるので、直前ノードを探す必要がない</p>
            <pre><code>// 削除手続きの定石
if (t.prev ≠ 未)
  t.prev.next ← t.next
else          // 先頭ノード
  head ← t.next
endif
if (t.next ≠ 未)
  t.next.prev ← t.prev
endif</code></pre>
          `,
        },
        {
          title: '4. 循環リスト（Circular List）',
          content: `<p>末尾ノードの next が再び先頭 (head) を指す<br>用途：ラウンドロビン、リングバッファ<br>走査は「必ず 1 周だけ」 – do–while (p ≠ head) が鉄板</p>`,
        },
        {
          title: '5. 配列表現リスト（Array-based List）',
          content: `
            <table class="striped-table">
              <thead><tr><th>特徴</th><th>使いどころ</th></tr></thead>
              <tbody>
                <tr><td>空き要素を -1 や null でマーキング</td><td>固定長で構わない場合</td></tr>
                <tr><td>圧縮（compact）処理が必要</td><td>「左詰め＋末尾 -1 埋め」パターン</td></tr>
              </tbody>
            </table>
            <pre><code>while(i ≤ N)
  if(L[i] ≠ -1)
    L[write] ← L[i]; write ← write + 1
  endif
  i ← i + 1
endwhile
while(write ≤ N)   // 末尾初期化
  L[write] ← -1; write ← write + 1
endwhile</code></pre>
          `,
        },
        {
          title: '6. 計算量早見表',
          content: `
            <table class="striped-table">
              <thead><tr><th>操作</th><th>単方向</th><th>双方向</th><th>循環</th><th>配列</th></tr></thead>
              <tbody>
                <tr><td>先頭挿入</td><td>O(1)</td><td>O(1)</td><td>O(1)</td><td>O(n)</td></tr>
                <tr><td>末尾挿入</td><td>O(n)</td><td>O(n)</td><td>O(1)*</td><td>O(1)**</td></tr>
                <tr><td>中間削除</td><td>O(n)</td><td>O(1)</td><td>O(1)</td><td>O(n)</td></tr>
                <tr><td>検索</td><td>O(n)</td><td>O(n)</td><td>O(n)</td><td>O(n)</td></tr>
              </tbody>
            </table>
            <p>* 末尾ポインタを保持する実装なら 1 ステップ<br>** 空きを持たない動的配列なら再配置が伴う</p>
          `,
        },
        {
          title: '7. 典型バグと対策',
          content: `
            <table class="striped-table">
              <thead><tr><th>症状</th><th>原因</th><th>チェックポイント</th></tr></thead>
              <tbody>
                <tr><td>無限ループ</td><td>p ← p.next を忘れた</td><td>ループ末尾を必ず確認</td></tr>
                <tr><td>メモリリーク</td><td>削除後に参照が残る</td><td>t.prev/next ← 未定義 で切り離す</td></tr>
                <tr><td>先頭ポインタ喪失</td><td>head を誤って書き換え</td><td>先頭削除専用分岐を設ける</td></tr>
                <tr><td>自己参照</td><td>p.next ← p など</td><td>代入右辺・左辺を紙に書いて追跡</td></tr>
              </tbody>
            </table>
          `,
        },
        {
          title: '8. 科目 B 出題パターン',
          content: `<ul><li>穴埋め：return …、p ← p.next の欠落を探す</li><li>追跡トレース：実行ステップ表を書かせる</li><li>複合処理：フィルタ＋集計（範囲付き合計など）／スタック・キューと組み合わせて逆順出力／オーダ比較：配列 VS リストの適材適所を説明</li></ul>`,
        },
        {
          title: '9. 学習フロー（初心者向け）',
          content: `<ul><li>紙に書く – ノードを四角、矢印でポインタ</li><li>先頭挿入→末尾挿入→削除 を実装</li><li>走査テンプレートを丸暗記</li><li>応用：重複検出、逆順表示、圧縮アルゴリズム</li><li>過去問で 「何が抜けたら壊れるか」 を意識して穴埋めを解く</li></ul>`,
        },
        {
          title: '10. まとめ',
          content: `<p>リストは 「ポインタをつなぎ替えるだけで柔軟」 な反面、どこをつないでいるか が一目で分かりづらい。<br>コツは「図に描く」「1 行ずつ指で追う」。<br>この章をマスターすれば――<br>ソート（挿入ソート／マージ） や ハッシュ連結リスト など 上位概念もスムーズに理解できます。</p><p><strong>次のステップ</strong><br>“スタック・キュー” 章で LIFO / FIFO とリストの組み合わせを学ぶ<br>“木構造” に進み、多分岐ノード をリストの延長として捉える</p>`,
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
table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}
th,
td {
  border: 1px solid #aaa;
  padding: 6px 10px;
  text-align: left;
}
.striped-table tbody tr:nth-child(odd) {
  background-color: #f9f9f9;
}
.striped-table thead {
  background-color: #e0e0e0;
}
ul {
  padding-left: 20px;
  list-style: disc;
}
</style>
