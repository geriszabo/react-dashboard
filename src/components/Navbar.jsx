import React from 'react'
import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <nav>
        <Link to="/" >Home</Link>
        <Link to="/barchart" >Chart View</Link>
        <Link to="/table" >Table View</Link>
    </nav>
  )
}
