<template>
  <h1>Sign Up</h1>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="display your name"
      v-model="displayName"
    />
    <input type="email" required placeholder="your email" v-model="email" />
    <input
      type="password"
      required
      placeholder="type your password"
      v-model="password"
    />
    <button type="submit">Sign Up</button>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "vue";
import useSingUp from "../composables/useSignUp";

export default {
  setup(props, context) {
    // refs
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const { error, signUp } = useSingUp();
    const handleSubmit = async () => {
      await signUp(email.value, password.value, displayName.value);

      displayName.value = "";
      password.value = "";
      email.value = "";
      if (!error.value) {
        context.emit("signup");
      }
    };

    return { displayName, email, password, handleSubmit, error };
  },
};
</script>

<style></style>
