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
    <button type="submit">{{ label }}</button>
  </form>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      error: '',
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