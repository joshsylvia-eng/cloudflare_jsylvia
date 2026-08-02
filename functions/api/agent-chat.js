// Server-side Groq chat proxy.
// Keeps GROQ_API_KEY out of the browser. The client posts messages
// here and receives only the assistant's reply text.
export async function onRequestPost(context) {
  const apiKey = context.env.GROQ_API_KEY;

  if (!apiKey || apiKey === 'your_groq_api_key_here') {
    return new Response(JSON.stringify({
      success: false,
      error: 'AI service is not configured'
    }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  let messages;
  try {
    const body = await context.request.json();
    messages = body.messages;
  } catch {
    return new Response(JSON.stringify({
      success: false,
      error: 'Invalid request body'
    }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response(JSON.stringify({
      success: false,
      error: 'messages array is required'
    }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages,
        max_tokens: 400,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(JSON.stringify({
        success: false,
        error: 'Upstream AI provider error'
      }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || '';

    return new Response(JSON.stringify({
      success: true,
      response: reply
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: 'AI service error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
