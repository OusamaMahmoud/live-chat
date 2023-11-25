<template>
  <form>
    <textarea
      placeholder="type your message and press enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "vue";
import getUser from "@/composables/useUser";
import { timestamp } from "@/firebase/config";
import useCollection from "../composables/useCollection";
export default {
  setup() {
    const message = ref("");
    const { user } = getUser();
    const { addDoc, error } = useCollection("messages");

    const handleSubmit = async () => {
      if (!message.value) {
        return;
      }
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp,
      };

      await addDoc(chat);
      if (!error.value) {
        message.value = "";
      }
    };

    return { error, message, handleSubmit };
  },
};
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
