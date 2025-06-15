<template>
  <div class="min-h-screen bg-[#f8fafc] py-10 px-6 sm:px-10 text-center">
    <div class="bg-white shadow-md rounded-xl max-w-[820px] mx-auto p-8 sm:p-10">
      <h1 class="text-4xl font-extrabold text-green-700 mb-10 border-b pb-4">アルゴリズム入門</h1>

      <section class="mb-10">
        <h2 class="text-2xl font-bold text-green-600 border-l-4 border-green-400 pl-4">
          第1章 アルゴリズムとは
        </h2>
        <p class="mt-4 text-gray-700 text-lg">
          アルゴリズムとは、「ある問題を解決するための手順」のことです。コンピュータに命令する際には、あいまいな指示ではなく、明確な順序で記述された手順が必要です。レシピのように、材料（データ）と作り方（処理手順）を組み合わせて処理を進めていくものと考えるとよいでしょう。
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-bold text-green-600 border-l-4 border-green-400 pl-4">
          第2章 変数と代入
        </h2>
        <p class="mt-4 text-gray-700 text-lg">
          変数はデータを一時的に保存しておくための「箱」です。たとえば、<code
            class="text-pink-600 bg-gray-100 px-1 rounded"
            >intA ← 5</code
          >
          は intA に 5 を代入する処理です。
        </p>
        <p class="mt-2 text-gray-700 text-lg">
          <code class="text-pink-600 bg-gray-100 px-1 rounded">intA ← intA + 1</code> は intA の値に
          1 を加えて更新します（インクリメント）。
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-bold text-green-600 border-l-4 border-green-400 pl-4">
          第3章 フローチャートと擬似言語
        </h2>
        <p class="mt-4 text-gray-700 text-lg">
          フローチャートでは、以下のような図形を使ってアルゴリズムを視覚的に表現します。
        </p>
        <ul class="list-disc list-inside mt-2 space-y-1 text-gray-700 text-lg">
          <li>端子：開始・終了（楕円）</li>
          <li>処理：計算や代入（長方形）</li>
          <li>判断：条件分岐（ひし形）</li>
          <li>入出力：データの受け渡し（台形）</li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-bold text-green-600 border-l-4 border-green-400 pl-4">
          第4章 制御構造
        </h2>
        <ul class="list-disc list-inside mt-4 space-y-1 text-gray-700 text-lg">
          <li>順次処理：上から順に処理を実行</li>
          <li>選択処理：条件によって処理を分ける（if文）</li>
          <li>繰り返し処理：同じ処理を繰り返す（while, for文）</li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-bold text-green-600 border-l-4 border-green-400 pl-4">
          第5章 アルゴリズムの具体例
        </h2>

        <p class="mt-4 text-gray-700 font-semibold text-lg">1から3までの合計：</p>
        <pre
          class="bg-gray-100 text-gray-800 rounded-lg p-4 mt-2 overflow-x-auto text-base text-left"
        ><code>N ← 1
SUM ← 0
while (N ≦ 3)
    SUM ← SUM + N
    N ← N + 1
endwhile</code></pre>

        <p class="mt-6 text-gray-700 font-semibold text-lg">1～100までの偶数の合計：</p>
        <pre
          class="bg-gray-100 text-gray-800 rounded-lg p-4 mt-2 overflow-x-auto text-base text-left"
        ><code>N ← 1
SUM ← 0
while (N ≦ 100)
    if (N % 2 = 0)
        SUM ← SUM + N
    endif
    N ← N + 1
endwhile</code></pre>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-green-600 border-l-4 border-green-400 pl-4">
          第6章 擬似言語の文法
        </h2>
        <ul class="list-disc list-inside mt-4 space-y-1 text-gray-700 text-lg">
          <li>代入：A ← B</li>
          <li>条件分岐：if ～ then ～ endif</li>
          <li>繰り返し：while ～ endwhile</li>
          <li>演算子：+, -, *, /, %, =, ≠, &lt;, &gt;, and, or, not</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GrammarGuide',
}
</script>

<style scoped>
pre {
  font-family: 'Courier New', monospace;
  white-space: pre-wrap;
  line-height: 1.6;
}
</style>
