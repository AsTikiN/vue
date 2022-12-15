<template>
  <div class="add-wrapper">
    <div>
      <md-field>
        <label>First name</label>
        <md-input v-model="first">{{ first }}</md-input>
      </md-field>

      <md-field>
        <label>Last name</label>
        <md-input v-model="last"></md-input>
      </md-field>

      <md-field>
        <label>Age</label>
        <md-input v-model="age"></md-input>
      </md-field>

      <md-field>
        <label>Email</label>
        <md-input v-model="email"></md-input>
      </md-field>

      <div class="buttons">
        <md-button class="md-success" @click="handleSuccess">
          <span class="md-title">
            Update
          </span>
        </md-button>
        <md-button>
          <span class="md-title">
            <router-link to="/">
              Cancel
            </router-link>
          </span>
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
      first: "",
      last: "",
      age: "",
      email: ""
    }
  },
  props: {
    id: null,
  },
  computed: {
    person() {
      return this.$store.getters.persons.find(person => person.id === this.id)
    },
  },
  mounted() {
    this.first = this.person.first;
    this.last = this.person.last;
    this.age = this.person.age;
    this.email = this.person.email;
  },
  methods: {
    handleSuccess() {
      const payload = ({
        personId: this.id,
        subObj:
        {
          first: this.first,
          last: this.last,
          age: this.age,
          email: this.email
        }
      })
      console.log(payload)
      this.$store.commit("updatePerson", payload);
      this.$router.push('/');
    },
  },
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
