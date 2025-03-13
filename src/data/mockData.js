export const CRUSH_ID = 'crush123';

export const users = {
    [CRUSH_ID]: {
        id: CRUSH_ID,
        username: 'I.n.a.y.a',
        fullName: 'Inaya',
        avatar: 'https://github.com/siddhu2010/Sangeet/blob/main/Screenshot%202025-03-13%20235458.png?raw=true',
        bio: '✨ Living life to the fullest\n🎓 Art & Design\n🌎 Travel enthusiast\n🎨 Commission open',
        posts: 23,
        followers: '155',
        following: 80,
        isVerified: false,
        stories: [
            { id: 1, type: 'image', url: 'https://images.unsplash.com/photo-1513207565459-d7f36bfa1222' },
            { id: 2, type: 'image', url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963' },
            { id: 3, type: 'image', url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f' },
            { id: 4, type: 'image', url: 'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07' },
        ],
        highlights: [
            { id: 1, title: 'Travel ✈️', cover: 'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7' },
            { id: 2, title: 'Art 🎨', cover: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f' },
            { id: 3, title: 'Studio 🎯', cover: 'https://images.unsplash.com/photo-1513207565459-d7f36bfa1222' },
            { id: 4, title: 'Nature 🌿', cover: 'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07' },
        ],
    },
    me: {
        id: 'me',
        username: 'your_username',
        avatar: 'https://images.unsplash.com/photo-1618641986557-1ecd230959aa',
    },
    girl1: {
        id: 'girl1',
        username: 'Ritss',
        fullName: 'Ritika',
        avatar: 'https://github.com/siddhu2010/Sangeet/blob/main/Screenshot%202025-03-14%20010615.png?raw=true',
    },
    girl2: {
        id: 'girl2',
        username: 'girl2_account',
        fullName: 'Sophia Brown',
        avatar: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
    },
    boy1: {
        id: 'boy1',
        username: 'boy1_account',
        fullName: 'Liam Smith',
        avatar: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f',
    },
    girl3: {
        id: 'girl3',
        username: 'girl3_account',
        fullName: 'Olivia Davis',
        avatar: 'https://images.unsplash.com/photo-1513207565459-d7f36bfa1222',
    },
    boy2: {
        id: 'boy2',
        username: 'boy2_account',
        fullName: 'Noah Wilson',
        avatar: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
    },
    girl4: {
        id: 'girl4',
        username: 'girl4_account',
        fullName: 'Ava Martinez',
        avatar: 'https://images.unsplash.com/photo-1513207565459-d7f36bfa1222',
    },
    boy3: {
        id: 'boy3',
        username: 'boy3_account',
        fullName: 'Ethan Garcia',
        avatar: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
    },
    girl5: {
        id: 'girl5',
        username: 'girl5_account',
        fullName: 'Mia Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1513207565459-d7f36bfa1222',
    },
    boy4: {
        id: 'boy4',
        username: 'boy4_account',
        fullName: 'Lucas Hernandez',
        avatar: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
    },
    girl8: {
        id: 'girl8',
        username: 'girl8_account',
        avatar: 'https://images.unsplash.com/photo-1513207565459-d7f36bfa1222',
    },
    boy8: {
        id: 'boy8',
        username: 'boy8_account',
        avatar: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
    },
    girl9: {
        id: 'girl9',
        username: 'girl9_account',
        avatar: 'https://images.unsplash.com/photo-1513207565459-d7f36bfa1222',
    },
    boy9: {
        id: 'boy9',
        username: 'boy9_account',
        avatar: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
    },
};

export const posts = [
    {
        id: 1,
        userId: CRUSH_ID,
        image: 'https://github.com/siddhu2010/Sangeet/blob/main/Screenshot%202025-03-13%20235458.png?raw=true',
        caption: 'Just Living with myself✨ #creative #passion',
        likes: 199,
        comments: 89,
        timestamp: '2024-03-06T09:00:00Z',
    },
    {
        id: 2,
        userId: CRUSH_ID,
        image: 'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07',
        caption: 'Morning light in the studio is just different ☀️ #morningvibes #artistlife',
        likes: 2567,
        comments: 156,
        timestamp: '2024-03-05T08:15:00Z',
    },
    {
        id: 3,
        userId: CRUSH_ID,
        image: 'https://images.unsplash.com/photo-1513207565459-d7f36bfa1222',
        caption: 'Work in progress... Can\'t wait to share the final result! 🎨 #wip #art',
        likes: 3891,
        comments: 245,
        timestamp: '2024-03-04T16:30:00Z',
    },
    {
        id: 4,
        userId: CRUSH_ID,
        image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
        caption: 'Finding inspiration in nature 🌿 Sometimes you just need to step outside the studio',
        likes: 2123,
        comments: 134,
        timestamp: '2024-03-03T14:20:00Z',
    },
    {
        id: 5,
        userId: CRUSH_ID,
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f',
        caption: 'New commission piece finished! DM for inquiries 🎨 #commissioned #art',
        likes: 4532,
        comments: 278,
        timestamp: '2024-03-02T11:45:00Z',
    }
];

// Predefined chat responses based on user messages
export const predefinedResponses = {
    greetings: [
        "Heyyyyyyy!!!!",
        // "Hi there! How are you?",
        // "Hello! Thanks for the message 💫"
    ],
    Inquiry: [
        "Ohhhhhh!!!!!Aisi baat hai mtlb kaafi shy ho tum. Lekin agr tum baat hi nhi karoge toh mujhe jaanoge kaise...",
        "Thanks for your interest in my art! I have different styles and pricing options available",
        // "I'd love to work on a piece for you! What kind of artwork are you looking for?"
    ],
    compliments: [
        "That's so sweet of you to say! Thank you 🥰",
        "Thanks! I really appreciate the support 💕",
        "You're too kind! Thank you so much ✨"
    ],
    process: [
        "I usually start with sketches, then move to final piece once the client approves",
        "Each piece takes about 2-3 weeks depending on complexity",
        "I love keeping my clients updated throughout the process!"
    ]
};

export const getResponse = (message) => {
    for (const pattern of messagePatterns) {
        if (pattern.patterns.some(p => {
            const regex = new RegExp(`\\b${escapeRegExp(p)}\\b`, 'i');
            return regex.test(message);
        })) {
            const responses = pattern.responses;
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    return "Thanks for your message! 😊";
};


export const chatMessages = {
    [CRUSH_ID]: [
        {
            id: 1,
            senderId: 'me',
            text: "Hey!",
            timestamp: "2024-03-06T10:00:00Z",
            status: 'sent'
        },
        {
            id: 2,
            senderId: CRUSH_ID,
            text: "Hi! Yeah, I really love your art posts! 🎨",
            timestamp: "2024-03-06T10:02:00Z",
            status: 'read'
        },
        {
            id: 3,
            senderId: CRUSH_ID,
            text: "That's so sweet! I'm actually working on a new piece right now",
            timestamp: "2024-03-06T10:03:00Z",
            status: 'read'
        },
        {
            id: 4,
            senderId: 'me',
            text: "Can't wait to see it! Your last piece was amazing",
            timestamp: "2024-03-06T10:04:00Z",
            status: 'sent'
        },
        {
            id: 5,
            senderId: CRUSH_ID,
            text: "Thank you! 🥰 Maybe I'll post a sneak peek in my story later",
            timestamp: "2024-03-06T10:05:00Z",
            status: 'read'
        }
    ]
};

// Predefined message patterns and their responses
export const messagePatterns = [
    {
        patterns: ['hi', 'hello', 'hey'],
        responses: predefinedResponses.greetings
    },
    {
        patterns: ['nhi','nhi'],
        responses: predefinedResponses.Inquiry
    },
    {
        patterns: ['Yaa..Exactly thats why I think we should meet first. Kyunki aajkal you know it quite sus ti interact on social media', 'amazing', 'love your art', 'great work'],
        responses: predefinedResponses.compliments
    },
    {
        patterns: ['how long', 'process', 'how do you'],
        responses: predefinedResponses.process
    }
];

export const chatList = [
    {
        id: 'crush123',
        lastMessage: "I'm done with you....",
        timestamp: "2024-03-06T10:00:00Z",
        unread: 1,
        status: 'unread',
        isOnline: true,
    },
    {
        id: 'girl1',
        lastMessage: "Inaya ke saath sb sorted chal rha naa tera?!",
        timestamp: "2024-03-06T09:30:00Z",
        unread: 1,
        status: 'unread',
        isOnline: false,
    },
    {
        id: 'girl2',
        lastMessage: "Did you finish the project?",
        timestamp: "2024-03-06T08:15:00Z",
        unread: 0,
        status: 'read',
        isOnline: true,
    },
    {
        id: 'boy1',
        lastMessage: "Let's grab coffee tomorrow!",
        timestamp: "2024-03-06T07:45:00Z",
        unread: 0,
        status: 'delivered',
        isOnline: true,
    },
    {
        id: 'boy2',
        lastMessage: "Are you coming to the game?",
        timestamp: "2024-03-06T06:30:00Z",
        unread: 1,
        status: 'unread',
        isOnline: false,
    },
    {
        id: 'girl3',
        lastMessage: "What are you up to this weekend?",
        timestamp: "2024-03-06T10:30:00Z",
        unread: 1,
        status: 'unread',
        isOnline: true,
    },
    {
        id: 'boy2',
        lastMessage: "Are you coming to the event?",
        timestamp: "2024-03-06T09:45:00Z",
        unread: 0,
        status: 'read',
        isOnline: false,
    },
    {
        id: 'girl4',
        lastMessage: "Can you send me the notes?",
        timestamp: "2024-03-06T03:30:00Z",
        unread: 1,
        status: 'unread',
        isOnline: true,
    },
    {
        id: 'boy4',
        lastMessage: "Happy Birthday! 🎉",
        timestamp: "2024-03-06T02:00:00Z",
        unread: 0,
        status: 'read',
        isOnline: true,
    },
    {
        id: 'girl5',
        lastMessage: "Let's plan a trip soon!",
        timestamp: "2024-03-06T01:00:00Z",
        unread: 1,
        status: 'unread',
        isOnline: false,
    },
    {
        id: 'boy5',
        lastMessage: "Did you see the latest episode?",
        timestamp: "2024-03-06T12:00:00Z",
        unread: 0,
        status: 'delivered',
        isOnline: true,
    },
    {
        id: 'girl6',
        lastMessage: "I need your advice on something.",
        timestamp: "2024-03-06T11:00:00Z",
        unread: 0,
        status: 'read',
        isOnline: false,
    },
    {
        id: 'boy6',
        lastMessage: "Are you free this weekend?",
        timestamp: "2024-03-06T10:15:00Z",
        unread: 1,
        status: 'unread',
        isOnline: true,
    },
    {
        id: 'girl7',
        lastMessage: "Let's catch up soon!",
        timestamp: "2024-03-06T09:00:00Z",
        unread: 0,
        status: 'delivered',
        isOnline: false,
    },
    {
        id: 'boy7',
        lastMessage: "What do you think about the new movie?",
        timestamp: "2024-03-06T08:45:00Z",
        unread: 0,
        status: 'read',
        isOnline: true,
    },
    // Additional chats
    {
        id: 'girl8',
        lastMessage: "Can you help me with my homework?",
        timestamp: "2024-03-06T07:00:00Z",
        unread: 1,
        status: 'unread',
        isOnline: false,
    },
    {
        id: 'boy8',
        lastMessage: "Let's go hiking this weekend!",
        timestamp: "2024-03-06T06:00:00Z",
        unread: 0,
        status: 'delivered',
        isOnline: true,
    },
    {
        id: 'girl9',
        lastMessage: "I saw your latest post, it's amazing!",
        timestamp: "2024-03-06T05:30:00Z",
        unread: 0,
        status: 'read',
        isOnline: true,
    },
    {
        id: 'boy9',
        lastMessage: "Are you still working on that project?",
        timestamp: "2024-03-06T04:45:00Z",
        unread: 1,
        status: 'unread',
        isOnline: false,
    },
    {
        id: 'girl10',
        lastMessage: "What are your plans for the summer?",
        timestamp: "2024-03-06T03:15:00Z",
        unread: 0,
        status: 'delivered',
        isOnline: true,
    },
    {
        id: 'boy10',
        lastMessage: "Did you finish the book I recommended?",
        timestamp: "2024-03-06T02:30:00Z",
        unread: 0,
        status: 'read',
        isOnline: false,
    },
    {
        id: 'girl11',
        lastMessage: "Let's do a movie night soon!",
        timestamp: "2024-03-06T01:45:00Z",
        unread: 1,
        status: 'unread',
        isOnline: true,
    },
    {
        id: 'boy11',
        lastMessage: "What do you think about the new restaurant?",
        timestamp: "2024-03-06T12:15:00Z",
        unread: 0,
        status: 'delivered',
        isOnline: true,
    },
    {
        id: 'girl12',
        lastMessage: "I need your opinion on something.",
        timestamp: "2024-03-06T11:30:00Z",
        unread: 0,
        status: 'read',
        isOnline: false,
    },
    {
        id: 'boy12',
        lastMessage: "Are you going to the concert next week?",
        timestamp: "2024-03-06T10:45:00Z",
        unread: 1,
        status: 'unread',
        isOnline: true,
    },
    {
        id: 'girl13',
        lastMessage: "Let's plan a study session!",
        timestamp: "2024-03-06T09:15:00Z",
        unread: 0,
        status: 'delivered',
        isOnline: false,
    },
    {
        id: 'boy13',
        lastMessage: "What time are we meeting for lunch?",
        timestamp: "2024-03-06T08:30:00Z",
        unread: 0,
        status: 'read',
        isOnline: true,
    },
    {
        id: 'girl14',
        lastMessage: "I saw your story, it was great!",
        timestamp: "2024-03-06T07:15:00Z",
        unread: 1,
        status: 'unread',
        isOnline: false,
    },
    {
        id: 'boy14',
        lastMessage: "Are you free to hang out this weekend?",
        timestamp: "2024-03-06T06:45:00Z",
        unread: 0,
        status: 'delivered',
        isOnline: true,
    },
    {
        id: 'girl15',
        lastMessage: "Let's catch up soon!",
        timestamp: "2024-03-06T05:15:00Z",
        unread: 0,
        status: 'read',
        isOnline: false,
    },
]; 