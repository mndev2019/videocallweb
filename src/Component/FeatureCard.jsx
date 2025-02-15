/* eslint-disable react/prop-types */
const FeatureCard = ({ icon, title, description, delay }) => {
    return (
        <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={delay}>
            <div className="card-body">
                <div className="icon-box">
                    <i className={icon} style={{ fontSize: "20px" }}></i>
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard
