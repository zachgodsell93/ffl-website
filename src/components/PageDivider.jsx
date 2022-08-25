import React from 'react'
import Arrow from '../assets/divider-arrow.jpg'
import './pagedivider.css'

export const PageDivider = () => {
  return (
    <div style={{paddingTop: '3rem', paddingBottom: '3rem', position: 'relative'}}>
        <img style={{position: 'absolute', left: '47%', bottom: '0%'}} alt='arrow' src={Arrow} />
        <div style={{borderTop: '2px solid rgba(255, 233, 0, 1)'}}>
            
        </div>
    </div>
  )
}
