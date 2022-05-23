export default interface timeType {
    time : any;
    start_time:any;
    end_time:any;
    set_time : (text:any) =>void;
    set_s_time : (text:any) =>void;
    set_e_time : (text:any) =>void;
    reset_time : () =>void;
    increase_day : ()=>void;
    decrease_day : ()=>void;
    increase_hour : (number:number) => void;
    decrease_hour : (number:number) => void;
    increase_min : (number:number) => void;
    decrease_min : (number:number) => void;
    s_increase_hour : (number:number) => void;
    s_decrease_hour : (number:number) => void;
    s_increase_min : (number:number) => void;
    s_decrease_min : (number:number) => void;
    e_increase_hour : (number:number) => void;
    e_decrease_hour : (number:number) => void;
    e_increase_min : (number:number) => void;
    e_decrease_min : (number:number) => void;
  
}