import {createStore} from 'vuex'
import mutations from "@/store/mutations";
import getters from "@/store/getters";
import actions from "@/store/actions";

const store = createStore({
  state() {
    return {}
  },
  mutations,
  getters,
  actions,
})

export default store
