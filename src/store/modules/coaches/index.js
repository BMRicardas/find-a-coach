import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import { coaches } from './mockData';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: coaches,
    };
  },
  mutations,
  actions,
  getters,
};
