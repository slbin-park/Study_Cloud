import createStore from 'zustand';
import userType from './userType';

const useStore = createStore<userType>(set =>({
    id : '',
    name : '',
    major : '',
    school : '',
    access_token : '',
    set_id : (text)=> set(state => ({id : text})),
    set_name : (text)=> set(state => ({name : text})),
    set_major : (text)=> set(state => ({major : text})),
    set_school : (text)=> set(state => ({school : text})),
    set_user : (text)=> set(state =>({
        id : text.id,
        name : text.name,
        major : text.major,
        school : text.school,
        access_token : text.access_token
    })),

}))

export default useStore;