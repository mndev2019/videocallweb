// import React from 'react'

import Insidebanner from "../../Component/Insidebanner"
import Sidebar from "../../Component/Sidebar"

const About = () => {
    return (
        <>
            <Insidebanner title="About Us" />
            <section className="pb-5 aboutus">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <Sidebar />
                        </div>
                        <div className="col-md-9">
                            <div className="content">
                                <div className="row">
                                    {/* <div className="col-sm-12">
                                       
                                        <h4 className="main-title mb-3">About Us</h4>
                                    </div> */}
                                    <div className="col-12">
                                        <p>At JiveCam, we believe in bringing people closer, no matter where they are in the world. Our interactive video calling and streaming platform is designed to create meaningful connections, spark laughter, and build memories that last forever.</p>
                                        <p>
                                            Whether it’s catching up with friends, sharing your talents live, or exploring new cultures, JiveCam is the perfect stage to express yourself and connect with a global audience.
                                        </p>
                                        <h4 className="main-title2">Our Vision</h4>
                                        <p>To be the leading interactive video calling and streaming platform, making the world smaller and hearts closer, one call at a time.</p>
                                        <h4 className="main-title2">What We Offer</h4>
                                        <ul>
                                            <li><strong>Interactive Video Calls: </strong>Real-time, high-quality video experiences that brings people together.
                                                perspective on the world.</li>
                                            <li><strong>Live Streaming: </strong>Showcase your talents, go live, and share your story with the world.</li>
                                            <li><strong>Global Connectivity: </strong> Join a vibrant, diverse community and meet people from every corner of the globe.</li>
                                        </ul>
                                        <h4 className="main-title2">Why JiveCam?</h4>
                                        <ul>
                                            <li><strong>Connect Anytime, Anywhere:  </strong>Break barriers with seamless connections across time zones.</li>
                                            <li><strong>Laugh Together:  </strong>Add joy to your day with fun interactions, live reactions, and entertaining content.</li>
                                            <li><strong>Safe & Secure: </strong> Your privacy and security are our top priorities, ensuring a worry-free experience.</li>
                                        </ul>

                                        <h4 className="main-title2">Our Commitment</h4>
                                        <p>At JiveCam, we are dedicated to creating a platform that values inclusivity, creativity, and the joy of human connection. Join us today and be part of a global movement to <strong>Connect, Laugh, Repeat!</strong></p>
                                        <h4 className="main-title2">Let’s Jive!</h4>
                                        <p>Download the app now and start your journey with JiveCam — where every interaction brings a smile!</p>
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

export default About
