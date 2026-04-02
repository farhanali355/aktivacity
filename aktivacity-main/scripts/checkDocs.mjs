import { createClient } from 'next-sanity'

const client = createClient({
  projectId: '0aqsi8be',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false
})

async function check() {
  const data = await client.fetch(`*[_type == "homePage"]{_id, _type, "hasBuilder": defined(pageBuilder)}`)
  console.log("Found homePage docs:", data)
}
check()
