<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import ChatWindow from "@/components/ChatWindow.vue";
import NewChatForm from "@/components/NewChatForm.vue";
import getUser from "@/composables/useUser";
import { watch } from "vue";
import { useRouter } from "vue-router";
export default {
  components: { Navbar, NewChatForm, ChatWindow },
  setup() {
    const router = useRouter();
    const { user } = getUser();
    watch(user, () => {
      if (!user.value) {
        router.push({ name: "welcome" });
      }
    });
  },
};
</script>

<style></style>
