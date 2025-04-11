import React from 'react';
import TemplateManager from '../templates/TemplateManager'; // Import TemplateManager

function BusinessCardDisplay({ formData }) {
  return (
    <div>
      <h2> your Business Card </h2>
      {formData ? (
        <TemplateManager userData={formData} /> // Use TemplateManager to display the template
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default BusinessCardDisplay;