import security from "../../assets/images/security.png"

function SafetyCommitment() {
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
                                            <h3 className="title mb-lg-4 mb-2">Our Safety Commitment</h3>
                                            <p className="para mb-lg-4 mb-2">We&apos;re committed to creating a safe and respectful environment where you can make genuine connections without worry.</p>
                                            <ul>
                                                <li className="mb-lg-4 mb-2"><i className="fa-solid fa-check"></i> <span>AI-powered content monitoring</span></li>
                                                <li className="mb-lg-4 mb-2"><i className="fa-solid fa-check"></i> <span>Regular security audits</span></li>
                                                <li className="mb-lg-4 mb-2"><i className="fa-solid fa-check"></i> <span>Swift action on reports</span></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 leftcol order-lg-2 order-1 text-end">
                                            <img src={security} alt="" className="img-fluid" style={{objectFit:"contain" , borderRadius:"20px"}}/>
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

export default SafetyCommitment
