import React from 'react'

export default function NavBar() {
  return (
    <nav className="nav">
        <a href="/" className="site-title">Aritzia</a>
        <ul>
            <li>
                <a href="/carts">Shopping Cart</a>
            </li>
        </ul>
    </nav>
  )
}
