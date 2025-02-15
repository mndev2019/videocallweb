import security from "../../assets/images/security.png"

function SafetyCommitment() {
    return (
        <>
            <section className="features-wrapper section-b-space lightpink">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="safetycontent p-5 rounded-md" style={{ backgroundColor: "#ef79f04d" }}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3>Our Safety Commitment</h3>
                                        <p>We're committed to creating a safe and respectful environment where you can make genuine connections without worry.</p>
                                        <ul>
                                            <li><i className="fa-solid fa-check"></i> <span>AI-powered content monitoring</span></li>
                                            <li><i className="fa-solid fa-check"></i> <span>Regular security audits</span></li>
                                            <li><i className="fa-solid fa-check"></i> <span>Swift action on reports</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <img src={security} alt="" />
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
