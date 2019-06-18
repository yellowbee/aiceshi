import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import router from './router';
import App from './App.vue';
import MintUI from 'mint-ui';

//Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
    id: 'UA-136976908-1',
    router,
    debug: {
        enabled: process.env.NODE_ENV === 'development', // default false
        trace: true, // default false
        sendHitTask: process.env.NODE_ENV === 'production' // default true
    }
});

Vue.use(MintUI);

new Vue({
  render: h => h(App),
}).$mount('#app');
