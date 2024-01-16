import { ContactProps } from '@/utils/schema'
import React from 'react'

const Contact = (props:ContactProps) => {
    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">{props.title}</h2>
                    <h3 className="section-subheading text-muted">{props.text}</h3>
                </div>
                <form id="contactForm">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input className="form-control" id="name" type="text" placeholder={props.nameField} required />
                                <div className="invalid-feedback">A name is required.</div>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="email" type="email" placeholder={props.emailField} required />
                                <div className="invalid-feedback">An email is required.</div>
                                <div className="invalid-feedback">Email is not valid.</div>
                            </div>
                            <div className="form-group mb-md-0">
                                <input className="form-control" id="phone" type="tel" placeholder={props.phoneField} required/>
                                <div className="invalid-feedback">A phone number is required.</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                <textarea className="form-control" id="message" placeholder={props.messageField} required></textarea>
                                <div className="invalid-feedback">A message is required.</div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center text-white mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                        </div>
                    </div>
                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                    <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
                </form>
            </div>
        </section>
    )
}

export default Contact