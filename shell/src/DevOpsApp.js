import React, { useState } from 'react';
import './DevOpsApp.css';  // Import CSS for styling

const DevOpsApp = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="syllabus-container">
      <h2 onClick={toggleCollapse} className="syllabus-header">
        DevOps Syllabus {isCollapsed ? '+' : '-'}
      </h2>
      {!isCollapsed && (
        <div className="syllabus-content">
          <p>DevOps course content includes...</p>
          <ul>
            <li>CI/CD Pipelines</li>
            <li>Containerization with Docker</li>
            <li>Kubernetes</li>
            <li>Monitoring and Logging</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DevOpsApp;
