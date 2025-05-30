// // import React from 'react'


// import { useState } from "react"
// import Insidebanner from "../../Component/Insidebanner"
// import Sidebar from "../../Component/Sidebar"

// const Contact = () => {

//     return (
//         <>
//             <Insidebanner title="Contact Us" />
//             <section className="pb-5 contactus">
//                 <div className="container-fluid">
//                     <div className="row">
//                         <div className="col-md-3">
//                             <Sidebar />
//                         </div>
//                         <div className="col-md-9">
//                             <div className="content">
//                                 <div className="row">
//                                     <div className="col-12">
//                                         <div className="form-wrapper wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".2s">
//                                             <div className="form-title2 mb-3">
//                                                 <h4 className="main-title2 mb-3">Get in touch with us</h4>

//                                                 <p className="para">Feel free to ask me any question or let&apos;s do to talk about our future
//                                                     collaboration.</p>
//                                             </div>
//                                             <form>
//                                                 <div className="row gy-3">
//                                                     <div className="col-12">
//                                                         <div className="form-inner">
//                                                             <input type="text" name="Name" placeholder="Your Name :" />
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-12">
//                                                         <div className="form-inner">
//                                                             <input type="email" name="Email" placeholder="Your Email :" />
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-12">
//                                                         <div className="form-inner">
//                                                             <input type="text" name="Phone" minLength="10" maxLength="10"
//                                                                 placeholder="Your Phone :" /></div>
//                                                     </div>
//                                                     <div className="col-12">
//                                                         <textarea name="message" placeholder="Write Message :"
//                                                             rows="20"></textarea>
//                                                     </div>
//                                                     <div className="col-12"><button type="submit" className="submitbtn">Send Message</button>
//                                                     </div>
//                                                 </div>
//                                             </form>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Contact





"use client"; // Use this if you're in a Next.js app

import { useFormState } from "react";
import Insidebanner from "../../Component/Insidebanner";
import Sidebar from "../../Component/Sidebar";

const initialState = { message: "", errors: {} };

const handleAction = async (prevState, formData) => {
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const phone = formData.get("phone").trim();
    const message = formData.get("message").trim();

    let errors = {};

    if (!name) errors.name = "Name is required";
    if (!email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Invalid email format";
    }
    if (!phone) {
        errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
        errors.phone = "Phone number must be 10 digits";
    }
    if (!message) errors.message = "Message is required";

    if (Object.keys(errors).length > 0) {
        return { errors };
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { message: "Your message has been sent!", errors: {} };
};

const Contact = () => {
    const [state, formAction] = useFormState(handleAction, initialState);

    return (
        <>
            <Insidebanner title="Contact Us" />
            <section className="pb-5 contactus">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <Sidebar />
                        </div>
                        <div className="col-md-9">
                            <div className="content">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-wrapper wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".2s">
                                            <div className="form-title2 mb-3">
                                                <h4 className="main-title2 mb-3">Get in touch with us</h4>
                                                <p className="para">
                                                    Feel free to ask any questions or let&apos;s talk about our future collaboration.
                                                </p>
                                            </div>

                                            <form action={formAction}>
                                                <div className="row gy-3">
                                                    {["name", "email", "phone", "message"].map((field, index) => (
                                                        <div className="col-12" key={index}>
                                                            <div className="form-inner">
                                                                {field === "message" ? (
                                                                    <textarea
                                                                        name={field}
                                                                        placeholder={`Write ${field.charAt(0).toUpperCase() + field.slice(1)} :`}
                                                                        rows="5"
                                                                    />
                                                                ) : (
                                                                    <input
                                                                        type={field === "email" ? "email" : "text"}
                                                                        name={field}
                                                                        placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)} :`}
                                                                    />
                                                                )}
                                                                {state.errors?.[field] && <small className="text-danger">{state.errors[field]}</small>}
                                                            </div>
                                                        </div>
                                                    ))}
                                                    <div className="col-12">
                                                        <button type="submit" className="submitbtn">Send Message</button>
                                                    </div>
                                                    {state.message && (
                                                        <div className="col-12">
                                                            <p className="text-success">{state.message}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
