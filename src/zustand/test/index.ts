import createStore from 'zustand'
import testType from './test'
import moment from 'moment';

const useStore = createStore<testType>(set => ({
  time : moment(),
  login : false,
  success_login : () => set({login:true}),
  increase_day : () => set(state => ({ time : state.time.add(1, 'days')})),
  decrease_day : () => set(state => ({ time : state.time.subtract(1, 'days')})),
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
}))
export default useStore;