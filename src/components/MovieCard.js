import React from 'react'
import { IMG_CDN } from '../utils/constants';

export const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
        <img src={IMG_CDN+posterPath} alt="Movie Card" />
    </div>
  )
}
export default MovieCard;
