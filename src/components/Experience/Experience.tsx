import { ExperienceProps } from '@/utils/schema'
import React from 'react'
import ExperienceItem from './ExperienceItem'

const Experience = (props:ExperienceProps) => {
  return (
    <section className="page-section" id="experience">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">{props.title}</h2>
                <h3 className="section-subheading text-muted">{props.text}</h3>
            </div>
            <ul className="timeline">
                {props.items.map((item, index) => (
                    <li className={index%2===0?'':'timeline-inverted'} key={index}>
                        <ExperienceItem {...item}/>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Experience