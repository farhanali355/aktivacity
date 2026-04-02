import { createClient } from 'next-sanity'

const client = createClient({
  projectId: '0aqsi8be',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false
})

async function check() {
  const data = await client.fetch(`*[_type == "homePage"][0]`)
  console.log("Keys in homePage:", Object.keys(data || {}))
  if (data?.pageBuilder) {
    console.log(`pageBuilder has ${data.pageBuilder.length} items.`)
    data.pageBuilder.forEach(b => console.log(' ->', b._type))
  } else {
    console.log("No pageBuilder field found in Sanity document!")
  }
}
check()
