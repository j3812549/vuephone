<template>
  <Submenu
    :name="parentItem.name"
  >
    <template slot="title">
      <Icon :type="parentItem.meta.icon" :size="15" />
      <span>{{ parentItem.meta.title }}</span>
    </template>
    <template v-for="item in parentItem.children">
      <side-menu-item v-if="item.children&&item.children.length!==0" :parent-item="item" :key="'menu-'+item.name">
      </side-menu-item>
      <menu-item v-else :name="item.name" :key="'menu-'+item.name">
        <Icon :type="item.meta.icon" :size="15" />
        <span>{{ item.meta.title }}</span>
      </menu-item>
    </template>
  </Submenu>
</template>

<script>
export default {
  name: 'sideMenuItem',
  data () {
    return {
    }
  },
  props: {
    parentItem: {
      type: Object,
      default: () => { }
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
