<template>
  <div class="chats-wrapper h-screen border-r-4">
    <div class="inner h-full w-full overflow-scroll relative">
      <div class="search-box fixed bg-white top-0 w-1/4 border-r-4 border-b p-3 flex justify-between items-center">
        <form class="w-10/12 border border-gray-300 rounded-lg p-2 flex justify-between items-center">
          <button>
            <img class="w-7 " src="../assets/img/icon/search.svg" alt="search">
          </button>
          <input type="text" placeholder="Search" class="w-10/12 px-2 text-sm text-gray-900 font-semibold">
          <router-link to="/" class="menu-burger flex justify-center items-center flex-col">
            <div class="first"></div>
            <div class="second"></div>
            <div class="third"></div>
          </router-link>
        </form>
        <button class="border rounded-lg new-chat p-3">
          <img class="w-5" src="../assets/img/icon/add-group.png" alt="add group">
        </button>
      </div>
      <div class="chats-wrapper w-full">
        <div v-for="item in chatList" :key="item.id" class="chat p-3 w-full py-2 border-b cursor-pointer flex justify-between items-center">
          <div class="profile-img border rounded-lg w-20 h-20 mr-2">
            <img class="rounded-lg w-full h-full" :src="require(`../assets/img/${item.profileImageUrl}`)" alt="user profile">
          </div>
          <div class="message-preview w-8/12 flex flex-col justify-start items-start">
            <div class="top">
              <h6 class="text-sm font-semibold">{{item.title}}</h6>
              <p class="text-xs mt-1">{{item.messenger}} : <span class="">{{item.latestMessage}}</span></p>
            </div>
            <div class="bottom categories flex justify-between items-center mt-3">
              <div class="ctg-item border rounded text-xs p-1 px-4 mr-2 text-red-500 border-red-500 font-semibold">Inbox</div>
              <div class="ctg-item border rounded text-xs p-1 px-4 text-cyan-500 border-cyan-500 font-semibold">{{item.category}}</div>
            </div>
          </div>
          <div class="info flex flex-col justify-between items-center">
            <div class="date-time mb-2">
              <p>{{item.dateTime}}</p>
            </div>
            <div class="messages-num mb-2 bg-red-500 text-white rounded h-full flex items-center">
              <p class="font-bold" v-if="item.messageNumbers===''">{{item.messageNumbers}}</p>
              <p class="font-bold px-1" v-else>{{item.messageNumbers}}</p>
            </div>
            <div class="open w-5">
              <img class="w-full" src="../assets/img/icon/chevron-down.png" alt="open">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      chatList:[
        {
          id:1,
          title:'Code Bot',
          messenger:'TRITA Intelligence Innovations',
          latestMessage:'panel+ dashboard + cart',
          category:'Group',
          dateTime:'10:49',
          messageNumbers:'4232',
          profileImageUrl:'user1.jpg'
        },
        {
          id:2,
          title:'سلام',
          messenger:'Mahdi Hashemi Karbalaee',
          latestMessage:'https://github.com/ReihaneENS/MessengerTask',
          category:'Question',
          dateTime:'Thu',
          messageNumbers:'',
          profileImageUrl:'user2.jpg'
        },
        {
          id:3,
          title:'New User',
          messenger:'t-Learning',
          latestMessage:'چشم',
          category:'Group',
          dateTime:'Jul 1',
          messageNumbers:'',
          profileImageUrl:'newUser.png'
        },
        {
          id:4,
          title:'کافه',
          messenger:'hasti daneshkia',
          latestMessage:'test.zip',
          category:'Question',
          dateTime:'Jun 28',
          messageNumbers:'',
          profileImageUrl:'user3.jpg'
        },
        {
          id:5,
          title:'Code Bot',
          messenger:'TRITA Intelligence Innovations',
          latestMessage:'panel+ dashboard + cart',
          category:'Group',
          dateTime:'10:49',
          messageNumbers:'4232',
          profileImageUrl:'user6.jpg'
        },
        {
          id:6,
          title:'سلام',
          messenger:'Mahdi Hashemi Karbalaee',
          latestMessage:'https://github.com/ReihaneENS/MessengerTask',
          category:'Question',
          dateTime:'Thu',
          messageNumbers:'',
          profileImageUrl:'user5.jpg'
        },
        {
          id:7,
          title:'New User',
          messenger:'t-Learning',
          latestMessage:'چشم',
          category:'Group',
          dateTime:'Jul 1',
          messageNumbers:'',
          profileImageUrl:'newUser.png'
        },
        {
          id:8,
          title:'کافه',
          messenger:'hasti daneshkia',
          latestMessage:'test.zip',
          category:'Question',
          dateTime:'Jun 28',
          messageNumbers:'',
          profileImageUrl:'user4.jpg'
        },
      ]
    }
  }
}
</script>
