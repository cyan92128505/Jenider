<template>
  <el-container>
    <el-header>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/record">Record</router-link>
      </div>
    </el-header>
    <el-main>
      <el-row>
        <el-col :sm={span:12,offset:6} :xs={span:24}>
          <router-view />
        </el-col>
      </el-row>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  border: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.el-container {
  display: flex;
  min-height: 100vh;
  align-items: stretch;
  align-content: stretch;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
}

.el-main {
  background-color: #e9eef3;
  flex-grow: 2;
  flex-shrink: 1;
  flex-basis: 0%;
}
</style>
