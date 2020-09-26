/* eslint-disable no-unused-vars */
import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

function Data(props) {
  const { url } = props;
  const [data, load, err] = useJsonFetch(url);
  return (
    <div>
      <p className='title'>Данные</p>
      <p className='status'>{data}</p>
    </div>
  );
}

export default Data;