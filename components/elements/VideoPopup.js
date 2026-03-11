'use client'
import { useState } from 'react'

export default function VideoPopup({ style }) {
    const [isOpen, setOpen] = useState(false)
    
    // Apni local video ka path
    const localVideoPath = "/A2.mp4" // Yahan apni video ka path dijiye

    return (
        <>
            {style === 1 &&
                <a onClick={() => setOpen(true)} className="video-popup">
                    <img src="/assets/img/element/download.png" alt="img" className="hero-circle" />
                </a>
            }
            {style === 2 &&
                <a onClick={() => setOpen(true)} className="video-popup step-textcircle">
                    <span className="icon d-center radius100">
                        <i className="fas fa-play" />
                    </span>
                    <img src="/assets/img/element/step-textcircle.png" alt="img" className="step-circle" />
                </a>
            }
            {style === 3 &&
                <a onClick={() => setOpen(true)} className="video-popup position-relative">
                    <span className="icons themebg radius100 d-center">
                        <i className="fas fa-play" />
                    </span>
                </a>
            }

            {/* Custom Video Modal */}
            {isOpen && (
                <div className="modal-overlay" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    zIndex: 9999,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div className="modal-content" style={{
                        position: 'relative',
                        width: '80%',
                        maxWidth: '800px'
                    }}>
                        <button 
                            onClick={() => setOpen(false)}
                            style={{
                                position: 'absolute',
                                top: '-40px',
                                right: '0',
                                background: 'none',
                                border: 'none',
                                color: 'white',
                                fontSize: '24px',
                                cursor: 'pointer'
                            }}
                        >
                            ✕
                        </button>
                        <video 
                            controls 
                            autoPlay 
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '8px'
                            }}
                        >
                            <source src={localVideoPath} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </>
    )
}