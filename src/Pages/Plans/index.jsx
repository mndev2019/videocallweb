// import React from 'react'
import Insidebanner from '../../Component/Insidebanner'
import Sidebar from '../../Component/Sidebar'

const Plans = () => {
    return (
        <>
            <Insidebanner title="Plans" />
            <section className="pb-5 aboutus eula">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <Sidebar />
                        </div>
                        <div className="col-md-9">
                            <div className="content">
                                <div className="row">

                                    <div className="col-12">
                                        <p className='bottomborder pb-4'>In JiveCam, Diamonds are the in-app virtual currency used to access premium features and interact with content creators. Here’s how you can use them:</p>

                                        <h4 className="main-title2"><span className="fw-normal">1. </span>Video Calls</h4>
                                        <p className="bottomborder pb-4">
                                            Use diamonds to make one-on-one video calls with your favorite content creators. Each creator sets their own per-minute rate based on their popularity and engagement level.
                                        </p>
                                        <h4 className="main-title2"><span className="fw-normal">2. </span>Live Stream Access</h4>
                                        <p className="bottomborder pb-4">
                                            Join exclusive live streams hosted by creators by spending diamonds. Some streams may require a one-time entry fee or periodic participation charges.
                                        </p>
                                        <h4 className="main-title2"><span className="fw-normal">3. </span>Send Virtual Gifts</h4>
                                        <p className="bottomborder pb-4">
                                            Show appreciation during chats or livestreams by sending virtual gifts. Each gift has a diamond value, and your gifts help creators earn rewards.
                                        </p>

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

export default Plans
