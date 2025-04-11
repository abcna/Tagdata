import React from 'react';
import ContactForm from '../components/ContactForm'; // Import ContactForm

const Template2 = ({ userData }) => {
  return (
    <div className="business-card">
      <div className="card-header">
        <h1>{userData.basicInfo.fullName}</h1>
        <h3>{userData.basicInfo.jobTitle}</h3>
      </div>
      <div className="card-body">
        <p>{userData.basicInfo.shortDescription}</p>
        <div className="contact-details">
          <p>Email: {userData.contactInfo.email}</p>
          <p>Phone: {userData.contactInfo.mobilePhone}</p>
          <p>Website: <a href={userData.contactInfo.website} target="_blank" rel="noopener noreferrer">{userData.contactInfo.website}</a></p>
          <p>Address: {userData.contactInfo.address}</p>
        </div>
        <div className="social-links">
          <a href={userData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={userData.socialLinks.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href={userData.socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={userData.socialLinks.telegram} target="_blank" rel="noopener noreferrer">Telegram</a>
        </div>
        <ContactForm onSubmit={(data) => console.log('Form submitted:', data)} /> {/* Add ContactForm */}
      </div>
      <div className="card-footer">
        <p>Bank Card Number: {userData.bankInfo.cardNumber}</p>
        <p>Sheba: {userData.bankInfo.sheba}</p>
      </div>
    </div>
  );
};

export default Template2;