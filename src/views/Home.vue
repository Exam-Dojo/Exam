<!-- src/views/Home.vue -->
<template>
  <div class="home-container">
    <section class="section">
      <h2>「マスタリング 基本情報 / 科目B」とは</h2>
      <p>
        「マスタリング 基本情報 /
        科目B」は基本情報技術者試験科目Bの合格を目的としたWebサイトとなっています。
        ここでは、基本情報技術者試験科目Ｂの参考書と問題集を完全無料で提供しています。ぜひ、試験対策としてご活用ください。
      </p>
    </section>

    <section class="section">
      <h2>基本情報技術者試験科目B 概要</h2>
      <p>
        基本情報技術者試験の科目Bは、2023年4月（令和5年度）から新しい形式で導入され、以前の午後試験に相当する部分です。
      </p>
      <ul class="center-list">
        <li>試験時間 <br />100分</li>
        <li>問題数 <br />約20問（※出題年度によって若干変動）</li>
        <li>出題形式 <br />選択式（多肢選択、穴埋め選択など）</li>
        <li>合格基準 <br />60%以上</li>
      </ul>
    </section>

    <section class="section">
      <h2>基本情報技術者試験科目B 合格のコツ</h2>
      <p>基本情報技術者試験科目Bで合格するコツは以下の大きく3つあると考えています。</p>
      <ol class="tips-list">
        <li>
          必ず検算をすること<br />
          基本情報技術者試験科目Ｂの疑似言語の問題では検算ができる問題がいくつも登場してきます。
          例えば、令和6年に出題された問題に以下のような問題があります。実際に考えてみてください。
          <br />
          <img
            src="@/assets/home.png"
            alt="検算例"
            style="display: block; margin: 20px auto; max-width: 100%"
          />
          <br />
          答えはイ（x > y and x > z）です。このとき、必ず検算をしていただきたいのです。
          実際に管理人が解いたときには、「x = 3, y = 1, z = 0」の場合、「x = 2, y = 3, z =
          1」の場合、「x = 0, y = 2, z = 3」の場合に場合分けをしました。
          この意図としては、xが最大値の場合、yが最大値の場合、zが最大値の場合の3つに場合分けをすることにより、実際にreturn
          x, return y, return zが返ってくるかを確かめることです。
          このような検算により、自身の間違いに気づくことができたり、合っていることがわかったりします。
          時間に余裕をもてるように訓練を積み、検算ができるくらいの速度感で試験を解きましょう。
        </li>
        <li>
          正解した問題も思考のプロセスが正しいか必ず確認すること<br />
          基本情報技術者試験科目Ｂで合格するには、問題に対して正しい思考プロセスを踏むことが必要です。
          必ず試験では練習時に解いた問題と同じ思考プロセスを辿ることによって解くことができる問題があります。
          そのため、管理人としては皆様に必ず正答した問題も回答を読み、思考プロセスが正しいか確認して頂きたいです。
          この勉強法が既知の問題のみならず、未知の問題に遭遇したときにもあなたの柔軟な思考に役立ち、正答に繋がります。
        </li>
        <li>
          インプット1割、アウトプット9割のアウトプット重視の勉強をすること<br />
          基本情報技術者試験科目Ｂにおいて必要な知識は少なく、知識で解ける問題は少ないです。
          そこで、必ずアウトプットを重視した勉強法をして頂きたいです。
          毎日1問以上解くことにより、プログラムを解く脳に変貌するのです。
        </li>
      </ol>
    </section>

    <section class="section">
      <h2>おすすめの参考書</h2>
      <p>
        科目Bに特化した参考書や問題集、レビューの高い書籍、初心者向けと上級者向けの書籍の比較などを紹介します。
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
.home-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: Inter, sans-serif;
}

.section {
  margin-bottom: 50px;
}

.section h2 {
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
  border-bottom: 2px solid #ccc;
  padding-bottom: 5px;
}

.section p {
  font-size: 18px;
  line-height: 1.8;
  color: #555;
}
</style>
