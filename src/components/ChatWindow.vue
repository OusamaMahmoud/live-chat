<template>
  <div class="chat-window">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="documents" class="messages" ref="chatRef">
      <div v-for="doc in formattedDocuments" :key="doc.id">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, onUpdated, ref, watch, watchEffect } from "vue";
import getCollection from "../composables/getCollection";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
export default {
  setup() {
    const { documents, error } = getCollection("messages");
    const chatRef = ref(null);
    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
      return [];
    });
    const scrollToBottom = () => {
      const container = chatRef.value;
      if (documents.value) {
        // one way
        container.scrollTo({
          top: container.scrollHeight ,
          behavior: "smooth",
        });
        // second way
        // container.scrollTop = container.scrollHeight;
      }
    };
    onUpdated(() => {
      scrollToBottom();
    });

    return { documents, error, formattedDocuments, chatRef };
  },
};
</script>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
  text-align: left;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
