// import React from 'react'
import security from "../../assets/images/realconnection.png"
const Realconnection = () => {
    return (
        <>
            <section className="features-wrapper section-b-space lightpink safetycommitment">
                <div className="custom-container">
                    <div className="container">

                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <div className="safetycontent p-lg-5 p-4 rounded-md" style={{ backgroundColor: "#ef79f04d", borderRadius: "1rem" }}>
                                    <div className="row">
                                        <div className="col-md-6 rightcol space-y-6 mt-lg-4 mt-2 order-lg-1 order-2">
                                            <h3 className="title mb-lg-4 mb-2">Experience Real Connections</h3>
                                            <p className="para mb-lg-4 mb-2">Our advanced matching system helps you find people who share your interests and values. Start meaningful conversations and build lasting friendships.</p>
                                            <ul>
                                                <li className="mb-lg-4 mb-2"><i className="fa-solid fa-check"></i> <span>Smart matching algorithm</span></li>
                                                <li className="mb-lg-4 mb-2"><i className="fa-solid fa-check"></i> <span>Crystal clear video quality</span></li>
                                                <li className="mb-lg-4 mb-2"><i className="fa-solid fa-check"></i> <span>Real-time translation</span></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 leftcol order-lg-2 order-1 text-end">
                                            <img src={security} alt="Experience Real Connections" className="img-fluid"  style={{objectFit:"contain" , borderRadius:"20px"}}/>
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

export default Realconnection
