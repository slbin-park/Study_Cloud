import createStore from 'zustand';
const useStore = createStore<any>(set=>(
    {
    date: '',
    end_time: '',
    id: '',
    memo: '',
    post_num: 0,
    start_time: '',
    start_d : '',
    start_t : 0,
    start_m : 0,
    end_d : '',
    end_t : 0,
    end_m : 0,
    title: '',
    set_data : (data) => set(state=>({
        date :data.date,
        end_time : data.end_time,
        id : data.id,
        memo : data.memo,
        post_num : data.post_num,
        start_time : data.start_time,
        title : data.title,
    })),
    edit_title: (title) =>set(state=>({
        ...state,
        title : title
    })),
    edit_memo : (memo) =>set(state=>({
        ...state,
        memo : memo
    })),
    edit_start_t: (stime) => set(state=>({
        ...state,
        start_t : stime
    })),
    edit_start_m: (stime) => set(state=>({
        ...state,
        start_m : stime
    })),
    edit_end_t: (etime) => set(state=>({
        ...state,
        end_t : etime
    })),
    edit_end_m: (etime) => set(state=>({
        ...state,
        end_m : etime
    })),
    edit_start_d: (date) => set(state=>({
        ...state,
        start_d : date
    })),
    edit_end_d: (date) => set(state=>({
        ...state,
        end_d : date
    }))
}))

export default useStore;