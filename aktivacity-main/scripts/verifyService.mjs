// Native fetch used

async function test() {
    console.log('Testing Dynamic Service Page...');
    try {
        const res = await fetch('http://localhost:3000/services/web-development');
        console.log('Status Code:', res.status);
        const text = await res.text();
        
        if (res.status === 404) {
            console.log('❌ 404 Not Found! The route might not be registered yet.');
            return;
        }

        const hasHero = text.includes('Web Development Services in Karachi');
        const hasBadge = text.includes('Innovation & Growth');
        const hasProcess = text.includes('Our Streamlined Development Process');

        console.log('Hero Text Found:', hasHero);
        console.log('Badge Text Found:', hasBadge);
        console.log('Process Text Found:', hasProcess);

        if (hasHero && hasBadge) {
            console.log('✅ Dynamic Page looks good!');
        } else {
            console.log('❌ Some content missing. Check if server is running or cache issues.');
            // console.log(text.substring(0, 1000));
        }
    } catch (e) {
        console.error('Connection failed. Is localhost:3000 up?', e.message);
    }
}

test();
