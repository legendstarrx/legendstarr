import { NextRequest, NextResponse } from 'next/server'

// Get API token from environment variable (set in Vercel dashboard or .env.local)
// Add SENDER_API_TOKEN to your Vercel environment variables for production
const SENDER_API_TOKEN = process.env.SENDER_API_TOKEN
const SENDER_API_URL = 'https://api.sender.net/v2/subscribers'

if (!SENDER_API_TOKEN) {
  console.warn('SENDER_API_TOKEN is not set. Newsletter subscriptions will fail.')
}

export async function POST(request: NextRequest) {
  try {
    if (!SENDER_API_TOKEN) {
      return NextResponse.json(
        { error: 'Newsletter service is not configured' },
        { status: 500 }
      )
    }

    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Add subscriber to Sender.net
    const response = await fetch(SENDER_API_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${SENDER_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        // Optional: Add groups if you have specific groups in Sender
        // groups: ['group_id_here'],
        trigger_automation: true,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      // If subscriber already exists, that's okay - return success
      if (response.status === 422 || (data.message && data.message.includes('already exists'))) {
        return NextResponse.json(
          { message: 'You are already subscribed!' },
          { status: 200 }
        )
      }
      
      console.error('Sender API error:', data)
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again.' },
        { status: response.status }
      )
    }

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
