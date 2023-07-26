<template>
  <div class="home-wrapper flex">
    <Chats class="w-1/4"/>
    <Chatroom class="w-3/4"/>
  </div>
</template>

<script>
import Chats from "@/components/Chats";
import Chatroom from "@/components/Chatroom";
export default {
  name: "Home",
  components: {Chatroom, Chats}
}
</script>

<style scoped>

</style>