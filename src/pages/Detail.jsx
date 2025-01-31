import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Detail = () => {
  const params = useParams();

  const details = [
    { id: 1, title: 'detail 01' },
    { id: 2, title: 'detail 02' },
    { id: 3, title: 'detail 03' },
    { id: 4, title: 'detail 04' },
    { id: 5, title: 'detail 05' },
  ];

  console.log('params', params);

  const targetDetail = details.find((detail) => detail.id === +params.id);

  return (
    <div>
      <h1>DETAIL</h1>
      <h3>Current Path Parameter = {targetDetail.id}</h3>
      <br />
      {details.map((detail) => {
        return (
          <div key={detail.id}>
            <Link to={`/detail/${detail.id}`}>
              <span>{detail.title} 바로가기</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Detail;
