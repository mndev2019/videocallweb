// import React from 'react'

const Faq = () => {
    return (
        <>
            <section className="section-py-space faq-section pb-5 lightpink" id="faq">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="landing-title">

                                <div className="sub-title">
                                    <div className="text-center pb-3">
                                        <h4>Frequently Asked Questions</h4>
                                        <h2>FAQs About JiveCam</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12 mt-2">

                                    <div className="w-100">
                                        <div className="accordion" id="accordion1">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                                        How do I report inappropriate behavior?
                                                    </button>
                                                </h2>
                                                <div id="collapse1" className="accordion-collapse collapse">
                                                    <div className="accordion-body">
                                                        You can report any user by clicking the Report button during chat or on their profile. Our
                                                        moderation
                                                        team reviews all reports within 24 hours.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className="col-md-12 mt-2">
                                    <div className="w-100">
                                        <div className="accordion" id="accordion2">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                        How does matching work?
                                                    </button>
                                                </h2>
                                                <div id="collapse2" className="accordion-collapse collapse">
                                                    <div className="accordion-body">
                                                        Our smart matching system pairs you with people based on your interests, preferences, and
                                                        location
                                                        settings.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-2">
                                    <div className="w-100">
                                        <div className="accordion" id="accordion3">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                        What devices are supported?
                                                    </button>
                                                </h2>
                                                <div id="collapse3" className="accordion-collapse collapse">
                                                    <div className="accordion-body">
                                                        JiveCam is available on iOS and Android devices. We recommend using the latest version of your
                                                        operating system for the best experience.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">

                                <div className="col-md-12 mt-2">
                                    <div className="w-100">
                                        <div className="accordion" id="accordion5">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                                        How do I become a content creator and earn money?
                                                    </button>
                                                </h2>
                                                <div id="collapse5" className="accordion-collapse collapse">
                                                    <div className="accordion-body">
                                                        Simply start a live broadcast under the &quot;Go Live&quot; option. As viewers tune in and send gifts, you&apos;ll earn diamonds. Once you meet the minimum threshold, you can convert those diamonds into real rewards or perks!
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-2">
                                    <div className="w-100">
                                        <div className="accordion" id="accordion4">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                        Is my personal information safe?
                                                    </button>
                                                </h2>
                                                <div id="collapse4" className="accordion-collapse collapse">
                                                    <div className="accordion-body">
                                                        We use industry-standard encryption and security measures to protect your personal information.
                                                        You
                                                        control what you share with others.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-2">
                                    <div className="w-100">
                                        <div className="accordion" id="accordion6">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                                        How does the Refer & Earn program work?
                                                    </button>
                                                </h2>
                                                <div id="collapse6" className="accordion-collapse collapse">
                                                    <div className="accordion-body">
                                                        Invite friends to the platform and earn diamonds whenever they recharge. Collect enough diamonds to redeem exciting benefits!

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="w-100 pt-5  text-center">
                                <h6 className="pb-3">
                                    Still have questions? Our support team is here to help.
                                </h6>
                                <button className="d-flex gap-2 align-items-center justify-content-center mx-auto iconbtn">
                                    <div className="icon">
                                        <i className="fa-solid fa-headset"></i>
                                    </div>
                                    <div className="text">
                                        <a href="/contact" style={{ color: "white", textDecoration: "none" }}> Contact Support</a>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Faq
