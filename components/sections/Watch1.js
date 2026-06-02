
import Link from "next/link"
import VideoPopup from "../elements/VideoPopup"

export default function Watch1({ data }) {
    return (
        <>

            <div className="watch-version01 zindex1 position-relative">
                <div className="container">
                    <div className="watch-content d-center">
                        <VideoPopup style={3} videoUrl={data?.videoUrl} />
                    </div>
                </div>
            </div>
        </>

    )
}
