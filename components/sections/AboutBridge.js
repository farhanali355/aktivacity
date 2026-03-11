import Link from "next/link";

export default function AboutBridge() {
    return (
        <section className="about-bridge-section pt-100 pb-100 bg-black text-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="section-title mb-0" data-aos="fade-up" data-aos-duration="1000">
                            <h2 className="stitle mb-4 text-white">
                                Bridge the Gap <span className="theme-clr">Between Vision & Reality</span>
                            </h2>
                            <p className="text-white fs-5 mb-4 opacity-75">
                                Tired of juggling multiple vendors for your digital needs?
                            </p>
                            <p className="text-white fs-5 mb-0" style={{ lineHeight: '1.8' }}>
                                As a leading <span className="theme-clr fw-bold">IT Company in Pakistan</span> and <span className="theme-clr fw-bold">Full Service Design & Development Agency</span>,
                                we offer a <span className="text-decoration-underline text-white">unified strategy</span> that blends AI, technology, and creative storytelling.
                                We deliver <strong>integrated solutions</strong> and drive <strong>digital transformation</strong> for <strong>measurable business growth</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
