<template>
  <div class="home-wrapper flex">
    <Chats id="chat" class="w-1/4 hidden lg:inline-block" :isClosed="isClosed" @get-id="getId($event)"/>
    <Chatroom id="chatroom" class="w-full lg:w-3/4" @go-back="goBack" :chatId="chatId"/>
  </div>
</template>

<script>
import Chats from "@/components/Chats";
import Chatroom from "@/components/Chatroom";

export default {
  name: "Home",
  components: {Chatroom, Chats},
  data() {
    return {
      isClosed: false,
      chatId: null,
    }
  },
  methods: {
    goBack() {
      document.getElementById('chat').classList.add('w-full');
      document.getElementById('chat').classList.remove('hidden', 'lg:inline-block');
      document.getElementById('chatroom').classList.add('hidden');
      this.isClosed = true;
    },
    getId(data) {
      this.chatId = data.chatId;
    }
  }
}
</script>

<style scoped>
</style>