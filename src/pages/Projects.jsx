import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'RAG-based AI Teaching Assistant',
      date: 'Dec 2025',
      desc: 'Engineered a video-to-text pipeline using Whisper to generate transcripts. Implemented RAG via embeddings of video chunks, building a context-aware chat interface for lectures.',
      repoUrl: 'https://github.com/prithvi-kaizen/ai-teaching-assistant',
      tech: ['Whisper', 'LangChain', 'Vector DB']
    },
    {
      title: 'Local LLM Fine-Tuning & Optimization',
      date: 'Nov 2025',
      desc: 'Fine-tuned a Llama-3 8B model locally on Apple Silicon using the MLX framework with LoRA. Optimized inference latency by 40% through 4-bit quantization.',
      repoUrl: 'https://github.com/prithvi-kaizen/llm-fine-tuning',
      tech: ['PyTorch', 'MLX', 'Llama-3']
    },
    {
      title: 'Fuzzy Clustering Validity Research',
      date: 'Jun 2025',
      desc: 'Implemented the Fukuyama and Sugeno Index (FSI) to evaluate fuzzy clustering quality. Benchmarked a novel validity index against standard hyperspherical cluster metrics.',
      repoUrl: 'https://github.com/prithvi-kaizen/fuzzy-clustering',
      tech: ['Python', 'NumPy', 'Fuzzy Logic']
    },
    {
      title: 'Energy Consumption Forecasting',
      date: 'Oct 2025',
      desc: 'Developed a predictive time-series model. Implemented extensive Feature Engineering (lag/rolling stats) to capture seasonality trends with a high R-Squared value.',
      repoUrl: 'https://github.com/prithvi-kaizen/energy-forecasting',
      tech: ['Python', 'Scikit-learn', 'Pandas']
    }
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <h2 className="heading-xl brand-font projects-header">Featured Work</h2>
      <div className="bento-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="bento-item col-span-6">
            <div className="project-card">
              <h3 className="project-title brand-font">{project.title}</h3>
              <span className="project-date">{project.date}</span>
              
              <div className="skills-list" style={{ marginBottom: '16px' }}>
                {project.tech.map((t, i) => (
                  <span key={i} className="skill-tag" style={{ background: '#f3f4f6', color: '#374151' }}>{t}</span>
                ))}
              </div>

              <p className="project-desc">{project.desc}</p>
              
              <div style={{ marginTop: 'auto', display: 'flex', gap: '16px' }}>
                <a href={project.repoUrl} target="_blank" rel="noreferrer" className="project-link">
                  <Github size={20} />
                  <span>Repository</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
