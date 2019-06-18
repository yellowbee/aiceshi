import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from '../components/LandingPage';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: LandingPage
        }
    ]
});