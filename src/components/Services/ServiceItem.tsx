import { ServiceItemProps } from '@/utils/schema'
import React from 'react'

const ServiceItem = (props:ServiceItemProps) => {
  return (
        <div className="col-md-4 d-flex flex-column justify-content-between ">
            <div >
              <img src={props.image} style={{height:"15em"}} alt={'Mouhamed Bakhoum '+props.title}/>
            </div>
            <h4 className="my-5">{props.title}</h4>
        </div>
  )
}

export default ServiceItem