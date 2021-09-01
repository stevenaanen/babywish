<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Jayla's Wishes</h1>

    <ul>
      <li
        class="card"
        v-for="product in $page.products.edges"
        :key="product.node.id"
      >
        {{ product.node.name }}
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query {
  products: allItem {
    edges {
      node {
        name,
        id
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Jayla's Wishes",
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
