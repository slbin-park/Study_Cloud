import createStore from 'zustand'
import timeType from './timeType'
import moment from 'moment';
import {devtools, persist} from "zustand/middleware";
const store =(set => ({
  time : moment(),
  set_time : (text) => set(state => ({time : text})) ,
  reset_time : () => set(state  => ({time : moment()})),
  increase_day : () => set(state => ({ time : state.time.add(1, 'days')})),
  decrease_day : () => set(state => ({ time : state.time.subtract(1, 'days')})),
  increase_hour : (number) => set(state => ({ time : state.time.add(number, 'h')})),
  decrease_hour : (number) => set(state => ({ time : state.time.subtract(number, 'h')})),
  increase_min : (number) => set(state => ({ time : state.time.add(number, 'm')})),
  decrease_min : (number) => set(state => ({ time : state.time.subtract(number, 'm')})),
}))

const useStore = createStore(devtools(store))
export default useStore;