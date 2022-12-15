import axios from "axios";

export default {
  state: {
    persons: [],
  },
  getters: {
    persons: (state) => state.persons,
  },
  mutations: {
    setPersons: (state, newPersons) => (state.persons = newPersons),
    addPerson: (state, newPerson) => state.persons.push(newPerson),
    removePerson: (state, personId) => (state.persons = state.persons.filter((person) => person.id !== personId)),
    updatePerson: (state, { personId, subObj }) => {
      for (let key in subObj) {
        const currentPerson = state.persons.find((el) => el.id === personId);
        currentPerson[key] = subObj[key];
      }
    },
  },
  actions: {
    fetchUsers: async ({ commit }) => {
      const { data } = await axios.get("https://randomuser.me/api/?results=10");
      let res = await data.results;

      res = await res.map((person) => ({
        id: person.cell,
        first: person.name.first,
        last: person.name.last,
        age: person.dob.age,
        email: person.email,
        image: person.picture.medium,
      }));

      commit("setPersons", res);
    },
  },
};
