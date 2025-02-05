// import React from 'react'

import Insidebanner from "../../Component/Insidebanner"
import Sidebar from "../../Component/Sidebar"

const Contact = () => {
    return (
        <>
            <Insidebanner title="Contact Us" />
            <section className="pb-5 contactus">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <Sidebar />
                        </div>
                        <div className="col-md-9">
                            <div className="content">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-wrapper wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".2s">
                                            <div className="form-title2 mb-3">
                                                <h4 className="main-title mb-3">Get in touch with us</h4>

                                                <p className="para">Feel free to ask me any question or let&apos;s do to talk about our future
                                                    collaboration.</p>
                                            </div>
                                            <form>
                                                <div className="row gy-3">
                                                    <div className="col-12">
                                                        <div className="form-inner">
                                                            <input type="text" placeholder="Your Name :" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-inner">
                                                            <input type="email" placeholder="Your Email :" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-inner">
                                                            <input type="text" minLength="10" maxLength="10"
                                                                placeholder="Your Phone :" /></div>
                                                    </div>
                                                    <div className="col-12">
                                                        <textarea name="message" placeholder="Write Message :"
                                                            rows="20"></textarea>
                                                    </div>
                                                    <div className="col-12"><button type="submit" className="submitbtn">Send Message</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
