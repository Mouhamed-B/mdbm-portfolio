import { PortfolioProps } from '@/utils/schema'
import React from 'react'
import PortfolioItem from './PortfolioItem'
import ToggleCollapseButton from '../Buttons/ToggleCollapseButton'

const Portfolio = (props:PortfolioProps) => {
    const listTop = props.items.slice(0,6)
    const remaining = props.items.slice(6)
    return (
        <section className="page-section bg-light py-5" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">{props.title}</h2>
                    <h3 className="section-subheading text-muted">{props.text}</h3>
                </div>
                <div className="row">
                    {listTop.map((item, index) => (
                        <div className="col-lg-4 col-sm-6 mb-4" key={index}>
                            <PortfolioItem {...item}/>
                        </div>
                    ))}
                </div>
                <div className="collapse mb-4" id="collapseExample">
                    <div className="row">
                        {remaining.map((item, index) => (
                            <div className="col-lg-4 col-sm-6 mb-4" key={index}>
                                <PortfolioItem {...item}/>
                            </div>
                        ))}
                    </div>
                </div>
                <ToggleCollapseButton target='collapseExample'/>
            </div>
        </section>
  )
}

export default Portfolio