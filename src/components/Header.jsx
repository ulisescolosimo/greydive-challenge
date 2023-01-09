import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import logo from "../assets/greydive.png";

const Header = () => {
  return (
    <header className="p-4 dark:bg-gray-800 dark:text-gray-100 shadow-inner">
	<div className="container md:flex justify-between mx-auto">
		<Link rel="noopener noreferrer" to={'/'} aria-label="Regresar a inicio" className="flex md:justify-center md:items-center p-2">
			<img src={logo} className="flex h-14 w-30"/>
		</Link>
		<ul className="flex justify-center items-center mt-5 md:mt-0">
			<li className="flex">
				<Link to={'/'} rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent font-bold text-lg hover:text-gray-400">Inicio</Link>
			</li>
		</ul>
	</div>
</header>
  )
}

export default Header