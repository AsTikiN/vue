<template>
  <div>
    <md-content class="md-primary">
      <div class="center md-title">Customers - {{ $store.getters.persons.length }}</div>
    </md-content>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.center {
  margin: 0 auto;
}
</style>