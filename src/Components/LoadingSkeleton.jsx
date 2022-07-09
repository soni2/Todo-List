import React from 'react'
import '../Styles/LoadingSkeleton.css'

function LoadingSkeleton() {
  return [
    <div className='loadingSkeleton' key={"1"}/>,
    <div className='loadingSkeleton' key={"2"}/>,
    <div className='loadingSkeleton' key={"3"}/>
  ]
}

export default LoadingSkeleton