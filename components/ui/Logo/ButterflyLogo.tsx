import React from 'react'
import Image from 'next/dist/client/image'
import logo from './../../../public/assets/bd-logo.png'
const ButterflyLogo = () => {
  return <Image alt="Butterfly Logo" className="w-2 h-2" src={logo} />
}

export default ButterflyLogo
