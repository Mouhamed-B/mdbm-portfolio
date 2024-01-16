import { FooterProps } from '@/utils/schema'
import React from 'react'

const Footer = (props:FooterProps) => {
  return (
    <footer className="footer py-4">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 text-lg-start">{props.copyrightText}</div>
                <div className="col-lg-4 my-3 my-lg-0">
                    {props.links.map((link,index) => <a key={index} className="btn btn-dark btn-social mx-2" href={link.link} aria-label={link.title}><i className={link.icon}></i></a>)}
                </div>
                {/* <div className="col-lg-4 text-lg-end">
                    <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                    <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                </div> */}
            </div>
        </div>
    </footer>
  )
}

export default Footer