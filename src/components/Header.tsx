import { HeaderProps } from '@/utils/schema'
import Link from 'next/link'
import React from 'react'

const Header = (props:HeaderProps) => {
  return (
    <header className="masthead">
        <div className="container">
            <div className="masthead-heading text-start text-primary">Mouhamed Bakhoum</div>
            <div className="masthead-subheading text-start" style={{fontWeight:"bold"}}>{props.title}</div>
            <p className="masthead-subheading text-start small w-75" style={{lineHeight:'1.25em'}}>{props.text}</p>
            <div className="mt-5 row g-0 gap-5 ">
              <Link href="#contact" className="btn btn-primary rounded-5 text-white w-auto"><b>Contact</b></Link>
              <a href={props.resume} target='_blank' className="btn btn-primary rounded-5 text-white w-auto"><b>Curriculum Vitae</b></a>
            </div>
        </div>
    </header>
  )
}

export default Header