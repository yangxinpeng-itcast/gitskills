<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄列表</h2>
    <!-- <a class="btn btn-success" href="add.html">添加</a> -->
    <router-link :to="{name:'add'}">添加</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>生日</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" v-bind:key="item.id">
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.date}}</td>
            <td>
              <a href="edit.html">编辑</a>
              &nbsp;&nbsp;
              <a href="javascript:window.confirm('Are you sure?')" @click="del(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
//导入axios
import axios from 'axios'
export default {
  //存储英雄列表数据
  data() {
    return {
      list:[]
    }
  },
  //组件加载完毕后发送请求
  mounted() {
    this.loadData()

  },
  methods:{
    //发送请求，获取数据
    loadData() {
      axios.get('http://localhost:3000/brands')
      .then((res)=>{
       
        console.log(res)
        var {data,status} = res
        if (status == 200) {
           //请求成功将数据添加到list中
           this.list=data
        }
      })
      .catch(err=>{
        console.log(err)
      })
    },
    del(id) {
      axios.delete('http://localhost:3000/brands/'+id)
      .then(res=>{
        var {status}=res
        console.log(res)
        if (status === 200) {
          this.loadData()
        }
      })
    },
    add() {
      
    }
  }
};
</script>

<style>
</style>
