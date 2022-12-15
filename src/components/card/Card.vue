<template>
  <div>
    <md-card class="card">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title mw-100">{{ name }}</div>
          <div class="md-subhead mw-100">{{ surname }}</div>
          <div class="md-subhead mw-100">E-mail: {{ email }}</div>
          <div class="md-subhead mw-100">Age: {{ age }}</div>
        </md-card-header-text>

        <md-card-media>
          <img :src="image" alt="People">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button @click="handleEditClick" :disabled="!$store.getters.login">EDIT</md-button>
        <md-button @click="handleDeleteClick" :disabled="!$store.getters.login">DELETE</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    surname: String,
    image: String,
    email: String,
    age: Number,
    id: String,
  },
  methods: {
    handleDeleteClick() {
      // if (!this.$store.getters.login) return;
      this.$store.commit("removePerson", this.id);
    },
    handleEditClick() {
      this.$router.push({
        name: 'edit',
        params: {
          first: this.name,
          last: this.surname,
          email: this.email,
          age: this.age,
          id: this.id
        }
      })
    }
  }
}
</script>

<style>
.card {
  width: 350px;
  min-height: 200px;
}

.mw-100 {
  max-width: 100px;
}
</style>