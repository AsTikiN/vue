<template>
  <div class="container">
    <div class="filters">
      <md-field class="search">
        <label>Customer name</label>
        <md-input v-model="searchValue"></md-input>
      </md-field>

      <md-field>
        <md-select v-model="filterAge" name="country" id="country" placeholder="Age">
          <md-option value="0">0+</md-option>
          <md-option value="20">20+</md-option>
          <md-option value="40">40+</md-option>
          <md-option value="60">60+</md-option>
        </md-select>
      </md-field>

      <div class="reverseSort" @click="handleReverseClick">↓↑</div>

    </div>
    <div class="wrapper">
      <Card v-for="person in searchedPersons" :key="person.id" :name="person.first" :surname="person.last"
        :image="person.image" :email="person.email" :age="person.age" :id="person.id" />
    </div>
  </div>
</template>

<script>
import Card from '@/components/card/Card.vue';

export default {
  name: "HomeView",
  data() {
    return {
      searchValue: "",
      filterAge: "",
      reversSorting: false,
    }
  },
  components: {
    Card
  },
  computed: {
    persons() {
      return this.reversSorting ? this.$store.getters.persons.reverse() : this.$store.getters.persons;
    },
    filteredPersons() {
      return this.filterAge ? this.persons.filter(person => parseInt(person.age) > parseInt(this.filterAge)) : this.persons;
    },
    searchedPersons() {
      return this.filterBySearch(this.filteredPersons, this.searchValue);
    }
  },
  methods: {
    filterBySearch(array, value) {
      return array.filter(elem => (elem.first + elem.last).toLowerCase().includes(value))
    },
    handleReverseClick() {
      this.reversSorting = !this.reversSorting
      if (!this.reversSorting) this.reversSorting = true;
    }
  },
};
</script>

<style>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 40px;
}

.container {
  width: 1600px;
  max-width: 95%;
  margin: 0 auto;
}

.filters {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 350px;
  margin: 0 auto;
}

.reverseSort {
  font-size: 24px;
  cursor: pointer;
}
</style>