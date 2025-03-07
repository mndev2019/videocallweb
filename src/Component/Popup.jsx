const Popup = ({ onClose }) => {
    return (
        <>
            <div
                className="modal-backdrop"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    background: "rgba(0, 0, 0, 0.5)",
                    backdropFilter: "blur(10px)",
                    zIndex: 1050,
                }}
            ></div>

            <div
                className="modal   d-flex align-items-center justify-content-center"
                tabIndex="-1"
                style={{ display: 'block', position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1051 }}
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content" style={{ background: "#ef79f029", borderRadius: "30px" }}>
                        <div className="modal-header">
                            <h5 className="modal-title" style={{ color: "white" }}>Welcome to JiveCam!</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onClose}
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <p>Hello,</p>
                            <p>
                                Thank you for your interest in JiveCam! We're excited to announce
                                that our app is currently available exclusively to a select group of users.
                                This limited release allows us to gather valuable feedback and make final enhancements before our public launch.
                            </p>
                            <p>
                                If you'd like to be among the first to explore JiveCam, we invite you to join our community of invited users.
                                Simply reach out to us at <a href="mailto:admin@jivecam.live" className="text-white fw-bold">admin@jivecam.live</a>, and we'll be thrilled to welcome you aboard.
                            </p>
                            <p>
                                Stay tuned for our upcoming public launch – it's just around the corner!
                            </p>
                            <p className="mb-0"> Happy Jiving,</p>
                            <p>The JiveCam Team</p>
                        </div>
                        {/* <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={onClose}
                            >
                                Close
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popup;
