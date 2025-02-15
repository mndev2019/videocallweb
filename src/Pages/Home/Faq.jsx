import React, { useState } from "react";
import { Link } from "react-router-dom";

const FaqItem = ({ id, question, answer, activeId, setActiveId }) => {
    const isActive = activeId === id;

    return (
        <div className="accordion-item mb-2">
            <h2 className="accordion-header">
                <button
                    className={`accordion-button ${isActive ? "" : "collapsed"}`}
                    type="button"
                    onClick={() => setActiveId(isActive ? null : id)}
                >
                    {question}
                </button>
            </h2>
            <div id={id} className={`accordion-collapse collapse ${isActive ? "show" : ""}`}>
                <div className="accordion-body">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const Faq = () => {
    const [activeIdLeft, setActiveIdLeft] = useState(null);
    const [activeIdRight, setActiveIdRight] = useState(null);

    const faqData = [
        { id: "faq1", question: "How do I report inappropriate behavior?", answer: "You can report any user by clicking the Report button during chat or on their profile. Our moderation team reviews all reports within 24 hours." },
        { id: "faq2", question: "How does matching work?", answer: "Our smart matching system pairs you with people based on your interests, preferences, and location settings." },
        { id: "faq3", question: "What devices are supported?", answer: "JiveCam is available on iOS and Android devices. We recommend using the latest version of your operating system for the best experience." },
        { id: "faq4", question: "How do I become a content creator and earn money?", answer: "Simply start a live broadcast under the 'Go Live' option. As viewers tune in and send gifts, you'll earn diamonds. Once you meet the minimum threshold, you can convert those diamonds into real rewards or perks!" },
        { id: "faq5", question: "Is my personal information safe?", answer: "We use industry-standard encryption and security measures to protect your personal information. You control what you share with others." },
        { id: "faq6", question: "How does the Refer & Earn program work?", answer: "Invite friends to the platform and earn diamonds whenever they recharge. Collect enough diamonds to redeem exciting benefits!" }
    ];

    // Split data into two columns
    const midIndex = Math.ceil(faqData.length / 2);
    const leftColumn = faqData.slice(0, midIndex);
    const rightColumn = faqData.slice(midIndex);

    return (
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
                    {/* Left Column */}
                    <div className="col-md-6">
                        <div className="accordion" id="faqAccordionLeft">
                            {leftColumn.map((faq) => (
                                <FaqItem
                                    key={faq.id}
                                    {...faq}
                                    activeId={activeIdLeft}
                                    setActiveId={setActiveIdLeft}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-6">
                        <div className="accordion" id="faqAccordionRight">
                            {rightColumn.map((faq) => (
                                <FaqItem
                                    key={faq.id}
                                    {...faq}
                                    activeId={activeIdRight}
                                    setActiveId={setActiveIdRight}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="w-100 pt-5 text-center">
                            <h6 className="pb-3">Still have questions? Our support team is here to help.</h6>
                            <button className="d-flex gap-2 align-items-center justify-content-center mx-auto iconbtn">
                                <div className="icon">
                                    <i className="fa-solid fa-headset"></i>
                                </div>
                                <div className="text">
                                    <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact Support</Link>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
