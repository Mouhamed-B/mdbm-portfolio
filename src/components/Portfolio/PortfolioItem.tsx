import { PortfolioItemProps } from '@/utils/schema'
import React from 'react'
let index = 0;
const PortfolioItem = (props:PortfolioItemProps) => {

    const getIndex = () => {
        index = index<6 ? index+1 : 1
        return index
    }
    return (
        <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src={props.image.length > 0 ? props.image : 'assets/img/portfolio/'+getIndex()+'.jpg'} alt={'Mouhamed Bakhoum '+props.title} />
            </a>
            <div className="portfolio-caption">
                <div className="portfolio-caption-heading">{props.title}</div>
                <div className="portfolio-caption-subheading text-muted">{props.tags.join(', ')}</div>
            </div>
        </div>
  )
}

export default PortfolioItem