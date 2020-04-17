<!--
 * @Author: 何元鹏
 * @Date: 2019-09-04 15:08:12
 * @LastEditors: 何元鹏
 * @LastEditTime: 2019-10-23 14:37:07
 * @Description: file content
 -->
<template>
  <div class="voting-function">
    <div class="voting-title">投票表决2</div>
    <div class="voting-content">
      <h4>你最想喜欢的电影明星？</h4>
      <RadioGroup v-model="vertical">
        <Radio label="1">
          <span>刘德华</span>
        </Radio>
        <Radio label="2">
          <span>周润发</span>
        </Radio>
        <Radio label="3">
          <span>周星驰</span>
        </Radio>
        <Radio label="4">
          <span>梁朝伟</span>
        </Radio>
        <Radio label="5">
          <span>张家辉</span>
        </Radio>
        <Radio label="6">
          <span>古天乐</span>
        </Radio>
      </RadioGroup>
      <div class="voting-film">
        <div class="film-r">影评人编号：</div>
        <Input v-model="filmReviewNumber" type="text" placeholder="输入影评人编号 ">
          <span slot="append" @click="handleFilm">
            <Icon type="ios-aperture" />
          </span>
        </Input>
      </div>
      <div class="voting-button">
        <Button type="primary" :disabled="disabled" @click="handleVotingClick">确定</Button>
      </div>
      <div>刘德华投票统计：{{pollStatistics}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      pollStatistics: "",
      vertical: "",
      filmReviewNumber: "",
      disabled: true,
      filmArray: [],
      verticalArray: []
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleVotingClick() {
      this.verticalArray.push({
        film: this.filmReviewNumber,
        vertical: this.vertical
      });

      let hash = {};
      this.verticalArray = this.verticalArray.reduce(function(item, next) {
        hash[next.film] ? "" : (hash[next.film] = true && item.push(next));
        return item;
      }, []);
      const countOccurrences = (arr, val) =>
        arr.reduce((a, v) => (v.vertical === val ? a + 1 : a), 0);
      this.pollStatistics = countOccurrences(this.verticalArray, "1");
    },
    handleFilm() {
      this.disabled = false;
      this.filmArray.push(this.filmReviewNumber);
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.voting-function {
  width: 100%;
  height: 100%;
  position: relative;
  .voting-title {
    padding-top: 1rem;
    text-align: center;
    color: gray;
    font-size: 2rem;
  }
  .voting-content {
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    h4 {
      padding: 2rem;
      color: burlywood;
      font-size: 1rem;
    }
    .voting-button {
      padding: 2rem 0;
    }
    .voting-film {
      width: 20rem;
      margin: 2rem auto;
      .film-r {
        text-align: left;
        padding: 1rem 0;
      }
    }
  }
}
</style>
