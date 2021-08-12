<!--
 * @Author: 何元鹏
 * @Date: 2019-09-04 13:51:08
 * @LastEditors: 何元鹏
 * @LastEditTime: 2021-08-10 15:35:57
 * @Description: 首页
 -->
<template>
  <div
    class="home"
    ref="printTemp"
  >

    <div class="home-header container mx-auto px-4">
      天行健，君子当自强不息
      <div>
        <button @click="handleContainer">导出开始</button>
      </div>
    </div>
    <div class="home-center">
      <div class="implement">
        <router-link to="/vue">GO</router-link>
      </div>
    </div>
    <div class="home-footer">
      <span>Copyright © heyp 2019 all right reserved</span>
      <span>当前时间： 2019-07-30 15:50:08</span>
    </div>
  </div>
</template>

<script>
import home from "./home.js";
import JSZip from "jszip";
import FileSaver from "file-saver";
export default {
  mixins: [home],
  data() {
    return {};
  },
  mounted() {
    window.addEventListener(
      "message",
      function (event) {
        console.log(event.data);
      },
      false
    );
    let bi = {
      name: 1,
    };
    let person = Object.create(bi);
    person.age = 2;
    console.log(person);
    console.log(person.name);
    console.log(Object.getPrototypeOf(person) === bi);
  },
  beforeDestroy() {},
  methods: {
    handleContainer() {
      const zip = new JSZip();
      const promises = [];
      for (let index = 0; index < 5; index++) {
        const p = this.getPdf(this.$refs.printTemp, `测试数据${index}`);
        promises.push(p);
      }

      Promise.all(promises)
        .then(async (pdfs) => {
          for (let i = 0; i < pdfs.length; i++) {
            const { PDF, name } = pdfs[i];
            // 如果只是导出一个pdf，则导出pdf格式
            if (pdfs.length === 1) {
              PDF.save(`${name}-${new Date().getTime()}.pdf`);
              this.allLoading = false;
              this.loadingText = "正在请求数据";
            } else {
              // 否则添加到压缩包里面
              await zip.file(
                `${name}-${new Date().getTime()}.pdf`,
                PDF.output("blob")
              );
            }
          }
          if (pdfs.length > 1) {
            zip.generateAsync({ type: "blob" }).then((content) => {
              FileSaver.saveAs(content, "测试.zip");
            });
          }
        })
        .finally(() => {
          this.allLoading = false;
          this.loadingText = "正在请求数据";
        });
    },
  },
  updated() {},
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  background: url("../assets/timg.jpeg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  &-header {
    padding: 4rem 3rem;
    font-size: 2rem;
    font-family: cursive;
    color: #eee;
    font-weight: 600;
  }
  &-center {
    display: flex;
    flex: 1;
    justify-content: center;
    .implement {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 2.5rem;
      color: #eee;
      position: relative;
      border-radius: 100%;
      background-color: antiquewhite;
      // background: url("../assets/timg.jpeg") no-repeat center/cover;
      &::after {
        position: absolute;
        left: 0;
        top: 10%;
        z-index: -1;
        border-radius: 100%;
        width: 100%;
        height: 100%;
        background: inherit;
        filter: blur(10px) brightness(80%) opacity(0.8);
        content: "";
        transform: scale(0.95);
      }
    }
  }
  &-footer {
    display: inline-flex;
    background-color: goldenrod;
    height: 2rem;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    opacity: 0.6;
    span {
      color: #fff;
    }
  }
}
</style>
