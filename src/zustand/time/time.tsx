import createStore from 'zustand'
import timeType from './timeType'
import moment from 'moment';

const useStore = createStore<timeType>(set => ({
  time : moment(),
  reset_time : () => set(state  => ({time : moment()})),
  increase_day : () => set(state => ({ time : state.time.add(1, 'days')})),
  decrease_day : () => set(state => ({ time : state.time.subtract(1, 'days')})),
}))
export default useStore;