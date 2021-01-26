<template>
  <el-container>
    <el-header>
      <el-link href="/">JENIDER</el-link>
      <router-link to="/record"><el-button icon="el-icon-document" circle /></router-link>
    </el-header>
    <el-main>
      <el-row>
        <el-col :sm={span:12,offset:6} :xs={span:24}>
          <router-view />
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <router-link to="/about"><el-button icon="el-icon-info" circle /></router-link>
    </el-footer>
  </el-container>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  border: 0;
}

.el-container {
  display: flex;
  min-height: 100vh;
  align-items: stretch;
  align-content: stretch;
}

.el-header,
.el-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-main {
  flex-grow: 2;
  flex-shrink: 1;
  flex-basis: 0%;
}
</style>
