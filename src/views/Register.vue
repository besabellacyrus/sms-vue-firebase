<template>
  <div>
    <div
      v-if="error"
      class="error"
    >{{error.message}}</div>
    <form @submit.prevent="register">
      Register
      <div class="email">
        <input
          type="email"
          v-model="email"
          placeholder="Email"
        >
      </div>
      <div class="password">
        <input
          type="password"
          v-model="password"
          placeholder="Password"
        >
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  data () {
    return {
      error: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      try {
        const user =
          await firebase.auth().createUserWithEmailAndPassword(
            this.email, this.password
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