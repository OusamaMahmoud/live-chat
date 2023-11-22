<template>
    <h1>Log In</h1>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="your email" v-model="email" />
    <input
      type="password"
      required
      placeholder="type your password"
      v-model="password"
    />
    <button type="submit">Log In</button>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    // refs
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {
      console.log(email.value);
      console.log(password.value);
    };

    return { email, password, handleSubmit };
  },
};
</script>

<style></style>
