import {
  KEEP_USERINFO,
  SET_LOADING
} from './mutation-types.js'

import { setStore, getStore } from '../config/mUtils'
import { localapi, proapi } from 'src/config/env'

export default {
  //得到用户信息
  [KEEP_USERINFO](state, userInfo) {
    state.userInfo = userInfo;
  },

  //得到用户信息
  [SET_LOADING](state, status) {
    state.loadingbox = status;
  },

}
