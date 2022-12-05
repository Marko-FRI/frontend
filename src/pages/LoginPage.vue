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
    <p v-if="errorMessage.length > 0">
      {{ errorMessage }}
    </p>
  </q-page>
</template>

<script>
import { api } from 'src/boot/axios'
import { useUserStore } from 'src/stores/UserStore'

export default {
  name: 'LoginPage',

  setup () {
    const userStore = useUserStore()

    return { userStore }
  },

  data () {
    return {
      email: '',
      password: '',
      isPwd: true,
      errorMessage: ''
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

  mounted () {
    if (this.userStore.token !== null) { this.$router.push('/') }
  },

  methods: {
    async validateLogin () {
      try {
        await api.get('/sanctum/csrf-cookie')
        const reply = await api.post('/login', {
          email: this.email,
          password: this.password
        })

        this.userStore.token = reply.data.token
        this.userStore.data = reply.data.userData
        this.errorMessage = ''
        this.$router.push('/')
      } catch (error) {
        this.errorMessage = error.response.data.message
        this.password = ''
      }
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
