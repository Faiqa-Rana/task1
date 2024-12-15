import React from 'react'

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center py-3 border-bottom bg-white px-4">
    <img
      src="/images/logo.jpg"
      alt="ATG World Logo"
      height="40"
    />
    <input
      type="text"
      className="form-control w-50"
      placeholder="Search for your favorite groups in ATG"
    />
    <a href="# " className="text-primary text-decoration-none">
      Create account. It's free!
    </a>
  </div>
  )
}

export default Header