import { Mail, Phone, MapPin, Github, Linkedin, BookOpen } from 'lucide-react';

const Home = () => {
  const skills = [
    'PyTorch', 'Scikit-learn', 'OpenCV', 'TensorFlow', 'SHAP', 'LIME',
    'Python', 'Java', 'SQL',
    'Git', 'Pandas', 'NumPy', 'Matplotlib'
  ];

  const interests = [
    'Computer Vision', 'Natural Language Processing', 
    'Reinforcement Learning', 'Explainable AI (XAI)'
  ];

  return (
    <>
      <h1 className="heading-xl brand-font">Prithviraj<br/>Patil</h1>
      
      <div className="bento-grid">
        {/* Hero / About Section */}
        <div className="bento-item col-span-8 hero-card">
          <h2 className="hero-subtitle">ABOUT ME</h2>
          <h3 className="hero-title brand-font">AI & ML Enthusiast</h3>
          <p className="hero-desc">
            B.Tech in Artificial Intelligence student at Mahindra University (GPA: 8.80). 
            Passionate about deep learning, AI research, and building practical machine learning models. 
            Actively spearheading the Computer Vision Club and organizing practical technical workshops.
          </p>
        </div>

        {/* Profile Picture */}
        <div className="bento-item col-span-4 profile-card">
          <div className="profile-img-container">
            {/* Using a placeholder since we don't have the actual photo. In production, an img tag goes here. */}
            <span className="profile-placeholder">👨🏻‍💻</span>
          </div>
          <div>
            <h3 className="card-title" style={{justifyContent: 'center', margin: '16px 0 4px'}}>Prithviraj Patil</h3>
            <p style={{color: 'var(--text-secondary)'}}>AI Engineer</p>
          </div>
        </div>

        {/* Personal Details */}
        <div className="bento-item col-span-4">
          <h3 className="card-title">Personal Details</h3>
          <div style={{ marginTop: '24px' }}>
            <a href="mailto:prithvisp28@gmail.com" className="contact-item">
              <Mail size={18} />
              <span>prithvisp28@gmail.com</span>
            </a>
            <div className="contact-item">
              <Mail size={18} />
              <span>college.email@mahindrauniv.edu</span>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <span>+91 XXXX XXXXXX</span>
            </div>
            <a href="https://github.com/prithvi-kaizen" target="_blank" rel="noreferrer" className="contact-item">
              <Github size={18} />
              <span>github.com/prithvi-kaizen</span>
            </a>
            <a href="https://linkedin.com/in/prithviraj6544" target="_blank" rel="noreferrer" className="contact-item">
              <Linkedin size={18} />
              <span>linkedin.com/in/prithviraj6544</span>
            </a>
          </div>
        </div>

        {/* Research Interests */}
        <div className="bento-item col-span-4">
           <h3 className="card-title">
             <BookOpen size={24} color="var(--accent)" />
             Research Interests
           </h3>
           <ul style={{ listStylePosition: 'inside', color: 'var(--text-secondary)', marginTop: '24px', lineHeight: '2' }}>
             {interests.map((interest, idx) => (
                <li key={idx}>{interest}</li>
             ))}
           </ul>
        </div>

        {/* Skills */}
        <div className="bento-item col-span-4">
          <h3 className="card-title">Technical Skills</h3>
          <div className="skills-list" style={{ marginTop: '24px' }}>
             {skills.map((skill, idx) => (
               <span key={idx} className="skill-tag">{skill}</span>
             ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
