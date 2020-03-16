<template>
  <div>
    Logged in
    <span v-if="loggedIn">Yes</span>
    <span v-else>No</span>
    <div>
      <button @click="logout">Log out</button>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  data () {
    return {
      loggedIn: false
    }
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      this.loggedIn = !!user;
    })
  },
  methods: {
    async logout () {
      try {
        const logout = await firebase.auth().signOut();
        console.log({ logout })
      } catch (error) {
        console.log({ error })
      }
    }
  }
}
</script>

<style>
</style>