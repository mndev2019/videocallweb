// import React from 'react'
import image1 from '../../assets/images/app_download.png'
import image2 from '../../assets/images/connect_laugh.png'
import image3 from '../../assets/images/build_trust.png'

const Steps = () => {
    const step = [
        {
            image: image1,
            title: "Download & Register",
            text: "Download JiveCam from your app store and create your profile in seconds. Add your interests and preferences.",
        },
        {
            image: image2,
            title: " Connect & Laugh",
            text: "Meet like-minded people effortlessly with our smart matching system. Jump into engaging video chats and share moments of fun and laughter instantly!",
        },
        {
            image: image3,
            title: " Repeat & Build Connections",
            text: "Foster meaningful conversations, share virtual gifts, and create lasting friendships that go beyond borders—again and again!",
        },
    ]
    return (
        <>
            <section className="section-py-space started-section lightpink" id="step">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="landing-title">
                                <div className="sub-title">
                                    <div className="text-center">
                                        <h4>Get Started in Three Simple Steps</h4>
                                        <h2>Connect worldwide easy, fun, and free.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-4">
                        {
                            step.map((itm) => (
                                <>
                                    <div className="col-md-4 pt-4 ">
                                        <div className="card shadow startcard p-4 h-100">
                                            <img src={itm.image} className="card-img-top img-fluid" alt="..." style={{ height: "226px", }} />
                                            <div className="card-body">
                                                <h3 className="card-title">{itm.title}</h3>
                                                <p className="card-text">{itm.text}
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="w-100 d-flex gap-3 justify-content-center py-4">
                                <button className="d-flex gap-2 align-items-center">
                                    <div className="icon">
                                        <i className="fa-brands fa-apple"></i>
                                    </div>
                                    <div className="text">
                                        Download for iOS
                                    </div>
                                </button>
                                <button className="d-flex gap-2 align-items-center">
                                    <div className="icon">
                                        <i className="fa-brands fa-android"></i>
                                    </div>
                                    <div className="text">
                                        Download for Android
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

export default Steps
