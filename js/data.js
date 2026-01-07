// Hackwarts Hackathon - Project Data
// All houses and their projects

const housesData = [
    {
        id: 'gryffindor',
        name: 'Gryffindor',
        motto: 'Beginner → Intermediate',
        color: '#740001',
        accentColor: '#D3A625',
        icon: 'assets/images/gryffindor.png',
        description: 'For the brave at heart. Courage, real-world problem solving, fundamentals.',
        projects: [
            { code: 'PR-GRY-01', title: 'Smart Attendance Lite', summary: 'Web-based attendance system using QR/manual entry.', keyPoints: ['Student & admin login', 'Daily attendance log', 'CSV export', 'Mobile-friendly UI'] },
            { code: 'PR-GRY-02', title: 'Campus Help Desk', summary: 'Platform to raise and track campus issues digitally.', keyPoints: ['Ticket creation & status', 'Admin dashboard', 'Email/notification alerts', 'Simple database'] },
            { code: 'PR-GRY-03', title: 'Digital Notice Board', summary: 'Replace physical notice boards with live updates.', keyPoints: ['Category-based notices', 'Admin posting panel', 'Auto-expiry notices', 'Responsive design'] },
            { code: 'PR-GRY-04', title: 'Event Registration Portal', summary: 'Online event registration with confirmation.', keyPoints: ['Form validation', 'Unique registration ID', 'Admin export', 'QR confirmation'] },
            { code: 'PR-GRY-05', title: 'Study Planner App', summary: 'Daily & weekly study planning tool.', keyPoints: ['Task scheduling', 'Reminder system', 'Progress tracking', 'Clean UI'] },
            { code: 'PR-GRY-06', title: 'Feedback Collection System', summary: 'Anonymous feedback system for events/classes.', keyPoints: ['Rating + comments', 'Admin analytics', 'Spam prevention', 'Secure storage'] }
        ]
    },
    {
        id: 'slytherin',
        name: 'Slytherin',
        motto: 'Intermediate Level',
        color: '#1A472A',
        accentColor: '#5D5D5D',
        icon: 'assets/images/slytherin.png',
        description: 'Cunning minds build empires. Strategy, automation, data handling.',
        projects: [
            { code: 'PR-SLY-01', title: 'Smart Expense Tracker', summary: 'Track and analyze personal/group expenses.', keyPoints: ['Monthly reports', 'Category charts', 'Login system', 'Data visualization'] },
            { code: 'PR-SLY-02', title: 'Resume Analyzer', summary: 'Tool to analyze resumes and suggest improvements.', keyPoints: ['Keyword analysis', 'Skill matching', 'PDF upload', 'Score-based output'] },
            { code: 'PR-SLY-03', title: 'Chatbot for FAQs', summary: 'AI-based chatbot for college/common FAQs.', keyPoints: ['Pre-trained responses', 'Admin training panel', 'Web integration', 'Fast response'] },
            { code: 'PR-SLY-04', title: 'Smart Parking System', summary: 'Parking slot availability tracker.', keyPoints: ['Slot status dashboard', 'Admin controls', 'Mobile-first UI', 'Real-time updates'] },
            { code: 'PR-SLY-05', title: 'Online Voting System', summary: 'Secure voting platform for clubs/events.', keyPoints: ['Authentication', 'One vote per user', 'Result analytics', 'Audit logs'] },
            { code: 'PR-SLY-06', title: 'File Management Portal', summary: 'Centralized academic file storage.', keyPoints: ['Upload/download', 'Role-based access', 'File categories', 'Secure storage'] }
        ]
    },
    {
        id: 'ravenclaw',
        name: 'Ravenclaw',
        motto: 'Advanced Level',
        color: '#0E1A40',
        accentColor: '#946B2D',
        icon: 'assets/images/ravenclaw.png',
        description: 'Where wit and wisdom unite. Intelligence, AI, advanced analytics.',
        projects: [
            { code: 'PR-RAV-01', title: 'AI Study Assistant', summary: 'AI-powered doubt-solving assistant.', keyPoints: ['NLP-based answers', 'Topic suggestions', 'Chat interface', 'Learning history'] },
            { code: 'PR-RAV-02', title: 'Predictive Attendance Analyzer', summary: 'Predict attendance trends using past data.', keyPoints: ['Data preprocessing', 'Graphs & insights', 'ML model', 'Exportable reports'] },
            { code: 'PR-RAV-03', title: 'Smart Recommendation System', summary: 'Recommends courses/resources based on interests.', keyPoints: ['User profiling', 'Recommendation logic', 'Feedback loop', 'Scalable design'] },
            { code: 'PR-RAV-04', title: 'Fake News Detector', summary: 'Detect misleading news articles.', keyPoints: ['Text classification', 'Confidence score', 'URL analysis', 'Clean UI'] },
            { code: 'PR-RAV-05', title: 'Voice-Controlled App', summary: 'App controlled using voice commands.', keyPoints: ['Speech recognition', 'Command mapping', 'Accessibility focus', 'Error handling'] },
            { code: 'PR-RAV-06', title: 'Smart Exam Proctoring', summary: 'Online exam monitoring system.', keyPoints: ['Face detection', 'Tab-switch detection', 'Report generation', 'Privacy safeguards'] }
        ]
    },
    {
        id: 'hufflepuff',
        name: 'Hufflepuff',
        motto: 'Practical & Social Impact',
        color: '#FFD700',
        accentColor: '#000000',
        icon: 'assets/images/hufflepuff.png',
        description: 'Loyalty, hard work, and fair play. Collaboration, usability, inclusivity.',
        projects: [
            { code: 'PR-HUF-01', title: 'Blood Donor Connect', summary: 'Connect donors with patients quickly.', keyPoints: ['Location-based search', 'Emergency alerts', 'Contact verification', 'Simple UX'] },
            { code: 'PR-HUF-02', title: 'Community Volunteering App', summary: 'Platform for volunteering opportunities.', keyPoints: ['Event listing', 'Registration', 'Volunteer hours tracking', 'Admin approval'] },
            { code: 'PR-HUF-03', title: 'Local Business Support App', summary: 'Promote small/local businesses digitally.', keyPoints: ['Business profiles', 'Reviews & ratings', 'Search filters', 'Mobile-first'] },
            { code: 'PR-HUF-04', title: 'Waste Management Tracker', summary: 'Track and optimize waste collection.', keyPoints: ['Area-wise tracking', 'Reports', 'Admin dashboard', 'Awareness alerts'] },
            { code: 'PR-HUF-05', title: 'Health Reminder System', summary: 'Daily health & medicine reminders.', keyPoints: ['Timed notifications', 'Custom schedules', 'Elder-friendly UI', 'Offline support'] },
            { code: 'PR-HUF-06', title: 'Accessibility Helper App', summary: 'Tools for differently-abled users.', keyPoints: ['Voice navigation', 'High-contrast mode', 'Simple controls', 'Inclusive design'] }
        ]
    },
    {
        id: 'openinnovation',
        name: 'Open Innovation House',
        motto: 'Wild Ideas & Open Innovation',
        color: '#4B0082',
        accentColor: '#FFD700',
        icon: 'assets/images/merlinthor.png',
        description: 'For visionaries and pioneers. Any domain, research, startups - create beyond boundaries.',
        projects: [
            { code: 'PR-OPEN-01', title: 'Smart City Mini Solution', summary: 'Any tech improving city life.', keyPoints: ['Real-world problem', 'Scalable idea', 'Tech justification', 'Demo prototype'] },
            { code: 'PR-OPEN-02', title: 'Green Tech Innovation', summary: 'Technology for sustainability.', keyPoints: ['Environmental impact', 'Cost efficiency', 'Innovation factor', 'Measurable outcomes'] },
            { code: 'PR-OPEN-03', title: 'EdTech Innovation', summary: 'New way to improve learning.', keyPoints: ['Learning gap identified', 'Interactive design', 'Accessibility', 'Assessment metrics'] },
            { code: 'PR-OPEN-04', title: 'FinTech Idea', summary: 'Digital finance or security solution.', keyPoints: ['Security focus', 'User trust', 'Compliance-ready', 'Clear use case'] },
            { code: 'PR-OPEN-05', title: 'HealthTech Concept', summary: 'Tech for healthcare improvement.', keyPoints: ['Problem relevance', 'Data privacy', 'User safety', 'Prototype/demo'] },
            { code: 'PR-OPEN-06', title: 'Student Startup Idea', summary: 'Any startup-ready idea.', keyPoints: ['Market need', 'Revenue model', 'Innovation', 'Pitch readiness'] }
        ]
    }
];

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { housesData };
}
