<template>
  <div class="welcome container">
    <Login @login="enterChat" v-if="show" />
    <SignUp @signup="enterChat" v-else />
    <p class="showToggle" @click="show = !show">
      {{ show ? "no account yet? Sign Up" : "Already registered ? Log In" }}
    </p>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import SignUp from "@/components/SignUp.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  components: { SignUp, Login },
  setup() {
    // toggle between sing up and log in
    const show = ref(true);
    const router = useRouter();
    const enterChat = () => {
      router.push("/chatroom");
    };

    return { show, enterChat };
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
.showToggle {
  color: dodgerblue;
  text-decoration: underline;
  cursor: pointer;
}
</style>
