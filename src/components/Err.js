/* eslint-disable no-unused-vars */
import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

function Err(props) {
  const { url } = props;
  const [data, load, err] = useJsonFetch(url);
  return (
    <div>
      <p className='title'>Ошибка</p>
      <p className='status'>{err}</p>
    </div>
  );
}

export default Err;