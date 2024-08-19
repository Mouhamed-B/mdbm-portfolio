"use client";
import { ContactForm, ContactProps } from '@/utils/schema'
import React, { useRef, useState } from 'react'

const Contact = (props:ContactProps) => {
    const [submitting, setSubmitting] = useState(false)
    
    const [alertMsg, setalertMsg] = useState("I")
    const [alertType, setAlertType] = useState<"success"|"danger">("success")
    const [alertVisible, setAlertVisible] = useState(false)

    const formRef = useRef<HTMLFormElement>(null)

    const sendEmail = (data:FormData) => {
        data.append('service_id', 'service_odpdk9v');
        data.append('template_id', 'template_m6m16tr');
        data.append('user_id', 'G-zpV0I4c-Yq-E-YB');
        return fetch("https://api.emailjs.com/api/v1.0/email/send-form",{
            method:"POST",
            body:data
        })
    }

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        setSubmitting(true)
        e.preventDefault()
        const formData = new FormData(formRef.current!)
        sendEmail(formData).then(() => {
            setSubmitting(false)
            setalertMsg(props.sucessMessage)
            setAlertType("success")
            formRef.current!.reset()
            setAlertVisible(true)
            setTimeout(() => {
                setAlertVisible(false)
            }, 2500);
        }).catch(() => {
            setSubmitting(false)
            setalertMsg(props.failMessage)
            setAlertType("danger")
            setAlertVisible(true)
            setTimeout(() => {
                setAlertVisible(false)
            }, 2500);
        })
    }
    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">{props.title}</h2>
                    <h3 className="section-subheading text-muted">{props.text}</h3>
                </div>
                <form id="contactForm" ref={formRef} onSubmit={handleSubmit}>
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input className="form-control" id="name" name="name" type="text" placeholder={props.nameField} required />
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="email" name="email" type="email" placeholder={props.emailField} required />
                                <div className="invalid-feedback">An email is required.</div>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="phone" type="tel" name="phoneNumber" placeholder={props.phoneField} required/>
                            </div>
                            <div className="form-group mb-md-0">
                                <input className="form-control" id="subject" name='subject' placeholder={props.subjectField} required/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                <textarea className="form-control" id="message" name="message" placeholder={props.messageField} required></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center text-white mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                        </div>
                    </div>
                    <div className="text-center"><button disabled={submitting} className="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">{submitting ? "·····" : props.buttonText}</button></div>
                    <div className={"col-12 col-md-6 col-lg-4 alert mt-3 "+"alert-"+alertType+(alertVisible?" visible":" invisible")} role="alert">
                        {alertMsg}
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact