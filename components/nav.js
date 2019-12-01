import React from 'react'

// Nav is the app's header/navigation component.
const Nav = () => (
  <nav>
    <h1>Weather By City</h1>
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }

      h1, h2, h3, h4, h5 {
        margin: 0;
      }

      h1 {
        color: white;
        font-size: 32px;
      }
      nav {
        padding: 40px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        text-align: center;
        height: 120px;
        background: rgb(0,46,30);
        background: linear-gradient(317deg, rgba(28,138,130,1) 0%, rgba(64,207,198,1) 100%);
      }
    `}</style>
  </nav>
)

export default Nav
