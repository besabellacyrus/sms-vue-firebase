<template>
  <div>Login
    <AuthForm
      label="Login"
      @submit-form="login"
    />
  </div>

</template>

<script>
import AuthForm from "../components/AuthForm"
export default {
  components: {
    AuthForm
  },
  methods: {
    login (data) {
      console.log({ data })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>