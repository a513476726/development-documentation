import ElementUI from 'element-ui';
import ElEx from 'vue2-elementui-extend'
import 'element-ui/lib/theme-chalk/index.css';

// console.log('ElEx')
// console.log(ElEx)
console.log('elementui')
console.log(ElementUI)
export default async ({
  Vue
}) => {
  // if (typeof process === 'undefined') {
    Vue.use(ElementUI)
    Vue.use(ElEx)
    // Vue.components('el-ex-table',ElEx);
    // Vue.use(ElEx)
  // }
}