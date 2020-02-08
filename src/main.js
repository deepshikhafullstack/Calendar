import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';


Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAfurqBmoxB42Z0t_ozESze9C8vOk3h9ZI",
  authDomain: "vue-calendar-c80f4.firebaseapp.com",
  databaseURL: "https://vue-calendar-c80f4.firebaseio.com",
  projectId: "vue-calendar-c80f4",
  storageBucket: "vue-calendar-c80f4.appspot.com",
  messagingSenderId: "332264313746",
  appId: "1:332264313746:web:8e3d317ef2702ccd46a74b"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
