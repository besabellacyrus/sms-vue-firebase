import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import firebase from "firebase/app";
console.log({ ddd: process.env.VUE_APP_FIREBASE_API_KEY })

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: "sms-project-8226f.firebaseapp.com",
  databaseURL: "https://sms-project-8226f.firebaseio.com",
  projectId: "sms-project-8226f",
  storageBucket: "sms-project-8226f.appspot.com",
  messagingSenderId: "816074326634",
  appId: process.env.VUE_APP_FIREBASE_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
})
