<template>
  <div>
    <AuthForm
      :label="isLoading ? 'loading...': 'Login'"
      @submit-form="login"
      :errorMessage="errorMessage"
    />
  </div>

</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import AuthForm from "../components/AuthForm"
export default {
  components: {
    AuthForm
  },
  data () {
    return {
      errorMessage: '',
      isLoading: false
    }
  },
  methods: {
    async login (data) {
      this.isLoading = true;
      try {
        await firebase.auth().signInWithEmailAndPassword(
          data.email, data.password
        );
        this.isLoading = false;
        this.$router.replace({ name: 'secret' });
      } catch (error) {
        console.log({ error })
        this.errorMessage = error.message;
        this.isLoading = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>