import { createClient } from 'next-sanity'

const client = createClient({
  projectId: '0aqsi8be',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false
})

async function check() {
  const data = await client.fetch(`*[_type == "homePage"][0]`)
  console.log(JSON.stringify(data.pageBuilder.slice(0,2), null, 2))
}
check()
