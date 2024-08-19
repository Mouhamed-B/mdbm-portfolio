import { NavItemProps, lang, langs } from '@/utils/schema'
import Link from 'next/link'
import React from 'react'

const Nav = ({links, lang}:{links:NavItemProps[], lang:lang}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
            <a className="navbar-brand" href="#page-top"><img src="/assets/img/logo.webp" height={64} alt="'Mouhamed Bakhoum', 'Md-Bm', 'developer', 'portfolio'" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <span className="fas fa-bars ms-1"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    {links.map((link,index) => <li key={index} className="nav-item"><a className="nav-link" href={link.link}>{link.title}</a></li>)}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {lang+" "}<i className="fa fa-language" aria-hidden="true"></i>
                        </a>
                        <ul className="dropdown-menu">
                            {langs.map((lang, index) => (
                                <li key={index} className='dropdown-item'><Link href={'/'+lang}>{lang}</Link></li>
                            ))}
                        </ul>
                    </li>            
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav