import React from 'react'

export default function Footer(props) {
  const {showModo,handleShowModo}=props
  return (
    <footer>
        <div className='bgGredient'></div>
        <div className='footer-heding'>
            <h1>A Mesmerizing Nightscape</h1>
            <h2>The Milky Way</h2>
        </div>
        <button className='footer-btn' onClick={handleShowModo}>
          <i class="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}
