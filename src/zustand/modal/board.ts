import createStore from 'zustand';

const useStore = createStore<any>(set=>({
    board_num : 0,
    share_date : '2022-06-12 12:30',
    id : '박슬빈',
    memo : '공유 테스트입니다.',
    title : '공유 제목입니다.',
    start_time : '14:30:00',
    end_time : '16:30:00',
}))

export default useStore;