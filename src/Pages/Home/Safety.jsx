import FeatureCard from "../../Component/FeatureCard";


const Safety = () => {
    const safetyFeatures = [
        {
            icon: "fa-solid fa-user-shield",
            title: "Content Moderation",
            description: "Our systems monitor the platform around the clock to maintain community guidelines.",
            delay: 100
        },
        {

            icon: "fa-solid fa-ban",
            title: "Block & Report",
            description: "Easily block unwanted contacts and report inappropriate behavior with one tap.",
            delay: 200
        },
        {
            icon: "fa-solid fa-fingerprint",
            title: "Secure Authentication",
            description: "Multi-factor authentication and advanced security measures protect your account.",
            delay: 300
        },
        {
            icon: "fa-solid fa-eye-slash",
            title: "Data Privacy",
            description: "Your personal information is encrypted and protected according to strict privacy standards.",
            delay: 400
        },
        {
            icon: "fa-solid fa-microphone-slash",
            title: "Anti-Screenshot & Anti-Recording",
            description: "Prevent unwanted captures of your sensitive conversations. Block recordings to maintain a secure chat environment.",
            delay: 500
        },
        {
            icon: "fa-solid fa-clock",
            title: "Disappearing Messages",
            description: "Send time-limited messages that vanish for extra privacy.",
            delay: 600
        }
    ];

    return (
        <section id="safety" className="features-wrapper section-b-space lightpink">
            <div className="custom-container">
                <div className="container">
                    <div className="col-12">
                        <div className="">
                            <div className="">
                                <div className="text-center pb-lg-5 pb-2">
                                    <h4 className="title">Your Safety Is Our Priority</h4>
                                    <h2 className="subtitle">We&apos;ve implemented comprehensive safety measures to ensure a secure environment for all users</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row gy-3">
                        {safetyFeatures.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                delay={feature.delay}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Safety;
