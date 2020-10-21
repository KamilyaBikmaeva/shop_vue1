<template>
  <section class="rings">
    <h1>Кольца</h1>
    <ProductList category="rings"/>
  </section>
</template>

<script>
import ProductList from '@/components/ProductList'
import SideMainLayout from '@/layout/SideMainLayout'

export default {
  name: 'index',
  components: {
    ProductList,
    SideMainLayout
  }
}
</script>

<style lang="css">
</style>
