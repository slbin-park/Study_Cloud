import createStore from 'zustand';
import axios from 'axios';
const url = "http://localhost:3001/api/board/get_reply"
const useStore = createStore<any>(set=>({
    data : {
        board_num : 1,
        share_date : '2022-06-12 12:30',
        id : '박슬빈',
        name : '박슬빈',
        memo : '공유 테스트입니다.',
        title : '공유 제목입니다.',
        start_time : '14:30:00',
        end_time : '16:30:00',
    },
    set_data : (data:any)=>set(state => ({data})),
    reply :[],
    set_reply_data : async (board_num : number) =>{
        const response = await axios.post(url,{
            board_num
        })
        set({reply : response.data.reply.reverse()})
    }
}))

export default useStore;