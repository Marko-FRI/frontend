<template>
  <q-page
    padding
    class="column flex-center"
  >
    <h3>Login</h3>

    <q-input
      v-model="email"
      label="E-mail"
      dense
      class="loginInput"
      :rules="[val => !!val || 'Field is required']"
    />

    <q-input
      v-model="password"
      label="Password"
      class="loginInput"
      :type="isPwd ? 'password' : 'text'"
      :rules="[val => !!val || 'Field is required']"
      dense
    >
      <template #append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>

    <q-btn
      class="loginButton"
      :disabled="!isEmptyInput"
      @click="validateLogin"
    >
      Login
    </q-btn>

    <p>
      Don't have an account? <router-link to="/register">
        Register
      </router-link>
    </p>
  </q-page>
</template>

<script>
export default {
  name: 'LoginPage',

  data () {
    return {
      email: '',
      password: '',
      isPwd: true
    }
  },

  computed: {
    isEmptyInput () {
      if (this.email !== '' && this.password !== '') {
        // alert('V redu')
        return 1
      } else { return 0 }
    }
  },

  methods: {
    validateLogin () {
      alert('pritisnil')
      this.password = ''
    }
  }
}
</script>

<style scoped>

    h3 {
        margin-top: 0px;
        margin-bottom: 30px;
    }

    .loginInput {
        margin-bottom: 20px;
        width: 300px
    }

    .loginButton {
        margin-bottom: 20px;
        width: 150px;
    }
</style>
