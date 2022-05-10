import createStore from 'zustand';
import TimerType from './timerType';

const useStore = createStore<TimerType>(set =>({
    ms : 0,
    increase_timer : () =>  set(state =>({ms : state.ms+1000})),

}))

export default useStore;