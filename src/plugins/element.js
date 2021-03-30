import Vue from 'vue'
import { Button, Row, Col, Message, Loading, Link } from 'element-ui'

Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Link)

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
