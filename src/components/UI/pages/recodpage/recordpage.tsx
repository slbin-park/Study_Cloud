import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import RecordPageStyle from './recordpageStyle';
import { Icon } from '../../atoms/index';
import Link from 'next/link';
import moment from 'moment';

import { Calendar, Card } from '../../molecules/index';
const RecordPageComponent: React.FC<any> = (props) => {
  return (
    <>
      <RecordPageStyle>
        <Calendar />
        <div className="til">
          <div className="til_head">
            <div className="til_head_todo">오늘 한 일</div>
            <div
              className="til_head_st"
              onClick={(e) => props.click_get_avg(e)}
            >
              통계
            </div>
          </div>

          {/* 통계 보여주는 칸 */}
          <div className="til_select_St">
            <div className="til_week">주간</div>
            <div className="til_month">월간</div>
          </div>

          <div className="til_card">
            {props.record.data.map((data) => {
              const cur_day = moment(data.date).format('YYYYMMDD');
              const compare_day = props.time.time.format('YYYYMMDD');
              if (cur_day === compare_day) {
                return (
                  <div key={data.post_num}>
                    <Card data={data} />
                  </div>
                );
              }
              return '';
            })}
          </div>
        </div>

        <Link href="/study">
          <div className="Icon">
            <Icon icon_name="plus" />
          </div>
        </Link>
      </RecordPageStyle>
    </>
  );
};

export default RecordPageComponent;
