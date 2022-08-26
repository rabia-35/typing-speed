import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate } from '@fortawesome/free-solid-svg-icons'

function Again() {

    const handleClick=()=>{
        window.location.reload()
    }

  return (
    <div onClick={handleClick}>
        <FontAwesomeIcon icon={faRotate} className="fa-3x mt-5 again" />
    </div>
  )
}

export default Again