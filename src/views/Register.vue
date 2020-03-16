<template>
  <div>
    <div
      v-if="error"
      class="error"
    >{{error.message}}</div>
    <AuthForm
      label="Register"
      @submit-form="register"
    />
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import AuthForm from "../components/AuthForm";

export default {
  components: {
    AuthForm
  },
  data () {
    return {
      error: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async register (data) {
      try {
        const user =
          await firebase.auth().createUserWithEmailAndPassword(
            data.email, data.password
          )
        this.$router.replace({ name: 'secret' })
        console.log({ user })
      } catch (error) {
        console.log({ error })
      }
    }
  }
}
</script>

<style>
</style>