import React from 'react'
import logo from '../../assets/react.svg'
import Link from './Link'
import './GlassEffect.css' 
const NavBar = () => {
	const links = [
		{
			link: '',
			text: 'Home',
		},
		{
			link: 'skills',
			text: 'Skills',
		},
		{
			link: 'projects',
			text: 'Projects',
		}
	]
	return (
		<div className='bg-black/80 glassEffect h-10 w-full md:px-0 px-8 pt-1 fixed top-0 left-0 right-0'>
			<div className='md:w-4/5 md:mx-auto flex justify-between items-center'>

				<img src={logo} className="transition-all transform rotate-180 duration-1000 animate-spin" alt="Logo" />

				<ul className='flex gap-3'>
					{links.map((link, index) => (
						<Link key={index} link={link.link} text={link.text} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default NavBar
