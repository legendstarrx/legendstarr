import { NextRequest, NextResponse } from 'next/server'

// Get API token from environment variable (set in Vercel dashboard or .env.local)
const SENDER_API_TOKEN = process.env.SENDER_API_TOKEN
const SENDER_API_URL = 'https://api.sender.net/v2/subscribers'

export async function POST(request: NextRequest) {
  try {
    // Check if token exists
    if (!SENDER_API_TOKEN) {
      console.error('SENDER_API_TOKEN is not set')
      return NextResponse.json(
        { error: 'Newsletter service is not configured' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { email } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    console.log('Attempting to subscribe:', email)

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
        trigger_automation: true,
      }),
    })

    // Get response text first
    const responseText = await response.text()
    console.log('Sender API response status:', response.status)
    console.log('Sender API response:', responseText)

    // Try to parse as JSON
    let data
    try {
      data = JSON.parse(responseText)
    } catch {
      console.error('Failed to parse response as JSON:', responseText)
      data = { message: responseText }
    }

    if (!response.ok) {
      // If subscriber already exists (status 422 or specific message)
      if (response.status === 422 || 
          response.status === 409 || 
          (data.message && (
            data.message.includes('already exists') || 
            data.message.includes('duplicate') ||
            data.message.includes('already subscribed')
          ))) {
        return NextResponse.json(
          { message: 'You are already subscribed!' },
          { status: 200 }
        )
      }
      
      console.error('Sender API error:', response.status, data)
      return NextResponse.json(
        { error: data.message || 'Failed to subscribe. Please try again.' },
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
