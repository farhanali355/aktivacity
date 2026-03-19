import http from 'http'

http.get('http://localhost:3000', (res) => {
    let data = ''
    res.on('data', chunk => data += chunk)
    res.on('end', () => {
        // Find if Hero1 exists in HTML
        const hasHero = data.includes('hero-section-simple')
        const hasIntro = data.includes('intro-section')
        const hasAbout = data.includes('about-section')
        const hasService = data.includes('service-section')
        const hasTextSlider = data.includes('mycustom-marque')
        const hasCaseStudy = data.includes('case-study-vsesion01')
        const hasTestimonial = data.includes('testimonial-section')

        console.log(JSON.stringify({
            hasHero,
            hasIntro,
            hasAbout,
            hasService,
            hasTextSlider,
            hasCaseStudy,
            hasTestimonial
        }, null, 2))
        
        // Also log out any errors
        if(data.includes('Error:')) {
            console.log("Error found in HTML:", data.substring(data.indexOf('Error:'), data.indexOf('Error:') + 100))
        }
    })
}).on('error', err => console.log('Error:', err.message))
