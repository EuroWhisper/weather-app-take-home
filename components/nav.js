import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
        height: 120px;
        background: rgb(0,46,30);
        background: linear-gradient(317deg, rgba(28,138,130,1) 0%, rgba(64,207,198,1) 100%);
      }
    `}</style>
  </nav>
)

export default Nav
