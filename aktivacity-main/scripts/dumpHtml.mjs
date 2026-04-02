import http from 'http'
import fs from 'fs'

http.get('http://localhost:3000', (res) => {
    let data = ''
    res.on('data', chunk => data += chunk)
    res.on('end', () => {
        fs.writeFileSync('out.html', data)
        console.log("HTML written to out.html. Length:", data.length)
    })
}).on('error', err => console.log('Error:', err.message))
