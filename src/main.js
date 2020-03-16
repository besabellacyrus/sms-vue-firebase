import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDnrqrYAAooZIpiEUyzgzF_PWr1eSJc1Ig",
  authDomain: "sms-project-8226f.firebaseapp.com",
  databaseURL: "https://sms-project-8226f.firebaseio.com",
  projectId: "sms-project-8226f",
  storageBucket: "sms-project-8226f.appspot.com",
  messagingSenderId: "816074326634",
  appId: "1:816074326634:web:329eb39963d0c2e7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
