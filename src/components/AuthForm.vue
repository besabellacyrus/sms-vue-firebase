<template>
  <form @submit.prevent="authAction">
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
    <br>
    <button type="submit">{{ label }}</button>
    <br>
    <span class="error">{{ errorMessage }}</span>
  </form>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    errorMessage: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    authAction () {
      this.$emit('submit-form',
        {
          email: this.email,
          password: this.password
        }
      )
    }
  }
}
</script>

<style>
</style>