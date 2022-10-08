import ElementUI from 'element-ui';
import ElEx from 'vue2-elementui-extend'
import 'element-ui/lib/theme-chalk/index.css';
// import VuePapaParse from 'vue-papa-parse';
export default async ({
  Vue
}) => {
  // if (typeof process === 'undefined') {
    Vue.use(ElementUI)
    Vue.use(ElEx)
    // Vue.use(VuePapaParse)
  // }
}