import React from 'react'
import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';
function Thumbnail({ result }) {
    const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  return (
    <div className='group'>
        <Image layout="responsive" src={`${BASE_URL}${result.backdrop_popup || result.poster_path}` || `${BASE_URL}${result.poster_path}` } width={1920} height={1080}/>
        <div className='p-2'>
        <p className='truncate max-w-md'>{result.overview}</p>
        <h2>{result.title || result.orignal_name}</h2>
        <p className='flex items-center opacity-0 group-hover:opacity-100'>
            {result.media_type && `${result.media_type} .`}{" "}
            {result.release_date || result.first_air_date}.{" "}
            <ThumbUpIcon className='h-5 mx-2'/> {result.vote_count}

        </p>

        </div>
    </div>
  )
}

export default Thumbnail