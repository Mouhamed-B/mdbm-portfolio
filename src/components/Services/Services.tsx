import { ServiceProps } from '@/utils/schema'
import React from 'react'
import ServiceItem from './ServiceItem'

const Services = (props:ServiceProps) => {
  return (
    <section className="page-section py-5" id="services">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">{props.title}</h2>
                <h3 className="section-subheading text-muted">{props.text}</h3>
            </div>
            <div className="row text-center">
              {props.items.map((service, index) => (
                  <ServiceItem key={index} title={service.title} text={service.text} image={service.image} />
              ))}
            </div>
        </div>
    </section>
  )
}

export default Services