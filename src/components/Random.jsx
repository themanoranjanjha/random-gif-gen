// import React, { useState } from 'react'
// import { useEffect } from 'react';
// import axios from 'axios';
import Spinner  from './Spinner';
// import useGif from '../hooks/useGif';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/slice/gif';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  
  const dispatch = useDispatch();
  // const {gif, loading, fetchData} = useGif();
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className='w-1/2  bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl mt-[15px] underline uppercase font-bold'>A Random Gif</h1>
      
      {state.gif.isLodding? (<Spinner />) : (<img src={state.gif.data} width="450" alt="" />)}

      <button onClick={e => dispatch(fetchData())}
      className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'
      >
        Generate
      </button>

    </div>
  )
}

export default Random