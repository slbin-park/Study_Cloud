import React, { useEffect, useState, useRef } from 'react';
import BoardPageComponent from './boardpage';
import { BoardPageType } from './boardpageType';
import axios from 'axios';

const BoardPage: React.FC<BoardPageType> = (props, {}: BoardPageType) => {
  const [data, setdata] = useState([]);
  // 게시글 데이터 불러오기

  useEffect(() => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/board/get_board`,
        {},
        {
          headers: {
            // Authorization : user.access_token,
          },
        },
      )
      .then((res) => {
        setdata(res.data.board.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <BoardPageComponent {...props} data={data} />;
};

export default BoardPage;
