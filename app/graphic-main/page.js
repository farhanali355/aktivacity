// app/graphic-main/page.js
'use client'
import React from 'react'
import Header1 from '/components/layout/header/Header1.js'

export default function GraphicMain() {
    const [scroll, setScroll] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const styles = {
        container: {
            minHeight: '100vh',
            background: '#000',
            color: 'white',
            fontFamily: "'Poppins', sans-serif",
            paddingTop: '0px',
        },
        heroSection: {
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '80px 20px',
            backgroundImage: 'url("/assets/img/element/bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center'
        },
        heroOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.7)',
            zIndex: 1
        },
        heroContent: {
            position: 'relative',
            zIndex: 2,
            maxWidth: '1200px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        heroTitle: {
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', // ✅ Responsive font size
            fontWeight: '900',
            color: '#ffffff',
            marginBottom: '20px',
            lineHeight: '1.1',
            textShadow: '2px 2px 10px rgba(0,0,0,0.8)',
            textAlign: 'center'
        },
        heroSubtitle: {
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', // ✅ Responsive font size
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '40px',
            lineHeight: '1.6',
            textShadow: '1px 1px 5px rgba(0,0,0,0.5)',
            textAlign: 'center',
            maxWidth: '600px'
        },
        heroBtn: {
            padding: 'clamp(12px, 3vw, 15px) clamp(30px, 5vw, 40px)', // ✅ Responsive padding
            backgroundColor: 'transparent',
            color: '#e9fe49',
            border: '2px solid #e9fe49',
            borderRadius: '50px',
            cursor: 'pointer',
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', // ✅ Responsive font size
            fontWeight: '600',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '2px'
        },
        heroBtnHover: {
            backgroundColor: '#e9fe49',
            color: '#000000',
            boxShadow: '0 0 30px rgba(233, 254, 73, 0.5)'
        },
        introSection: {
            padding: 'clamp(60px, 10vw, 100px) clamp(20px, 5vw, 50px)', // ✅ Responsive padding
            background: 'rgba(255,255,255,0.02)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
        },
        introTitle: {
            fontSize: 'clamp(2rem, 5vw, 3rem)', // ✅ Responsive font size
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '40px',
            color: '#ffffff',
            textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
        },
        introContent: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', // ✅ Responsive grid
            gap: 'clamp(20px, 4vw, 40px)', // ✅ Responsive gap
            maxWidth: '1200px',
            margin: '0 auto'
        },
        introCard: {
            background: 'rgba(255,255,255,0.05)',
            padding: 'clamp(25px, 4vw, 40px) clamp(20px, 3vw, 30px)', // ✅ Responsive padding
            borderRadius: '15px',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            textAlign: 'center'
        },
        introCardHover: {
            borderColor: '#e9fe49',
            boxShadow: '0 10px 30px rgba(233, 254, 73, 0.2)',
            transform: 'translateY(-5px)'
        },
        introIcon: {
            fontSize: 'clamp(2rem, 5vw, 3rem)', // ✅ Responsive icon size
            marginBottom: '20px',
            color: '#e9fe49'
        },
        introCardTitle: {
            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', // ✅ Responsive font size
            fontWeight: '600',
            marginBottom: '15px',
            color: '#ffffff'
        },
        introCardText: {
            color: 'rgba(255,255,255,0.8)',
            lineHeight: '1.6',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)' // ✅ Responsive font size
        },
        servicesSection: {
            padding: 'clamp(60px, 10vw, 100px) clamp(20px, 5vw, 50px)' // ✅ Responsive padding
        },
        sectionTitle: {
            fontSize: 'clamp(2rem, 5vw, 3rem)', // ✅ Responsive font size
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '60px',
            color: '#ffffff',
            textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
        },
        servicesGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', // ✅ Responsive grid
            gap: 'clamp(20px, 4vw, 40px)', // ✅ Responsive gap
            maxWidth: '1400px',
            margin: '0 auto'
        },
        serviceCard: {
            background: 'rgba(255,255,255,0.05)',
            padding: 'clamp(25px, 4vw, 40px) clamp(20px, 3vw, 30px)', // ✅ Responsive padding
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            textAlign: 'center'
        },
        serviceCardHover: {
            borderColor: '#e9fe49',
            boxShadow: '0 15px 40px rgba(233, 254, 73, 0.2)',
            transform: 'translateY(-10px)'
        },
        serviceIcon: {
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', // ✅ Responsive icon size
            marginBottom: '20px',
            color: '#e9fe49'
        },
        serviceName: {
            fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', // ✅ Responsive font size
            fontWeight: '600',
            marginBottom: '15px',
            color: '#ffffff'
        },
        serviceDescription: {
            color: 'rgba(255,255,255,0.8)',
            lineHeight: '1.6',
            marginBottom: '20px',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)' // ✅ Responsive font size
        },
        footer: {
            padding: 'clamp(30px, 5vw, 50px)', // ✅ Responsive padding
            textAlign: 'center',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(0,0,0,0.5)'
        },
        footerText: {
            color: 'rgba(255,255,255,0.7)',
            fontSize: 'clamp(0.8rem, 2vw, 1rem)' // ✅ Responsive font size
        }
    }

    const [hoverStates, setHoverStates] = React.useState({})
    const [isMobileMenu, setIsMobileMenu] = React.useState(false)

    const handleMouseEnter = (item) => {
        setHoverStates(prev => ({ ...prev, [item]: true }))
    }

    const handleMouseLeave = (item) => {
        setHoverStates(prev => ({ ...prev, [item]: false }))
    }

    const handleMobileMenu = () => {
        setIsMobileMenu(!isMobileMenu)
    }

    return (
        <>
            <Header1
                scroll={scroll}
                isMobileMenu={isMobileMenu}
                handleMobileMenu={handleMobileMenu}
            />

            <div style={styles.container}>
                {/* Hero Section - Now Centered */}  
                <section style={styles.heroSection}>
                    <div style={styles.heroOverlay}></div>
                    <div style={styles.heroContent}>
                        <h1 style={styles.heroTitle}>
                            Premium Graphics Design Solutions
                        </h1>
                        <p style={styles.heroSubtitle}>
                            Transform your brand with cutting-edge graphic design services.
                            From stunning visuals to compelling brand identities, we create
                            designs that captivate and convert.
                        </p>
                        <button
                            style={{
                                ...styles.heroBtn,
                                ...(hoverStates.heroBtn && styles.heroBtnHover)
                            }}
                            onMouseEnter={() => handleMouseEnter('heroBtn')}
                            onMouseLeave={() => handleMouseLeave('heroBtn')}
                        >
                            Get Started
                        </button>
                    </div>
                </section>

                {/* Rest of the sections remain the same */}
                <section style={styles.introSection}>
                    <h2 style={styles.introTitle}>Why Choose Our Graphics Services?</h2>
                    <div style={styles.introContent}>
                        {[
                            {
                                icon: '🎨',
                                title: 'Creative Excellence',
                                text: 'Our team of expert designers brings fresh perspectives and innovative ideas to every project.'
                            },
                            {
                                icon: '⚡',
                                title: 'Fast Delivery',
                                text: 'Get your designs delivered quickly without compromising on quality or creativity.'
                            },
                            {
                                icon: '💎',
                                title: 'Premium Quality',
                                text: 'We use the latest tools and techniques to deliver pixel-perfect, professional designs.'
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    ...styles.introCard,
                                    ...(hoverStates[`intro${index}`] && styles.introCardHover)
                                }}
                                onMouseEnter={() => handleMouseEnter(`intro${index}`)}
                                onMouseLeave={() => handleMouseLeave(`intro${index}`)}
                            >
                                <div style={styles.introIcon}>{item.icon}</div>
                                <h3 style={styles.introCardTitle}>{item.title}</h3>
                                <p style={styles.introCardText}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section style={styles.servicesSection}>
                    <h2 style={styles.sectionTitle}>Our Graphics Services</h2>
                    <div style={styles.servicesGrid}>
                        {[
                            {
                                icon: '🖼️',
                                name: 'UI/UX Design',
                                description: 'Create intuitive and beautiful user interfaces that enhance user experience.'
                            },
                            {
                                icon: '🎯',
                                name: 'Brand Identity',
                                description: 'Develop strong brand identities that communicate your values effectively.'
                            },
                            {
                                icon: '✨',
                                name: 'Motion Graphics',
                                description: 'Bring your ideas to life with captivating motion graphics and animations.'
                            },
                            {
                                icon: '📱',
                                name: 'Social Media Graphics',
                                description: 'Engaging visuals optimized for social media platforms and digital marketing.'
                            },
                            {
                                icon: '📄',
                                name: 'Print Design',
                                description: 'High-quality print materials that make a lasting physical impression.'
                            },
                            {
                                icon: '🎨',
                                name: '3D Modeling',
                                description: 'Stunning 3D models and renders for various applications and industries.'
                            }
                        ].map((service, index) => (
                            <div
                                key={index}
                                style={{
                                    ...styles.serviceCard,
                                    ...(hoverStates[`service${index}`] && styles.serviceCardHover)
                                }}
                                onMouseEnter={() => handleMouseEnter(`service${index}`)}
                                onMouseLeave={() => handleMouseLeave(`service${index}`)}
                            >
                                <div style={styles.serviceIcon}>{service.icon}</div>
                                <h3 style={styles.serviceName}>{service.name}</h3>
                                <p style={styles.serviceDescription}>{service.description}</p>
                                <button style={styles.heroBtn}>Learn More</button>
                            </div>
                        ))}
                    </div>
                </section>

                <footer style={styles.footer}>
                    <p style={styles.footerText}>
                        © 2024 Graphics Pro. All rights reserved. | Premium Design Solutions
                    </p>
                </footer>
            </div>
        </>
    )
}