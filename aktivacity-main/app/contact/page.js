"use client";


import Layout from "@/components/layout/Layout";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_qupjptg", // 🔹 apna EmailJS Service ID
                "template_w0249nh", // 🔹 apna Template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                "REAB9PA6VlWr4K6Cy" // 🔹 apna Public Key
            )
            .then(
                () => {
                    toast.success("✅ Message sent successfully!", {
                        position: "top-center", // 👈 Center top position
                        autoClose: 3000,
                        theme: "light", // 👈 White/light theme
                        style: {
                            fontWeight: "500",
                            fontSize: "15px",
                        },
                    });
                    setFormData({ name: "", email: "", subject: "", message: "" });
                },
                (error) => {
                    console.error(error.text);
                    toast.error("❌ Failed to send message. Try again later.", {
                        position: "top-center", // 👈 Center top position
                        autoClose: 3000,
                        theme: "light", // 👈 White/light theme
                        style: {
                            fontWeight: "500",
                            fontSize: "15px",
                        },
                    });
                }
            );


    };

    return (
        <>
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Contact Us">
                <section className="contact-section pt-space pb-space">
                    <div className="container">
                        <div className="row g-xl-7 g-4 mb-xxl-7 mb-6 justify-content-center">
                            {/* --- Contact Info Boxes --- */}
                            {/* Phone */}
                            <div
                                className="col-lg-3 col-md-6 col-sm-6"
                                data-aos="zoom-in-right"
                                data-aos-duration={1400}
                            >
                                <div className="contact-sub-info bg1-clr text-center">
                                    <svg
                                        width={54}
                                        height={54}
                                        viewBox="0 0 54 54"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M51.925 42.825C51.925 43.725 51.725 44.65 51.3 45.55C50.875 46.45 50.325 47.3 49.6 48.1C48.375 49.45 47.025 50.425 45.5 51.05C44 51.675 42.375 52 40.625 52C38.075 52 35.35 51.4 32.475 50.175C29.6 48.95 26.725 47.3 23.875 45.225C21 43.125 18.275 40.8 15.675 38.225C13.1 35.625 10.775 32.9 8.7 30.05C6.65 27.2 5 24.35 3.8 21.525C2.6 18.675 2 15.95 2 13.35C2 11.65 2.3 10.025 2.9 8.525C3.5 7 4.45 5.6 5.775 4.35C7.375 2.775 9.125 2 10.975 2C11.675 2 12.375 2.15 13 2.45C13.65 2.75 14.225 3.2 14.675 3.85L20.475 12.025C20.925 12.65 21.25 13.225 21.475 13.775C21.7 14.3 21.825 14.825 21.825 15.3C21.825 15.9 21.65 16.5 21.3 17.075C20.975 17.65 20.5 18.25 19.9 18.85L18 20.825C17.725 21.1 17.6 21.425 17.6 21.825C17.6 22.025 17.625 22.2 17.675 22.4C17.75 22.6 17.825 22.75 17.875 22.9C18.325 23.725 19.1 24.8 20.2 26.1C21.325 27.4 22.525 28.725 23.825 30.05C25.175 31.375 26.475 32.6 27.8 33.725C29.1 34.825 30.175 35.575 31.025 36.025C31.15 36.075 31.3 36.15 31.475 36.225C31.675 36.3 31.875 36.325 32.1 36.325C32.525 36.325 32.85 36.175 33.125 35.9L35.025 34.025C35.65 33.4 36.25 32.925 36.825 32.625C37.4 32.275 37.975 32.1 38.6 32.1C39.075 32.1 39.575 32.2 40.125 32.425C40.675 32.65 41.25 32.975 41.875 33.4L50.15 39.275C50.8 39.725 51.25 40.25 51.525 40.875C51.775 41.5 51.925 42.125 51.925 42.825Z"
                                            stroke="#E3FF04"
                                            strokeWidth={4}
                                        />
                                    </svg>
                                    <h5 className="white mt-xxl-7 mt-6 mb-xxl-7 mb-6">
                                        Phone &amp; Fax
                                    </h5>
                                    <span className="msub d-block mb-2">
                                        Mobile : 0210320438
                                    </span>
                                    {/* <span className="msub">Fax : +44-208-1234567</span> */}
                                </div>
                            </div>

                            {/* Email */}
                            <div className="col-lg-3 col-md-6 col-sm-6" data-aos="zoom-in-right" data-aos-duration={1600}>
                                <div className="contact-sub-info bg1-clr text-center">
                                    <svg width={69} height={54} viewBox="0 0 69 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.04604 3.04604C3.69236 2.39975 4.58521 2 5.57143 2H62.7143C63.7004 2 64.5932 2.39975 65.2396 3.04604M3.04604 3.04604C2.39975 3.69236 2 4.58521 2 5.57143V48.4286C2 50.4011 3.599 52 5.57143 52H41.2857M3.04604 3.04604L9.14286 9.14307M65.2396 3.04604C65.8861 3.69236 66.2857 4.58521 66.2857 5.57143V48.4286C66.2857 50.4011 64.6868 52 62.7143 52H55.5714M65.2396 3.04604L39.1936 29.0918C36.4039 31.8814 31.8814 31.8814 29.0918 29.0918L19.8571 19.8571" stroke="#E3FF04" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <h5 className="white mt-xxl-7 mt-6 mb-xxl-7 mb-6">
                                        Mail Address
                                    </h5>
                                    <span className="msub d-block mb-2">
                                        aktivacity@gmail.com
                                    </span>
                                    <span className="msub">
                                        {/* Info.company@yahoo.com */}
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6" data-aos="zoom-in-right" data-aos-duration={1800}>
                                <div className="contact-sub-info bg1-clr text-center">
                                    <svg width={38} height={50} viewBox="0 0 38 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.1781 -0.0175781C8.92969 -0.0175781 0.25 8.71211 0.25 19.0512C0.25 29.8793 10.3109 40.9527 17.0781 48.7355C17.1047 48.7668 18.1984 49.9809 19.5453 49.9809H19.6641C21.0125 49.9809 22.0984 48.7668 22.125 48.7355C28.475 41.4355 37.75 29.3965 37.75 19.0512C37.75 8.71055 30.9797 -0.0175781 19.1781 -0.0175781ZM19.8047 46.6387C19.75 46.6934 19.6703 46.7543 19.6 46.8059C19.5281 46.7559 19.45 46.6934 19.3922 46.6387L18.575 45.698C12.1594 38.3387 3.37344 28.259 3.37344 19.0496C3.37344 10.4059 10.6109 3.1043 19.1766 3.1043C29.8469 3.1043 34.6234 11.1121 34.6234 19.0496C34.6234 26.0402 29.6375 35.3246 19.8047 46.6387ZM19.0547 9.44336C13.8781 9.44336 9.67969 13.6402 9.67969 18.8184C9.67969 23.9965 13.8781 28.1934 19.0547 28.1934C24.2312 28.1934 28.4297 23.9949 28.4297 18.8184C28.4297 13.6418 24.2328 9.44336 19.0547 9.44336ZM19.0547 25.0684C15.6078 25.0684 12.7328 22.1965 12.7328 18.7496C12.7328 15.3027 15.5359 12.4996 18.9828 12.4996C22.4312 12.4996 25.2328 15.3027 25.2328 18.7496C25.2344 22.1965 22.5031 25.0684 19.0547 25.0684Z" fill="#E3FF04" />
                                    </svg>
                                    <h5 className="white mt-xxl-7 mt-6 mb-xxl-7 mb-6">
                                        Our Location
                                    </h5>
                                    <span className="msub d-block mb-2">
                                       133-C, 4th Floor, Main Ittehad Road, Phase 2, DHA, KARACHI
                                    </span>
                                    {/* <span className="msub">
                                        RoadBensalem, PA 19020
                                    </span> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6" data-aos="zoom-in-right" data-aos-duration={2000}>
                                <div className="contact-sub-info bg1-clr text-center">
                                    <svg width={54} height={54} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27 13.1111V27H40.8889M27 52C13.1929 52 2 40.8072 2 27C2 13.1929 13.1929 2 27 2C40.8072 2 52 13.1929 52 27C52 40.8072 40.8072 52 27 52Z" stroke="#E3FF04" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <h5 className="white mt-xxl-7 mt-6 mb-xxl-7 mb-6">
                                        Office Hour
                                    </h5>
                                    <span className="msub d-block mb-2">
                                        Sun - Thu 09 am - 06pm
                                    </span>
                                    <span className="msub">
                                        Fri - Sat 4 pm - 10pm
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* --- Form Section --- */}
                        <div className="row g-xxl-7 g-4">
                            <div
                                className="col-lg-6"
                                data-aos="zoom-in"
                                data-aos-duration={2000}
                            >
                                <div className="contact-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2227.780800662942!2d67.07329285682985!3d24.828721488921243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sUstaad%20%7C%20Ingenious!5e1!3m2!1sen!2s!4v1761571162007!5m2!1sen!2s" 
                                        width="600"
                                        height="450"
                                        style={{ border: 0 }} // ✅ object format
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Ustaad Ingenious Location" // ✅ accessibility best practice
                                    ></iframe>
                                </div>

                            </div>

                            <div
                                className="col-lg-6"
                                data-aos="zoom-in"
                                data-aos-duration={2000}
                            >
                                <div className="contact-content bg1-clr">
                                    <h3 className="white mb-xxl-15 mb-xl-10 mb-lg-7 mb-5">
                                        Leave A Message
                                    </h3>
                                    <form onSubmit={sendEmail}>
                                        <div className="row g-xxl-8 g-xl-6 g-lg-4 g-4">
                                            <div className="col-lg-6">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    placeholder="Subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea
                                                    name="message"
                                                    rows={5}
                                                    placeholder="Message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-lg-5">
                                                <button type="submit" className="submit-btn">
                                                    Send Message
                                                </button>
                                            </div>

                                            {/* ✅ WhatsApp Button */}
                                            <a
                                                href="https://wa.me/923001234567"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="whatsapp-icon-btn"
                                            >
                                                <i className="fab fa-whatsapp"></i>
                                                <span>Let's Talk!</span>
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
            <ToastContainer transition={Slide} />

        </>
    );
}
