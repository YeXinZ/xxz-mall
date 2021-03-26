import Vue from 'vue'
import { Button } from 'element-ui'
import { Message,Loading } from 'element-ui'

Vue.use(Message)
Vue.use(Loading)
Vue.use(Button)

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
