<template>
  <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
    <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
      <MenuItem name="1-1">
        <Icon type="ios-navigate"></Icon>
        <span>Option 1</span>
      </MenuItem>
      <MenuItem name="1-2">
        <Icon type="search"></Icon>
        <span>Option 2</span>
      </MenuItem>
      <MenuItem name="1-3">
        <Icon type="settings"></Icon>
        <span>Option 3</span>
      </MenuItem>
    </Menu>
  </Sider>
</template>


<style src="./index.less" lang="less" scoped></style>
<script src="./index.js"></script>
