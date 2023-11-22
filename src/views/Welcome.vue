<template>
  <div class="welcome container">
    <Login v-if="show" />
    <SignUp v-else />
    <p class="showToggle" @click="show = !show">{{ show ? "no account yet? Sign Up" : "Already registered ? Log In" }}</p>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import SignUp from "@/components/SignUp.vue";
import { ref } from "vue";
export default {
  components: { SignUp, Login },
  setup() {
    const show = ref(true);

    return { show };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.showToggle{
  color: dodgerblue;
  text-decoration: underline;
  cursor: pointer;
}
</style>
