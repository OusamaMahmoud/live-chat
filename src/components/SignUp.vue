<template>
        <h1>Sign Up</h1>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="display your name"
      v-model="name"
    />
    <input type="email" required placeholder="your email" v-model="email" />
    <input
      type="password"
      required
      placeholder="type your password"
      v-model="password"
    />
    <button type="submit">Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    // refs
    const name = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {
      console.log(name.value);
      console.log(email.value);
      console.log(password.value);
    };

    return { name, email, password, handleSubmit };
  },
};
</script>

<style></style>
