import createStore from 'zustand';
import axios from 'axios';
import useStore_user from 'zus/user/user';
const useStore = createStore<any>(set=>(
    {
    data : [],
    set_data : (data)=> set(state => ({data})),
    getRecord : async (user) => {
        
        axios.post("http://localhost:3001/api/record/get",{
            id : user.id,
        },{
            headers : {
                Authorization : user.access_token,
            },
        }).then((res)=>{
            set((state)=>({
                data : res.data.response
            }))
        }).catch((err)=>{
            console.log(err)
        })
    },

}))

export default useStore;