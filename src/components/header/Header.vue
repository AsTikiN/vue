<template>
  <div>
    <md-content class="md-primary">
      <router-link to="/" style="text-decoration: none; color: inherit;">
        <span class="md-title">
          VUE JS
        </span>
      </router-link>
      <md-menu md-direction="bottom-start" @click="handleLoginClick" style="position: relative;">
        <md-button class="md-raised md-accent" md-menu-trigger>
          <span class="md-title">
            {{ $store.getters.login ? "LOG OUT" : "LOG IN" }}
          </span>
        </md-button>
        <md-menu-content v-if="!$store.getters.login" style="position: absolute; right: 0; top: 16px;">
          <md-menu-item class="menu_item">
            <md-field :class="isValidLogin">
              <label>Login</label>
              <md-input v-model="loginValue.text"></md-input>
              <span class="md-error">{{ loginValue.message }}</span>
            </md-field>
          </md-menu-item>

          <md-menu-item class="menu_item">
            <md-field :class="isValidPassword">
              <label>Password</label>
              <md-input v-model="passwordValue.text"></md-input>
              <span class="md-error">{{ passwordValue.message }}</span>
            </md-field>
          </md-menu-item>

          <md-menu-item class="menu_item menu_item--centered">
            <md-button class="md-raised md-accent" @click="handleEnterClick">
              Enter
            </md-button>
          </md-menu-item>
        </md-menu-content>
      </md-menu>
    </md-content>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      loginValue: {
        text: "",
        error: false,
        rules: [
          {
            validator: (value) => !value.includes("@"),
            message: "Field should includes '@'"
          },
          {
            validator: (value) => !this.$store.getters.accounts.some(account => account.login === value),
            message: "Incorrect login"
          }
        ],
        message: ""
      },
      passwordValue: {
        text: "",
        error: false,
        rules: [
          {
            validator: (value) => value.length < 6,
            message: "No less than 6 characters"
          },
          {
            validator: (value) => !this.$store.getters.accounts.some(account => account.password === value),
            message: "Incorrect password"
          }
        ],
        message: ""
      },
    }
  },
  methods: {
    handleEnterClick() {
      const { status: loginStatus, message: loginErrorMessage } =
        this.validateField(this.loginValue.text, this.loginValue.rules)
      const { status: passwordStatus, message: passwordErrorMessage } =
        this.validateField(this.passwordValue.text, this.passwordValue.rules)

      this.loginValue.error = loginStatus;
      this.loginValue.message = loginErrorMessage;
      this.passwordValue.error = passwordStatus;
      this.passwordValue.message = passwordErrorMessage;

      if (this.loginValue.error || this.passwordValue.error) return;

      this.loginValue.text = "";
      this.passwordValue.text = "";
      this.$store.commit("setLogin", true);
    },

    handleLoginClick() {
      const loginStatus = this.$store.getters.login;

      if (loginStatus) {
        this.$store.commit("setLogin", false);
        this.$router.push('/');
        return;
      }
    },

    validateField(field, rules) {
      for (let rule of rules) {
        if (rule.validator(field)) {
          return {
            status: true,
            message: rule.message
          }
        };
      }

      return {
        status: false,
        message: ""
      }
    }
  },
  computed: {
    isValidPassword() {
      return {
        "md-invalid": this.passwordValue.error
      }
    },
    isValidLogin() {
      return {
        "md-invalid": this.loginValue.error
      }
    },
  },
  mounted() {
    this.$store.dispatch('fetchUsers')
  },
};
</script>

<style>
.md-content {
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 0px 20px 1px rgba(0, 0, 0, 1);
}

.menu_item--centered {
  margin: 0 auto;
}
</style>
