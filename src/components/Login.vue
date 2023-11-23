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
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import useLogIn from "@/composables/useLogIn";
import { ref } from "vue";
export default {
  setup(props , context) {
    // refs
    const email = ref("");
    const password = ref("");

    const { error, signIn } = useLogIn();
    const handleSubmit = async () => {
      await signIn(email.value, password.value);
      if (!error.value) {
        context.emit("login");
      }
      password.value = "";
      email.value = "";
    };

    return { email, password, handleSubmit, error };
  },
  emits:['login']
};
</script>

<style></style>
