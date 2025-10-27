import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Users.css'

const Users = () => {
  const users = [
    { 
      id: 1, 
      name: 'Mukesh Ambani', 
      email: 'Mukesh@indianbusiness.co.in', 
      phone: '+1-555-0101',
      avatar: '👨‍💻',
      department: 'Engineering'
    },
    { 
      id: 2, 
      name: 'Gautam Adani', 
      email: 'Adani@indianbusiness.co.in', 
      phone: '+1-555-0102',
      avatar: '👨‍🎨',
      department: 'Design'
    },
    { 
      id: 3, 
      name: 'Shiv Nadar', 
      email: 'Shiv@indianbusiness.co.in', 
      phone: '+1-555-0103',
      avatar: '🗣️',
      department: 'Marketing'
    },
    { 
      id: 4, 
      name: 'Kumar Birla', 
      email: 'Birla@indianbusiness.co.in', 
      phone: '+1-555-0104',
      avatar: '👨‍🔧',
      department: 'Engineering'
    },
    { 
      id: 5, 
      name: 'Cyrus Poonawalla', 
      email: 'Cyrus@indianbusiness.co.in', 
      phone: '+1-555-0105',
      avatar: '🧑',
      department: 'Sales'
    }
    
  ]

  return (
    <div className="users-page">
      <div className="container">
        <div className="users-header text-center">
          <h1 className="users-title">Our Team Members</h1>
          <p className="users-subtitle">Meet the amazing people behind our success</p>
        </div>
        
        <div className="users-grid">
          {users.map(user => (
            <div key={user.id} className="user-card">
              <div className="user-avatar">
                {user.avatar}
              </div>
              <div className="user-info">
                <h3 className="user-name">{user.name}</h3>
                <p className="user-department">{user.department}</p>
                <p className="user-email">{user.email}</p>
                <p className="user-phone">{user.phone}</p>
              </div>
              <Link to={`/users/${user.id}`} className="btn user-link">
                View Profile →
              </Link>
            </div>
          ))}
        </div>
        
        <div className="users-footer text-center">
          <p>Showing {users.length} team members</p>
        </div>
      </div>
    </div>
  )
}

export default Users