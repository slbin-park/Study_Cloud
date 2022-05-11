import createStore from 'zustand';


const useStore = createStore<any>(set=>({
    modal : false,
    set_modal : ()=> set(state => ({modal : !state.modal}))
}))

export default useStore;