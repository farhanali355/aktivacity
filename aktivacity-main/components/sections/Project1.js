import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})

export default function Project1() {
    return (
        <>

            <section className="project-count pt-space pb-space">
                <div className="container">
                    <div className="row g-xxl-7 g-5 justify-content-center">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="project-count-item d-center">
                                <div className="box">
                                    <h2>
                                        <CounterUp count={250} time={3} />
                                        <span>+</span>
                                    </h2>
                                    <span className="pra-clr">
                                        Team member
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="project-count-item d-center">
                                <div className="box">
                                    <h2>
                                        <CounterUp count={850} time={3} />
                                        <span>+</span>
                                    </h2>
                                    <span className="pra-clr">
                                        Project Done
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="project-count-item d-center">
                                <div className="box">
                                    <h2>
                                        <CounterUp count={360} time={3} />
                                        <span>+</span>
                                    </h2>
                                    <span className="pra-clr">
                                        Happy Clients
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="project-count-item d-center">
                                <div className="box">
                                    <h2>
                                        <CounterUp count={160} time={3} />
                                        <span>+</span>
                                    </h2>
                                    <span className="pra-clr">
                                        Winning Award
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
