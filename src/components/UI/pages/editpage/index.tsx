import React, { useEffect, useState, useRef } from 'react';
import EditPageComponent from './editpage';
import {EditPageType} from './editpageType';
import moment from 'moment';
import axios from 'axios'
import useStore from 'zus/record/edit'
const EditPage: React.FC<EditPageType> = (props, {}: EditPageType) => {
    const eidt = useStore()
    const onSubmit = async (e) =>{
        e.preventDefault();
        e.persist();
        const start_time = moment(eidt.date.format('YYYYMMDD'))
        const end_time = moment(eidt.date.format('YYYYMMDD'))
        
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
            console.log('zxasd')
            console.log(start_time.format('YYYYMMDD HH:mm:ss'))
          }
          else{
              start_time.add(12+data.start_t,'h')
             console.log(start_time.format('YYYYMMDD HH:mm:ss'))
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
          
    }
return(
    <EditPageComponent {...props} />

    )};

export default EditPage;