export async function onRequestPost(context) {
  try {
    const { name, email, subject, message } = await context.request.json();
    const resendApiKey = context.env.RESEND_API_KEY;
    const contactEmail = context.env.CONTACT_EMAIL || 'joshsylvia@gmail.com';
    
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not configured in environment variables');
      return new Response(JSON.stringify({
        success: false,
        error: 'Email service not configured. Please contact the administrator.'
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }
    
    console.log('Sending email via Resend:', { name, email, subject });
    
    // Send email using Resend API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Josh Sylvia Tech <onboarding@resend.dev>',
        to: contactEmail,
        subject: `Contact Form: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr>
          <h3>Message:</h3>
          <p>${message}</p>
          <hr>
          <p><em>Sent from Josh Sylvia Tech contact form</em></p>
        `
      })
    });
    
    if (!resendResponse.ok) {
      const errorData = await resendResponse.text();
      console.error('Resend API error:', errorData);
      console.error('Resend API status:', resendResponse.status);
      return new Response(JSON.stringify({
        success: false,
        error: `Failed to send email. API Error: ${errorData}`
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }
    
    const resendData = await resendResponse.json();
    console.log('Email sent successfully:', resendData);
    
    return new Response(JSON.stringify({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
