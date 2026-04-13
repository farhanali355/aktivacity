// Native fetch

async function testConnection(projectId) {
    const url = `https://${projectId}.api.sanity.io/v1/data/query/production?query=*[_type == "homePage"][0]`;
    
    console.log(`Checking ID: ${projectId}`);
    try {
        const res = await fetch(url);
        console.log(`Status (${projectId}):`, res.status);
    } catch (e) {
        console.log(`❌ (${projectId}) Failed`);
    }
}

async function run() {
    await testConnection('0aqsi8be');
    await testConnection('oaqsl8be');
}
run();
