import { HeaderProps } from '@/utils/schema'
import React from 'react'

const Header = (props:HeaderProps) => {
  return (
    <header className="masthead">
        <div className="container">
            <div className="masthead-heading text-start text-primary">Mouhamed Bakhoum</div>
            <div className="masthead-subheading text-start" style={{fontWeight:"bold"}}>{props.title}</div>
            <p className="masthead-subheading text-start small w-75" style={{lineHeight:'1.25em'}}>{props.text}</p>
        </div>
    </header>
  )
}

export default Header