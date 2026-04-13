

export default function TextSLider1({ data }) {
    const text = data?.text || "Let's Aktivate Your Brand."
    return (
        <>

            <div className="digital-solution testi-italic pb-lg-20 pb-15">
                <div className="mycustom-marque">
                    <div className="scrolling-wrap">
                         <div className="comm">
                            <div className="cmn-textslide textitalick">{text}</div>
                            <div><img src="/assets/img/element/download.png" className="slider-logo" alt="img" /></div>
                            <div className="cmn-textslide text-custom-storke">{text}</div>
                            <div><img src="/assets/img/element/download.png" className="slider-logo" alt="img" /></div>
                            <div className="cmn-textslide textitalick">{text}</div>
                            <div><img src="/assets/img/element/download.png" className="slider-logo" alt="img" /></div>
                            <div className="cmn-textslide text-custom-storke">{text}</div>
                        </div>
                         <div className="comm">
                            <div className="cmn-textslide textitalick">{text}</div>
                            <div><img src="/assets/img/element/download.png" className="slider-logo" alt="img" /></div>
                            <div className="cmn-textslide text-custom-storke">{text}</div>
                            <div><img src="/assets/img/element/download.png" className="slider-logo" alt="img" /></div>
                            <div className="cmn-textslide textitalick">{text}</div>
                            <div><img src="/assets/img/element/download.png" className="slider-logo" alt="img" /></div>
                            <div className="cmn-textslide text-custom-storke">{text}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
