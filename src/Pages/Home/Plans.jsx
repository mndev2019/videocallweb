// import React from 'react'
import diamond from '../../assets/images/diamond.png'

const Plans = () => {
    return (
        <>
            <section className="light-bg community py-5" id="community">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="">
                                <div className="">
                                    <div className="text-center pb-lg-3 pb-2">
                                        <h4 className="title">Our Plans</h4>
                                        {/* <h2 className="subtitle">Connect with millions on JiveCam</h2> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Community Stats */}
                    <div className="row pb-3">
                        {[
                            { icon: diamond, label: "1000", price: "100" },
                            { icon: diamond, label: "5000", price: "500" },
                            { icon: diamond, label: "3000", price: "300" },
                            { icon: diamond, label: "7000", price: "700" },
                        ].map((item, index) => (
                            <div className="col-md-3 pt-4  " key={index} >
                                <div className="w-100 communitybox position-relative">
                                    <div className="square shadow">
                                        <img src={diamond} alt='image' className='diamond' />
                                    </div>

                                    <p className="subtitle mt-3">{item.label}</p>

                                    <div className='position-absolute bottomdiv  w-100 py-2'>
                                        <p className='text-center mb-0'>
                                            ₹ {item.price}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Plans
