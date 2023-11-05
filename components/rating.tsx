'use client'
import React, { useState } from 'react'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import StarIcon from '@mui/icons-material/Star'

export default function StarRating() {
  const [rating, setRating] = useState(0)

  const handleStarClick = (star: number) => {
    setRating(star)
  }

  return (
    <div>
      <div>
        {Array.from({ length: 5 }, (_, index) => {
          const starValue = index + 1
          return (
            <span
              key={starValue}
              className="cursor-pointer"
              onClick={() => handleStarClick(starValue)}
            >
              {starValue <= rating ? (
                <StarIcon style={{ color: 'yellow' }} />
              ) : (
                <StarOutlineIcon />
              )}
            </span>
          )
        })}
      </div>
      <p>You gave a {rating} out of 5 stars.</p>
    </div>
  )
}
