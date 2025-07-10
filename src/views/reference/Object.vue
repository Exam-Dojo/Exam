<template>
  <div class="reference">
    <h1>基本情報技術者試験〈科目B 擬似言語〉</h1>
    <p class="subtitle">― オブジェクト指向 “これだけ” 参考書 ―</p>
    <p>
      本章では，科目 B
      で頻出のオブジェクト指向（OOP）の概念を，プログラミング初心者でも読み切れるように項目別に整理する。<br />
      例示コードはすべて試験公式の記法に準拠している。
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
          title: '1. クラスとインスタンス',
          content: `
<table>
  <thead><tr><th>用語</th><th>ひとことで</th><th>例</th></tr></thead>
  <tbody>
    <tr><td>クラス</td><td>設計図・型</td><td>class Person ...</td></tr>
    <tr><td>インスタンス</td><td>実体</td><td>p ← Person("Ken", 18)</td></tr>
  </tbody>
</table>
<pre><code>// 最小クラス定義
class Person
  文字列型: name
  整数型:  age
  Person(文字列型: n, 整数型: a)
    name ← n
    age  ← a</code></pre>`,
        },
        {
          title: '2. コンストラクタと初期化',
          content: `
<p>インスタンス生成時に一度だけ呼ばれる初期化専用手続。</p>
<pre><code>○main()
  Person型: p ← Person("Alice", 20) // new は不要
</code></pre>`,
        },
        {
          title: '3. カプセル化（Encapsulation）',
          content: `
<p>データと操作をひとまとめにし，外部から直接触らせない。</p>
<pre><code>class Counter
  private 整数型: count
  Counter()
    count ← 0
  ○inc()
    count ← count + 1
  ○get()
    return count</code></pre>`,
        },
        {
          title: '4. 継承（Inheritance）',
          content: `
<pre><code>// 親クラス
class Vehicle
  整数型: speed
  Vehicle()
    speed ← 0
  ○accelerate()
    speed ← speed + 10

// 子クラス
class Car extends Vehicle
  整数型: fuel
  Car()
    Vehicle()
    fuel ← 100</code></pre>`,
        },
        {
          title: '5. ポリモーフィズムと動的束縛',
          content: `
<pre><code>class Animal
  ○speak()
    return "Some sound"
class Dog extends Animal
  ○speak()
    return "Woof"

○main()
  Animal型: a ← Dog()
  出力(a.speak()) // Woof</code></pre>
<p>変数の型ではなく<strong>実体</strong>でメソッドが決まる。</p>`,
        },
        {
          title: '6. 抽象クラスとインターフェース的書き方',
          content: `
<pre><code>abstract class Shape
  ○実数型: area() // 抽象メソッド

class Circle extends Shape
  実数型: r
  Circle(実数型: r0)
    r ← r0
  ○実数型: area()
    return 3.14 × r × r</code></pre>`,
        },
        {
          title: '7. static メンバとクラスメソッド',
          content: `
<pre><code>class Item
  static 整数型: count ← 0
  Item()
    count ← count + 1
  ○getCount()
    return count</code></pre>
<p>全インスタンスで共有される。</p>`,
        },
        {
          title: '8. 参照コピーと再代入',
          content: `
<pre><code>Person型: p1 ← Person("Ken", 20)
Person型: p2 ← p1  // 同じオブジェクトを指す
p1 ← Person("Leo", 25) // p2 は影響を受けない</code></pre>`,
        },
        {
          title: '9. オーバーロードとオーバーライド',
          content: `
<table>
  <thead><tr><th>用語</th><th>概要</th></tr></thead>
  <tbody>
    <tr><td>オーバーロード</td><td>同名で引数型・数が違う</td></tr>
    <tr><td>オーバーライド</td><td>親メソッドを子で上書き</td></tr>
  </tbody>
</table>`,
        },
        {
          title: '10. 典型パターン・落とし穴',
          content: `
<ul>
  <li>参照コピー後に変数を再代入しても他方へは影響しない</li>
  <li>static 書き換えは即座に全オブジェクトへ波及</li>
  <li>配列添字は 1 から（OOP問題でも忘れず）</li>
  <li>動的束縛の判断基準は「実体の型」</li>
</ul>`,
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
