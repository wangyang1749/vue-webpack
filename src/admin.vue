<template>
  <div>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <el-divider></el-divider>
    
    <el-divider></el-divider>
    <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="toHtml"></el-input>
    

    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
    </el-row>
    <el-row>
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <el-input
                    type="textarea"
                    :rows="3"
                    placeholder="请输入内容"
                    @input="markdownToHtml"
                    v-model="markdown"
                    ></el-input>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple-light">
               
            </div>
        </el-col>
    </el-row>
     <dir id="toHtml">Result</dir>
  </div>
</template>
<script>
var markdown = require("markdown").markdown;
var toHtml;
export default {
  data() {
    return {
      markdown: "",
      toHtml: ""
    };
  },
  mounted() {
    toHtml = document.getElementById("toHtml");
  },
  methods: {
    markdownToHtml() {
      toHtml.innerHTML = ymarkdown.toHTML(this.markdown);
      //   alert();
    }
  },
  watch: {
    markdown() {
      toHtml.innerHTML = markdown.toHTML(this.markdown);
    }
  }
};
</script>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>