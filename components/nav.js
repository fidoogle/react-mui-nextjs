import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <div>
  <nav>
    <Link href="/">
      <a>Material UI</a>
    </Link>
    <Link href="/chart">
      <a>Static Chart</a>
    </Link>
    <Link href="/chart-rxjs-websocket">
      <a>Live Data Chart</a>
    </Link>
    <Link href="/buttons">
      <a>Buttons</a>
    </Link>
    <Link href="/form">
      <a>Form</a>
    </Link>
    <Link href="/cards">
      <a>Cards</a>
    </Link>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
        background-color: #2081b8;
        color: white;
        height: 70px;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
      }
      a {
        color: white;
        text-decoration: none;
        font-size: 20px;
        padding: 0 20px;
        
      }
      a:hover {
        background-color: #e56208;
      }
    `}</style>
  </nav>
  </div>
)

export default Nav
