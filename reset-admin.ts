import { getPayload } from 'payload'
import { config } from 'dotenv'

config()

async function resetAdmin() {
  try {
    const { default: payloadConfig } = await import('./src/payload.config.js')
    
    const payload = await getPayload({ config: payloadConfig })
    
    const users = await payload.find({
      collection: 'users',
      limit: 100,
    })
    
    console.log(`Found ${users.docs.length} existing users`)
    
    for (const user of users.docs) {
      await payload.delete({
        collection: 'users',
        id: user.id,
      })
      console.log(`Deleted user: ${user.email}`)
    }
    
    console.log(' Deleted all existing users')
    
    const newAdmin = await payload.create({
      collection: 'users',
      data: {
        email: 'admin@example.com',
        password: 'admin123',
        name: 'Admin',
      },
    })
    
    console.log('\n New admin created successfully!')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log(' Email: admin@example.com')
    console.log(' Password: admin123')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('\  Please change these credentials after login!')
    console.log(' Login at: http://localhost:3001/admin')
    
    process.exit(0)
  } catch (error) {
    console.error(' Error:', error)
    process.exit(1)
  }
}

resetAdmin()