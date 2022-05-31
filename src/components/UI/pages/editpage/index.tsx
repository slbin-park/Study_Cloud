import React, { useEffect, useState, useRef } from 'react';
import EditPageComponent from './editpage';
import {EditPageType} from './editpageType';
import moment from 'moment';
import axios from 'axios'
import useStore_time from 'zus/time/time';
import useStore from 'zus/record/edit'
import useStore_user from 'zus/user/user'

const EditPage: React.FC<EditPageType> = (props, {}: EditPageType) => {
    const edit = useStore();
    const time = useStore_time();
    const user = useStore_user();
    let a = 0;

    const onclick2 = (e)=>{
      a = 1
    }

    const onSubmit = async (e) =>{
        const url = a == 0 ? 'update' : 'delete'
        console.log(e.target)
        e.preventDefault();
        e.persist();
        const start_time = moment(time.time.format('YYYYMMDD'))
        const end_time = moment(time.time.format('YYYYMMDD'))

        console.log(edit.post_num)

        const data = {
            title : e.target.title.value,
            content : e.target.content.value,
            start : e.target.start.value,
            start_t : parseInt(e.target.start_t.value),
            start_m : parseInt(e.target.start_m.value),
            end : e.target.end.value,
            end_t : parseInt(e.target.end_t.value),
            end_m : parseInt(e.target.end_m.value),
          };
          console.log(data)

        //   for(let key in data){
        //       if(data[key] === 'none'){
        //           console.log('없는 항목이씀')

        //           return 0;
        //       }
        //   }

          // 시간 더하기
          if(data.start == '오전'){
            start_time.add(data.start_t,'h')
            console.log(start_time.format('YYYYMMDD HH:mm:ss'))
          }
          else{
              start_time.add(12+data.start_t,'h')
          }
          
          if(data.end == '오전'){
            end_time.add(data.end_t,'h')
          }
          else{
            end_time.add(12+data.end_t,'h')
          }
          
          // 분 더하기
          start_time.add(data.start_m,'m')
          end_time.add(data.end_m,'m')

          axios.post("http://localhost:3001/api/record/"+url,{
            id : edit.id,
            start_time : start_time.format('HH:mm:ss'),
            end_time : end_time.format('HH:mm:SS'),
            title : data.title,
            memo : data.content,
            post_num : edit.post_num
        },{
            headers : {
                Authorization : user.access_token,
            },
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
    <EditPageComponent {...props} onSubmit={onSubmit} onclick2={onclick2}/>

    )};

export default EditPage;