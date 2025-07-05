// api/chat.js - Basic chat endpoint for handling messages

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { message, sessionId } = req.body;

        // Validate input
        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // TODO: This is where we'll add agent routing later
        // For now, return a simple response
        const response = {
            id: Date.now(),
            message: `LEA received: "${message}"`,
            timestamp: new Date().toISOString(),
            sessionId: sessionId || 'default',
            agent: 'basic'
        };

        // Simulate some processing time
        await new Promise(resolve => setTimeout(resolve, 500));

        return res.status(200).json(response);

    } catch (error) {
        console.error('Chat API Error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
} 