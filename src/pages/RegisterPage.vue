<template>
  <q-page
    padding
    class="column flex-center"
  >
    <h3>Register</h3>

    <q-input
      v-model="name"
      label="name"
      dense
      class="registerInput"
      :rules="[val => !!val || 'Field is required']"
    />

    <q-input
      v-model="surname"
      label="Surname"
      class="registerInput"
      :rules="[val => !!val || 'Field is required']"
      dense
    />

    <q-input
      v-model="email"
      label="E-mail"
      class="registerInput"
      :rules="[
        (val => !!val || 'Field is required'),
        ((val, rules) => rules.email(val) || 'Please enter a valid email address')
      ]"
      dense
    />

    <q-input
      v-model="password"
      label="Password"
      class="registerInput"
      :type="isPwd1 ? 'password' : 'text'"
      :rules="[
        (val => !!val || 'Field is required'),
        (val => val.length >= 6 || 'Password must be at least 6 characters long!')
      ]"
      dense
    >
      <template #append>
        <q-icon
          :name="isPwd1 ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd1 = !isPwd1"
        />
      </template>
    </q-input>

    <q-input
      v-model="confirmPassword"
      label="Confirm Password"
      class="registerInput"
      :type="isPwd2 ? 'password' : 'text'"
      :rules="[ (val => !!val || 'Field is required'), (val => val === password || 'Both passwords must be the same!')]"
      dense
    >
      <template #append>
        <q-icon
          :name="isPwd2 ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd2 = !isPwd2"
        />
      </template>
    </q-input>

    <q-btn
      class="registerButton"
      :disabled="!isEmptyInput"
      @click="validateRegister"
    >
      Register
    </q-btn>
  </q-page>
</template>

<script>
export default {
  name: 'RegisterPage',

  data () {
    return {
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
      isPwd1: true,
      isPwd2: true
    }
  },

  computed: {
    isSamePassword () {
      if (this.confirmPassword !== this.password) { return 'The passwords must be the same!' }
      return 0
    },

    isEmptyInput () {
      if (this.name !== '' && this.surname !== '' && this.email !== '' && this.password.length >= 6 && this.confirmPassword === this.password) { return 1 } else { return 0 }
    }
  },

  methods: {
    validateRegister () {
      alert('pritisnjeno')
    }
  }
}
</script>

<style scoped>

    h3 {
        margin-top: 0px;
        margin-bottom: 30px;
    }

    .registerInput {
        margin-bottom: 20px;
        width: 300px
    }

    .registerButton {
        margin-bottom: 20px;
        width: 150px;
    }
</style>
