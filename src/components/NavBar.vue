<template>
  <div>
    <!-- ヘッダータイトルをクリック可能に -->
    <router-link to="/" style="text-decoration: none">
      <div
        style="
          width: 525px;
          height: 76px;
          justify-content: center;
          display: flex;
          flex-direction: column;
          color: black;
          font-size: 40px;
          font-family: Inter;
          font-weight: 500;
          line-height: 60px;
          word-wrap: break-word;
          cursor: pointer;
        "
      >
        基本情報技術者試験 科目B
      </div>
    </router-link>

    <!-- ナビゲーションバー -->
    <div
      style="width: 1456px; height: 70px; position: relative; background: #828282; overflow: hidden"
    >
      <router-link to="/reference" style="text-decoration: none">
        <div
          style="
            width: 123px;
            height: 48px;
            left: 217px;
            top: 11px;
            position: absolute;
            justify-content: center;
            display: flex;
            flex-direction: column;
            color: white;
            font-size: 32px;
            font-family: Inter;
            font-weight: 500;
            line-height: 48px;
            word-wrap: break-word;
            cursor: pointer;
          "
        >
          参考書
        </div>
      </router-link>
      <router-link to="/workbook" style="text-decoration: none">
        <div
          style="
            width: 123px;
            height: 48px;
            left: 632px;
            top: 11px;
            position: absolute;
            justify-content: center;
            display: flex;
            flex-direction: column;
            color: white;
            font-size: 32px;
            font-family: Inter;
            font-weight: 500;
            line-height: 48px;
            word-wrap: break-word;
            cursor: pointer;
          "
        >
          問題集
        </div>
      </router-link>
      <router-link to="/contact" style="text-decoration: none">
        <div
          style="
            width: 235px;
            height: 48px;
            left: 986px;
            top: 11px;
            position: absolute;
            justify-content: center;
            display: flex;
            flex-direction: column;
            color: white;
            font-size: 32px;
            font-family: Inter;
            font-weight: 500;
            line-height: 48px;
            word-wrap: break-word;
            cursor: pointer;
          "
        >
          お問い合わせ
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    navItemStyle(left) {
      return {
        width: '123px',
        height: '48px',
        position: 'absolute',
        left: `${left}px`,
        top: '11px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '32px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500,
        lineHeight: '48px',
        textDecoration: 'none',
      }
    },
  },
  computed: {
    navbarStyle() {
      return {
        width: '1456px',
        height: '70px',
        position: 'relative',
        background: '#828282',
        overflow: 'hidden',
      }
    },
  },
}
</script>
