import { PortfolioProps } from '@/utils/schema'
import React from 'react'
import PortfolioItem from './PortfolioItem'

const Portfolio = (props:PortfolioProps) => {
  return (
    <section className="page-section bg-light py-5" id="portfolio">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">{props.title}</h2>
                <h3 className="section-subheading text-muted">{props.text}</h3>
            </div>
            <div className="row">
                {props.items.map((item, index) => (
                    <div className="col-lg-4 col-sm-6 mb-4" key={index}>
                        <PortfolioItem {...item}/>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Portfolio