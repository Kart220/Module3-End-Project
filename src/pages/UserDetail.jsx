import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import './styles/UserDetail.css'

const UserDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const users = [
        {
            id: 1,
            name: 'Mukesh Ambani',
            email: 'Mukesh@indianbusiness.co.in',
            phone: '+1-555-0101',
            department: 'Engineering',
            role: 'Senior Full Stack Developer',
            avatar: '👨‍💻',
            bio: 'Experienced developer with 8+ years in web technologies. Passionate about creating scalable applications.',
            skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
            joinDate: '2020-03-15'
        },
        {
            id: 2,
            name: 'Gautam Adani',
            email: 'Adani@indianbusiness.co.in',
            phone: '+1-555-0102',
            department: 'Design',
            role: 'UI/UX Design Lead',
            avatar: '👨‍🎨',
            bio: 'Creative designer focused on user-centered design principles and creating intuitive interfaces.',
            skills: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping'],
            joinDate: '2019-07-22'
        },
        {
            id: 3,
            name: 'Shiv Nadar',
            email: 'Shiv@indianbusiness.co.in',
            phone: '+1-555-0103',
            department: 'Marketing',
            role: 'Marketing Manager',
            avatar: '🗣️',
            bio: 'Data-driven marketer with expertise in digital campaigns and brand strategy.',
            skills: ['Digital Marketing', 'SEO', 'Analytics', 'Content Strategy'],
            joinDate: '2021-01-10'
        },
        {
            id: 4,
            name: 'Kumar Birla',
            email: 'Birla@indianbusiness.co.in',
            phone: '+1-555-0104',
            department: 'Engineering',
            role: 'Frontend Developer',
            avatar: '👨‍🔧',
            bio: 'Frontend specialist passionate about modern JavaScript frameworks and responsive design.',
            skills: ['React', 'Vue.js', 'CSS3', 'Jest'],
            joinDate: '2022-05-18'
        },
        {
            id: 5,
            name: 'Cyrus Poonawalla',
            email: 'Cyrus@indianbusiness.co.in',
            phone: '+1-555-0105',
            department: 'Sales',
            role: 'Sales Executive',
            avatar: '🧑',
            bio: 'Relationship-focused sales professional with track record of exceeding targets.',
            skills: ['CRM', 'Negotiation', 'Client Relations', 'Market Analysis'],
            joinDate: '2021-11-30'
        }
    ]

    const user = users.find(u => u.id === parseInt(id))

    if (!user) {
        return (
            <div className="user-detail-page">
                <div className="container">
                    <div className="error-card text-center">
                        <div className="error-icon">❌</div>
                        <h2>User Not Found</h2>
                        <p>Sorry, the user you're looking for doesn't exist in our system.</p>
                        <div className="error-actions">
                            <button onClick={() => navigate(-1)} className="btn btn-secondary">
                                Go Back
                            </button>
                            <Link to="/users" className="btn btn-primary">
                                Browse All Users
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="user-detail-page">
            <div className="container">
                <div className="user-profile">
                    <div className="profile-header">
                        <div className="profile-avatar">
                            {user.avatar}
                        </div>
                        <div className="profile-info">
                            <h1 className="profile-name">{user.name}</h1>
                            <p className="profile-role">{user.role}</p>
                            <p className="profile-department">{user.department} Department</p>
                        </div>
                    </div>

                    <div className="profile-content">
                        <div className="profile-section">
                            <h3>📖 About</h3>
                            <p className="profile-bio">{user.bio}</p>
                        </div>

                        <div className="profile-details">
                            <div className="detail-section">
                                <h4>Contact Information</h4>
                                <div className="detail-grid">
                                    <div className="detail-item">
                                        <strong>Email:</strong>
                                        <span>{user.email}</span>
                                    </div>
                                    <div className="detail-item">
                                        <strong>Phone:</strong>
                                        <span>{user.phone}</span>
                                    </div>
                                    <div className="detail-item">
                                        <strong>Join Date:</strong>
                                        <span>{new Date(user.joinDate).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="detail-section">
                                <h4>Skills & Expertise</h4>
                                <div className="skills-list">
                                    {user.skills.map((skill, index) => (
                                        <span key={index} className="skill-tag">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="profile-actions">
                        <button onClick={() => navigate(-1)} className="btn btn-secondary">
                            ← Go Back
                        </button>
                        <Link to="/users" className="btn btn-primary">
                            View All Team Members
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail