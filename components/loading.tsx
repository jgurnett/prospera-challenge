import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'

interface LoadingProps {
  isLoading: boolean
}

export default function Loading({ isLoading }: LoadingProps) {
  return (
    <div>
      {isLoading ? (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <CircularProgress color="primary" size={80} />
        </div>
      ) : null}
    </div>
  )
}
