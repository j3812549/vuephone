<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1" class="layout-nav-meru">
            <Icon type="ios-navigate"></Icon>
              <router-link to="/home/profile">
                用户
              </router-link>
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu theme="light" width="auto" @on-select="ChangeMenu" >
            <template v-for="item in routerList">
              <side-menu-item
                  v-if="item.children&&item.children.length!==0"
                  :parent-item="item"
                  :key="'menu-'+item.name"
              >
              </side-menu-item>
              <menu-item v-else
                  :name="item.name"
                  :key="'menu-'+item.name"
              >
                  <Icon :type="item.meta.icon" :size="15"/>
                  <span>{{ item.meta.title }}</span>
              </menu-item>
            </template>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem v-for="(item, index) of breadcrumbList" :key="index">{{item.title}}</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <view-center></view-center>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import sideMenuItem from './components/side-menu-item'
import ViewCenter from './components/artical-publish-center'

export default {
  name: 'Home',
  components: {
    sideMenuItem,
    ViewCenter
  },
  data () {
    return {
      breadcrumbList: [
        {
          title: 'education'
        },
        {
          title: 'education-1'
        }
      ],
      routerList: []
    }
  },
  methods: {
    getRouterList () {
      let routes = this.$router.options.routes
      for (var i = 0; i < routes.length; i++) {
        if (routes[i].path === '/home') {
          this.routerList = routes[i].children
        }
      }
    },
    ChangeMenu (val) {
      this.breadcrumbList.splice(0, this.breadcrumbList.length)
      var ary = val.split('/')
      for (var i = 0; i < ary.length; i++) {
        let obj = {'title': ary[i]}
        this.breadcrumbList.push(obj)
      }
      this.$router.push({ path: '/home/' + val })
    }
  },
  mounted () {
    this.getRouterList()
  }
}
</script>

<style lang="stylus" scoped>
.layout
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  .layout-nav-meru
    float right
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}

.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
