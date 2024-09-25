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
            <li> - Foundational Terminology and Concepts</li>
            <li> - Why and What is DevOps?</li>
            <li> - DevOps Dimensions</li>
            <li> - Source Code Management</li>
			<li> - Continuous build and code quality</li>
			<li> - Continuous Integration and Continuous Delivery</li>
			<li> - Continuous Deployment</li>
			<li> - Continuous Monitoring</li>
			<li> - Configuration Management</li>
			<li> - Virtualization and Containerization</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DevOpsApp;
