export default interface TimerType {
    id : string,
    name : string,
    major : string,
    school : string,
    access_token : string,
    set_id : (text : string)=>void;
    set_name : (text : string)=>void;
    set_major : (text : string)=>void;
    set_school : (text : string) => void;
    set_user : (text:any) => void;
}