import axios from "axios";

export default {
  namespaced: true,
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
  },
  actions: {
    fetchUsers: async ({ commit }) => {
      const { data } = await axios.get("https://randomuser.me/api/?results=10");
      let res = await data.results;
      console.log(res);

      res = await res.map((person) => ({
        id: person.cell,
        first: person.name.first,
        last: person.name.last,
        birthday: person.dob.date,
        email: person.email,
        image: person.picture.medium,
        // profession:
      }));

      commit("setPersons", res);
    },
  },
};
