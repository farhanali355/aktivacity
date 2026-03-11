

export default function SoftwareWatch1() {
    return (
        <>
            
            <div className="software-fullwatch position-relative">
                <div className="video-wrapper">
                    <video className="w-100 h-100" muted loop autoPlay>
                        <source src="/video.webm" type="video/mp4" />
                    </video>
                </div>
            </div>
        </>
    )
}
