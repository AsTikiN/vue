<template>
  <div class="add-wrapper">
    <div>
      <md-field>
        <label>First name</label>
        <md-input v-model="personInfo.first"></md-input>
      </md-field>

      <md-field>
        <label>Last name</label>
        <md-input v-model="personInfo.last"></md-input>
      </md-field>

      <md-field>
        <label>Age</label>
        <md-input v-model="personInfo.age"></md-input>
      </md-field>

      <md-field>
        <label>Email</label>
        <md-input v-model="personInfo.email"></md-input>
      </md-field>

      <div class="buttons">
        <md-button class="md-success" @click="handleSuccess">
          <span class="md-title">
            Create
          </span>
        </md-button>
        <md-button>
          <router-link to="/">
            <span class="md-title md-accent">
              Cancel
            </span>
          </router-link>
        </md-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Add",
  data() {
    return {
      personInfo: {
        first: "",
        last: "",
        age: "",
        email: ""
      }
    }
  },
  methods: {
    handleSuccess() {
      this.$store.commit("addPerson", ({
        id: Math.random().toString(),
        ...this.personInfo
      }));
      this.$router.push('/');
    }
  }
};
</script>

<style>
.buttons {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.add-wrapper {
  width: 600px;
  max-width: 95%;
  margin: 0 auto;
  gap: 40px;
  margin-top: 20px;
}

.md-success {
  color: green !important;
}
</style>
