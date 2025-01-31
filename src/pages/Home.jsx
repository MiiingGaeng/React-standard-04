import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <Link to={'/detail/1'}>Detail 바로가기</Link>
    </div>
  );
};

export default Home;
