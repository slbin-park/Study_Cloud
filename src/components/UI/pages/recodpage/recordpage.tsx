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
      <RecordPageStyle {...props}>
        <Calendar />
        <div className="til">
          <div className="til_head">
            <div
              className="til_head_todo"
              onClick={(e) => props.set_statis((prev) => false)}
            >
              오늘 한 일
            </div>

            <div
              className="til_head_st"
              onClick={(e) => props.set_statis((prev) => true)}
            >
              통계
            </div>
          </div>

          {/* 통계 보여주는 칸 */}
          {props.statis ? (
            <div className="til_select_St">
              <div
                className="til_week"
                onClick={(e) => props.set_week_month((prev) => false)}
              >
                주간
              </div>
              <div
                className="til_month"
                onClick={(e) => props.set_week_month((prev) => true)}
              >
                월간
              </div>
            </div>
          ) : (
            ''
          )}

          {props.statis ? (
            <div className="study_avg">
              {props.week_month === false ? (
                <div className="week_st">
                  <div>
                    {props.week !== undefined ? (
                      <>
                        <div>
                          {props.month.month}월&nbsp;{props.week.week}
                          째주는
                        </div>
                        <div className="week_avg">
                          평균&nbsp;
                          <div className="week_text">
                            {moment(props.week.st, 'HH:mm').format('HH:mm시작')}
                            &nbsp;,&nbsp;
                            {moment(props.week.et, 'HH:mm').format('HH:mm종료')}
                          </div>
                        </div>
                        <div className="week_all">
                          평균&nbsp;
                          <div className="minute_color">
                            {parseInt(props.week.avg)} 분
                          </div>
                          , 총&nbsp;
                          <div className="minute_color">
                            {parseInt(props.week.sum)} 분
                          </div>
                        </div>
                      </>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              ) : (
                <div className="month_avg">
                  <div>
                    {props.month !== undefined ? (
                      <>
                        <div>{props.month.month}&nbsp;월 평균은</div>
                        <div className="week_avg">
                          평균&nbsp;
                          <div className="week_text">
                            {moment(props.month.st, 'HH:mm').format(
                              'HH:mm시작',
                            )}
                            &nbsp;,&nbsp;
                            {moment(props.month.et, 'HH:mm').format(
                              'HH:mm종료',
                            )}
                          </div>
                        </div>
                        <div className="week_all">
                          평균&nbsp;
                          <div className="minute_color">
                            {parseInt(props.month.avg)} 분
                          </div>
                          , 총&nbsp;
                          <div className="minute_color">
                            {parseInt(props.month.sum)} 분
                          </div>
                        </div>
                      </>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
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
          )}
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
