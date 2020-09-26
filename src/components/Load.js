/* eslint-disable no-unused-vars */
import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

function Load(props) {
  const { url } = props;
  const [data, load, err] = useJsonFetch(url);
  return (
    <div>
      <p className='title'>Загрузка</p>
      <p className='status'>{load && 'Loading ...'}</p>
    </div>
  );
}

export default Load;