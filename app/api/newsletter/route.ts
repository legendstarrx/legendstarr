import { NextRequest, NextResponse } from 'next/server'

// Get API key from environment variable (set in Vercel dashboard or .env.local)
// Add BREVO_API_KEY to your Vercel environment variables for production
const BREVO_API_KEY = process.env.BREVO_API_KEY
const BREVO_API_URL = 'https://api.brevo.com/v3/contacts'

if (!BREVO_API_KEY) {
  console.warn('BREVO_API_KEY is not set. Newsletter subscriptions will fail.')
}

export async function POST(request: NextRequest) {
  try {
    if (!BREVO_API_KEY) {
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

    // Add contact to Brevo
    const response = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        listIds: [], // Add list IDs if you have specific lists in Brevo
        updateEnabled: true, // Update contact if already exists
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      // If contact already exists, that's okay - return success
      if (response.status === 400 && data.message?.includes('already exists')) {
        return NextResponse.json(
          { message: 'You are already subscribed!' },
          { status: 200 }
        )
      }
      
      console.error('Brevo API error:', data)
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
