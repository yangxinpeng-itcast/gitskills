<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">Add Hero</h2>
    <form>
      <div class="form-group">
        <label for="name">姓名</label>
        <input type="txt" class="form-control" v-model="formData.name" id="name" placeholder="姓名" />
      </div>
      <div class="form-group">
          <label for="sex">出生年月</label>
        <select class="form-control" v-model="formData.date">
          <option value="2019-01-02">2019-01-02</option>
          <option value="2015-01-05">2015-01-05</option>
        </select>
      </div>
      <button type="submit" class="btn btn-success" @click="add">提交</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      formData: {
        name: "",
        date: ""
      }
    };
  },
  methods: {
      add() {
          axios.post('http://localhost:3000/brands',this.formData)
          .then(res=>{
              if (res.status==201) {
                  //push作用是跳转到对应路由，根据路由规则显示对应组件
                  this.$router.push({ name:'herolist'})
              }
          })
      }
  }
};
</script>

<style>
</style>
