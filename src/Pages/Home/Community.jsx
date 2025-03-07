import { useEffect, useState } from "react";
import { FaUsers, FaVideo } from "react-icons/fa";
import { HiMiniSignal } from "react-icons/hi2";
import { LuMessageSquareMore } from "react-icons/lu";

const Community = () => {
    const [counts, setCounts] = useState({
        activeUsers: 0,
        countries: 0,
        dailyChats: 0,
        userRating: 0,
    });

    useEffect(() => {
        const animateNumber = (key, start, end, duration) => {
            let current = start;
            const step = (end - start) / (duration / 50);

            const interval = setInterval(() => {
                current += step;
                if (current >= end) {
                    current = end;
                    clearInterval(interval);
                }
                setCounts((prev) => ({
                    ...prev,
                    [key]: Math.round(current) + "K+",
                }));
            }, 50);
        };

        const startCountdownWhenVisible = () => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            animateNumber("activeUsers", 1, 1, 2000);  // 1K+
                            animateNumber("countries", 1, 10, 2000);   // 10K+
                            animateNumber("dailyChats", 1, 50, 2000);  // 50K+
                            animateNumber("userRating", 1, 5, 2000);   // 5K+
                            observer.disconnect();
                        }
                    });
                },
                { threshold: 0.5 }
            );

            const section = document.getElementById("community");
            if (section) observer.observe(section);
        };

        startCountdownWhenVisible();
    }, []);

    return (
        <section className="light-bg community py-5" id="community">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="">
                            <div className="">
                                <div className="text-center pb-lg-3 pb-2">
                                    <h4 className="title">Join Our Growing Community</h4>
                                    <h2 className="subtitle">Connect with millions on JiveCam</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Community Stats */}
                <div className="row pb-3">
                    {[
                        { icon: <FaUsers />, label: "Jivers Connected", id: "activeUsers" },
                        { icon: <FaVideo />, label: "Jive Calls Made", id: "countries" },
                        { icon: <LuMessageSquareMore />, label: "Messages Grooved", id: "dailyChats" },
                        { icon: <HiMiniSignal />, label: "Live Streams Hosted", id: "userRating" },
                    ].map((item, index) => (
                        <div className="col-md-3 pt-4" key={index}>
                            <div className="w-100 communitybox">
                                <div className="square shadow">{item.icon}</div>
                                <h3 className="title py-3">{counts[item.id]}</h3>
                                <p className="subtitle">{item.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Community;
