import React from 'react'
import './search.css'
function Search() {
  return (
    <div className="search-bg"> 
        <div className="container">
            <div className="sea-con">
                <div className="sea-left">
                    <p>Let’s go. Get a link<br/> to download the app.</p>
                </div>
                <div className="sea-right">
                    <input type="text" placeholder='Enter mobile phone number'/>
                    <a href="#">apply to drive</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search