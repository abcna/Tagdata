import React from 'react';
import Template1 from './Template1';
import Template2 from './Template2';

const TemplateManager = ({ userData }) => {
  switch (userData.cardSettings.template) {
    case 'template1':
      return <Template1 userData={userData} />;
    case 'template2':
      return <Template2 userData={userData} />;
    default:
      return <div>Please select a template.</div>;
  }
};

export default TemplateManager;