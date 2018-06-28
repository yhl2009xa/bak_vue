<template>
    <div class="layout">
      <Layout>
         <aside-menu></aside-menu>
        <Layout>
          <header></header>
          <Content class="main_content">
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </div>
</template>
<style src="./index.less" lang="less" scoped></style>
<script src="./index.js"></script>
