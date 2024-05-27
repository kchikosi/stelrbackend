import { useState } from 'react'

import './index.css'

function App() {


  return (
    <>
        <div id="top-nav">
          <a className="active" href="#home">Home</a>
          <a href="#personal">Personal</a>
          <a href="#business">Business</a>
          <a href="#enterprise">Enterprise</a>
          <a href="#about">About</a>
          <button>Sign Up</button>
          <button>Login</button>
        </div>
        <div id="home">
          <p>
           <b> Global Lending and Payments Simplified </b>
          </p>
          <p>
          Connecting budding entrepreneurs with potential investors seemlessly. Discover, connect and fuel innovation with ease, all in one platform.
          </p>
          <div>
            <button>
              Seeking companies
            </button>
            <button>
              Seeking Investors
            </button>
          </div>
        </div>
        <div id="bottom-nav">
          <a href="#privacy">Privacy</a>
          <a href="#security">Security</a>
          <a href="#legal">Legal</a>
          <a href="#help">Help</a>
          <a href="#accessibility">Accessibility</a>
        </div>
    </>
  )
}

export default App
