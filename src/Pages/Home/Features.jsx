import FeatureCard from "../../Component/FeatureCard";

const Features = () => {
    const featuresList = [
        {
            icon: "fa-solid fa-right-to-bracket",
            title: "Guest Login",
            description: "Enjoy a call instantly—no personal details or lengthy sign-up required.",
            delay: 100
        },
        {
            icon: "fa-solid fa-video",
            title: "Audio/Video Calls",
            description: "Jump on a live voice or face-to-face call for instant, real-time connections.",
            delay: 200
        },
        {
            icon: "fa-solid fa-photo-film",
            title: "Photo/Video Posts",
            description: "Share your favorite moments as photos or clips to instantly engage friends and followers.",
            delay: 300
        },
        {
            icon: "fa-solid fa-gift",
            title: "Gifts & Rewards",
            description: "Send & Receive virtual tokens or stickers—each one can be turned into real rewards.",
            delay: 400
        },
        {
            icon: "fa-solid fa-life-ring",
            title: "Paid Live Streaming",
            description: "Go live to entertain or teach, and earn as your audience grows.",
            delay: 500
        },
        {
            icon: "fa-solid fa-money-bill",
            title: "Refer & Earn",
            description: "Invite friends to the platform and earn diamonds whenever they recharge.",
            delay: 600
        }
    ];

    return (
        <section id="feature" className="features-wrapper section-b-space lightpink">
            <div className="custom-container">
                <div className="container">
                    <div className="col-12">
                        <div className="landing-title">
                            <div className="sub-title">
                                <div className="text-center pb-3">
                                    <h4>Experience JiveCam Features</h4>
                                    <h2>Discover amazing ways to connect and interact with people around the world</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row gy-3">
                        {featuresList.map((feature, index) => (
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

export default Features;
