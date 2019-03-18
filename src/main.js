import Vue from 'vue';
import App from './App.vue';
import 'highcharts';
import HighchartsVue from 'highcharts-vue';
import './index.scss';

Vue.config.productionTip = false;
Vue.use(HighchartsVue);

new Vue({
	render: h => h(App),
}).$mount('#app');
