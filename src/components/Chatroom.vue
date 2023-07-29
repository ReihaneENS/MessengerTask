<template>
  <div class="chatroom-wrapper h-screen overflow-scroll">
    <div class="inner w-full relative" v-for="item in chatsData" :key="item.id" v-if="item.id === chatId">
      <div class="top p-3 px-6 w-full border-b fixed top-0 flex justify-start items-center">
        <div class="back-btn">
          <button class="mr-3 mt-1" @click="$emit('go-back')">
            <img class="w-6" src="../assets/img/icon/chevron-left.png" alt="">
          </button>
        </div>
        <div class="user-info flex justify-center items-start">
          <div class="avatar w-12 h-12 mr-3">
            <img class="w-full h-full rounded-lg" :src="require(`../assets/img/${item.avatarUrl}`)" alt="user avatar">
          </div>
          <div class="info flex flex-col justify-between items-start">
            <p class="text-sm mb-2"><span class="font-bold text-blue-500">{{ item.category }} :</span> {{ item.title }}
            </p>
            <p class="text-xs text-gray-500">last seen at : {{ item.lastSeen }}</p>
          </div>
        </div>
      </div>
      <div class="content p-4" v-if="item.id === chatId">
        <div v-for="(msgItem,index) in item.messages" :key="index"
             class="flex flex-col justify-between">
          <div class="date-wrapper self-center my-2">
            <p class="text-white bg-gray-400 rounded-3xl py-1 font-bold px-4 text-xs">{{ msgItem.date }}</p>
          </div>
          <div :class="{'self-end text-white':msgItem.id === 100}"
               class="card my-2 self-start flex items-end justify-start">
            <img v-if="msgItem.id === 200" class="w-12 h-12 border rounded-lg mr-2"
                 :src="require(`../assets/img/${item.avatarUrl}`)" alt="">
            <div :class="(msgItem.id === 100)?'rounded-br-none bg-blue-400':'rounded-bl-none'"
                 class="data p-1 px-2 bg-gray-200 rounded-xl">
              <div class="detail flex justify-between items-start">
                <div class="name">
                  <p v-if="msgItem.id === 200" class="font-10 mr-5 text-cyan-500">{{ item.senderName }}</p>
                  <p v-else class="font-10 mr-5 text-cyan-300">{{ item.receiverName }}</p>
                  <p v-if="msgItem.forwarded === true" class="font-10 mr-5 text-blue-500">Forwarded Message:</p>
                  <p v-if="msgItem.forwarded === true" class="font-10 mr-5 text-blue-500">From : <span
                      class="font-bold">{{ msgItem.forwardedFrom }}</span>
                  </p>
                </div>
                <img class="w-4" src="../assets/img/icon/chevron-down.png" alt="">
              </div>
              <p class="text-sm text-right" v-html="msgItem.data"
                 v-linkified:options="{ className: 'underline text-blue-600' }"></p>
              <p :class="{'text-gray-100':msgItem.id === 100}" class="font-10 text-gray-400">{{ msgItem.time }}</p>
            </div>
          </div>
        </div>
      </div>
      <div
           class="message-input-wrapper px-3 bottom-0 w-full bg-gray-200 flex justify-center items-center">
        <form class="w-full h-full flex justify-between items-center">
          <div class="cursor-pointer bg-white border border-gray-300 rounded-lg p-2 w-10 h-10">
            <label for="attach" class="voice-label w-full h-full cursor-pointer">
              <img class="w-full h-full" src="../assets/img/icon/attachment.png" alt="">
            </label>
            <input type="file" name="attach" id="attach">
          </div>
          <input type="text" class="border rounded-lg border-gray-300 p-1 px-3 h-10 w-11/12 text-sm"
                 placeholder="Type a message ...">
          <div class="bg-white border border-gray-300 rounded-lg p-2 w-10 h-10">
            <label for="voiceInput" class="voice-label">
              <img class="w-full h-full" src="../assets/img/icon/mic.png" alt="">
            </label>
            <input type="text" name="voice" id="voiceInput">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import linkify from 'vue-linkify';

Vue.directive('linkified', linkify);

export default {
  props: ['chatId'],
  name: "Chatroom",
  data() {
    return {
      selectedItem: null,
      previousItem: null,
      chatsData: [
        {
          id: 1,
          title: 'Code Bot',
          category: 'Group',
          avatarUrl: 'user1.jpg',
          lastSeen: '10:49 AM',
          senderName: 'TRITA Intelligence Innovations',
          receiverName: 'Eng.Mahdi Hashemi Karbalaee',
          messages: [
            {
              id: 100,
              uniqueId: 500,
              data: 'اینم تیکت میکنی لطفا',
              time: '15:34',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 7 2023',
            },
            {
              id: 200,
              uniqueId: 501,
              data: 'بله حتما',
              time: '15:37',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 7 2023'
            },
            {
              id: 200,
              uniqueId: 502,
              data: '',
              time: '15:23',
              forwarded: true,
              forwardedFrom: 'Ms.Fateme Okhravi',
              date: 'February 8 2023'
            },
            {
              id: 200,
              uniqueId: 503,
              data: 'https://github.com/ReihaneENS/MessengerTask',
              time: '9:56',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
            {
              id: 200,
              uniqueId: 504,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '9:57',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
            {
              id: 100,
              uniqueId: 505,
              data: 'https://github.com/ReihaneENS/MessengerTask',
              time: '15:23',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 100,
              uniqueId: 506,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '15:24',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 200,
              uniqueId: 507,
              data: 'لورم ایپسوم',
              time: '15:25',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 200,
              uniqueId: 508,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '9:57',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
          ]
        },
        {
          id: 2,
          title: 'سلام',
          category: 'Question',
          avatarUrl: 'user2.jpg',
          lastSeen: '11:45 AM',
          senderName: 'Someone',
          receiverName: 'Eng.Mahdi Hashemi Karbalaee',
          messages: [
            {
              id: 100,
              uniqueId: 500,
              data: 'اینم تیکت میکنی لطفا',
              time: '15:34',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 7 2023',
            },
            {
              id: 200,
              uniqueId: 501,
              data: 'بله حتما',
              time: '15:37',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 7 2023'
            },
            {
              id: 200,
              uniqueId: 502,
              data: '',
              time: '15:23',
              forwarded: true,
              forwardedFrom: 'Ms.Fateme Okhravi',
              date: 'February 8 2023'
            },
            {
              id: 200,
              uniqueId: 503,
              data: 'https://github.com/ReihaneENS/MessengerTask',
              time: '9:56',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
            {
              id: 200,
              uniqueId: 504,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '9:57',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
            {
              id: 100,
              uniqueId: 505,
              data: 'https://github.com/ReihaneENS/MessengerTask',
              time: '15:23',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 100,
              uniqueId: 506,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '15:24',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 200,
              uniqueId: 507,
              data: 'لورم ایپسوم',
              time: '15:25',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 200,
              uniqueId: 508,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '9:57',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
          ]
        },
        {
          id: 3,
          title: 'New User',
          category: 'Group',
          avatarUrl: 'newUser.png',
          lastSeen: '12:45 PM',
          senderName: 'Someone New',
          receiverName: 'Eng.Mahdi Hashemi Karbalaee',
          messages: [
            {
              id: 100,
              uniqueId: 500,
              data: 'اینم تیکت میکنی لطفا',
              time: '15:34',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 7 2023',
            },
            {
              id: 200,
              uniqueId: 501,
              data: 'بله حتما',
              time: '15:37',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 7 2023'
            },
            {
              id: 200,
              uniqueId: 502,
              data: '',
              time: '15:23',
              forwarded: true,
              forwardedFrom: 'Ms.Fateme Okhravi',
              date: 'February 8 2023'
            },
            {
              id: 200,
              uniqueId: 503,
              data: 'https://github.com/ReihaneENS/MessengerTask',
              time: '9:56',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
            {
              id: 200,
              uniqueId: 504,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '9:57',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
            {
              id: 100,
              uniqueId: 505,
              data: 'https://github.com/ReihaneENS/MessengerTask',
              time: '15:23',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 100,
              uniqueId: 506,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '15:24',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 200,
              uniqueId: 507,
              data: 'لورم ایپسوم',
              time: '15:25',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 200,
              uniqueId: 508,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '9:57',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
          ]
        },
        {
          id: 4,
          title: 'کافه',
          category: 'Ticket',
          avatarUrl: 'user3.jpg',
          lastSeen: 'Jun 28',
          senderName: 'hasti daneshkia',
          receiverName: 'Eng.Mahdi Hashemi Karbalaee',
          messages: [
            {
              id: 100,
              uniqueId: 500,
              data: 'اینم تیکت میکنی لطفا',
              time: '15:34',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 7 2023',
            },
            {
              id: 200,
              uniqueId: 501,
              data: 'بله حتما',
              time: '15:37',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 7 2023'
            },
            {
              id: 200,
              uniqueId: 502,
              data: '',
              time: '15:23',
              forwarded: true,
              forwardedFrom: 'Ms.Fateme Okhravi',
              date: 'February 8 2023'
            },
            {
              id: 200,
              uniqueId: 503,
              data: 'https://github.com/ReihaneENS/MessengerTask',
              time: '9:56',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
            {
              id: 200,
              uniqueId: 504,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '9:57',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
            {
              id: 100,
              uniqueId: 505,
              data: 'https://github.com/ReihaneENS/MessengerTask',
              time: '15:23',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 100,
              uniqueId: 506,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '15:24',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 200,
              uniqueId: 507,
              data: 'لورم ایپسوم',
              time: '15:25',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 200,
              uniqueId: 508,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '9:57',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
          ]
        },
        {
          id: 5,
          title: 'Code Bot',
          category: 'Ticket',
          avatarUrl: 'user3.jpg',
          lastSeen: 'Jun 28',
          senderName: 'hasti daneshkia',
          receiverName: 'Eng.Mahdi Hashemi Karbalaee',
          messages: [
            {
              id: 100,
              uniqueId: 500,
              data: 'اینم تیکت میکنی لطفا',
              time: '15:34',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 7 2023',
            },
            {
              id: 200,
              uniqueId: 501,
              data: 'بله حتما',
              time: '15:37',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 7 2023'
            },
            {
              id: 200,
              uniqueId: 502,
              data: '',
              time: '15:23',
              forwarded: true,
              forwardedFrom: 'Ms.Fateme Okhravi',
              date: 'February 8 2023'
            },
            {
              id: 200,
              uniqueId: 503,
              data: 'https://github.com/ReihaneENS/MessengerTask',
              time: '9:56',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
            {
              id: 200,
              uniqueId: 504,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '9:57',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
            {
              id: 100,
              uniqueId: 505,
              data: 'https://github.com/ReihaneENS/MessengerTask',
              time: '15:23',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 100,
              uniqueId: 506,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '15:24',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 200,
              uniqueId: 507,
              data: 'لورم ایپسوم',
              time: '15:25',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 200,
              uniqueId: 508,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '9:57',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
          ]
        },
        {
          id: 6,
          title: 'سلام',
          category: 'Question',
          avatarUrl: 'user2.jpg',
          lastSeen: '11:45 AM',
          senderName: 'Someone',
          receiverName: 'Eng.Mahdi Hashemi Karbalaee',
          messages: [
            {
              id: 100,
              uniqueId: 500,
              data: 'اینم تیکت میکنی لطفا',
              time: '15:34',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 7 2023',
            },
            {
              id: 200,
              uniqueId: 501,
              data: 'بله حتما',
              time: '15:37',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 7 2023'
            },
            {
              id: 200,
              uniqueId: 502,
              data: '',
              time: '15:23',
              forwarded: true,
              forwardedFrom: 'Ms.Fateme Okhravi',
              date: 'February 8 2023'
            },
            {
              id: 200,
              uniqueId: 503,
              data: 'https://github.com/ReihaneENS/MessengerTask',
              time: '9:56',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
            {
              id: 200,
              uniqueId: 504,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '9:57',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
            {
              id: 100,
              uniqueId: 505,
              data: 'https://github.com/ReihaneENS/MessengerTask',
              time: '15:23',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 100,
              uniqueId: 506,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '15:24',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 200,
              uniqueId: 507,
              data: 'لورم ایپسوم',
              time: '15:25',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 200,
              uniqueId: 508,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '9:57',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
          ]
        },
        {
          id: 7,
          title: 'New User',
          category: 'Group',
          avatarUrl: 'newUser.png',
          lastSeen: '12:45 PM',
          senderName: 'Someone New',
          receiverName: 'Eng.Mahdi Hashemi Karbalaee',
          messages: [
            {
              id: 100,
              uniqueId: 500,
              data: 'اینم تیکت میکنی لطفا',
              time: '15:34',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 7 2023',
            },
            {
              id: 200,
              uniqueId: 501,
              data: 'بله حتما',
              time: '15:37',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 7 2023'
            },
            {
              id: 200,
              uniqueId: 502,
              data: '',
              time: '15:23',
              forwarded: true,
              forwardedFrom: 'Ms.Fateme Okhravi',
              date: 'February 8 2023'
            },
            {
              id: 200,
              uniqueId: 503,
              data: 'https://github.com/ReihaneENS/MessengerTask',
              time: '9:56',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
            {
              id: 200,
              uniqueId: 504,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '9:57',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
            {
              id: 100,
              uniqueId: 505,
              data: 'https://github.com/ReihaneENS/MessengerTask',
              time: '15:23',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 100,
              uniqueId: 506,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '15:24',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 200,
              uniqueId: 507,
              data: 'لورم ایپسوم',
              time: '15:25',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 200,
              uniqueId: 508,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '9:57',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
          ]
        },
        {
          id: 8,
          title: 'کافه',
          category: 'Ticket',
          avatarUrl: 'user3.jpg',
          lastSeen: 'Jun 28',
          senderName: 'hasti daneshkia',
          receiverName: 'Eng.Mahdi Hashemi Karbalaee',
          messages: [
            {
              id: 100,
              uniqueId: 500,
              data: 'اینم تیکت میکنی لطفا',
              time: '15:34',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 7 2023',
            },
            {
              id: 200,
              uniqueId: 501,
              data: 'بله حتما',
              time: '15:37',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 7 2023'
            },
            {
              id: 200,
              uniqueId: 502,
              data: '',
              time: '15:23',
              forwarded: true,
              forwardedFrom: 'Ms.Fateme Okhravi',
              date: 'February 8 2023'
            },
            {
              id: 200,
              uniqueId: 503,
              data: 'https://github.com/ReihaneENS/MessengerTask',
              time: '9:56',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
            {
              id: 200,
              uniqueId: 504,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '9:57',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
            {
              id: 100,
              uniqueId: 505,
              data: 'https://github.com/ReihaneENS/MessengerTask',
              time: '15:23',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 100,
              uniqueId: 506,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '15:24',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 200,
              uniqueId: 507,
              data: 'لورم ایپسوم',
              time: '15:25',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 200,
              uniqueId: 508,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '9:57',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
          ]
        },
        {
          id: 9,
          title: 'Code Bot',
          category: 'Group',
          avatarUrl: 'user1.jpg',
          lastSeen: '10:49 AM',
          senderName: 'TRITA Intelligence Innovations',
          receiverName: 'Eng.Mahdi Hashemi Karbalaee',
          messages: [
            {
              id: 100,
              uniqueId: 500,
              data: 'اینم تیکت میکنی لطفا',
              time: '15:34',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 7 2023',
            },
            {
              id: 200,
              uniqueId: 501,
              data: 'بله حتما',
              time: '15:37',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 7 2023'
            },
            {
              id: 200,
              uniqueId: 502,
              data: '',
              time: '15:23',
              forwarded: true,
              forwardedFrom: 'Ms.Fateme Okhravi',
              date: 'February 8 2023'
            },
            {
              id: 200,
              uniqueId: 503,
              data: 'https://github.com/ReihaneENS/MessengerTask',
              time: '9:56',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
            {
              id: 200,
              uniqueId: 504,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '9:57',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
            {
              id: 100,
              uniqueId: 505,
              data: 'https://github.com/ReihaneENS/MessengerTask',
              time: '15:23',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 100,
              uniqueId: 506,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '15:24',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 200,
              uniqueId: 507,
              data: 'لورم ایپسوم',
              time: '15:25',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 15 2023'
            },
            {
              id: 200,
              uniqueId: 508,
              data: 'لینک ریپازیتوری تسک مسنجر',
              time: '9:57',
              forwarded: false,
              forwardedFrom: '',
              date: 'February 13 2023'
            },
          ]
        },
      ],
    }
  },
}
</script>
