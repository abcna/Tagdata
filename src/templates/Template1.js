import React from "react";
import "./Template1.css";
import ContactForm from '../components/ContactForm'; // Import ContactForm

const Template1 = ({ userData }) => {
  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/formdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      console.log('Form data submitted:', data);
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div className="card-container">
      <div className="header">
        <h2 className="title">{userData.basicInfo.fullName}</h2>
        <p className="subtitle">{userData.basicInfo.shortDescription}</p>
        <div className="follow-me">دنبال کنید</div>
      </div>

      <div className="image-container">
        {userData.basicInfo.profileImage && (
          <img
            src={URL.createObjectURL(userData.basicInfo.profileImage)}
            alt="تصویر پروفایل"
            className="profile-image"
          />
        )}
      </div>

      <div className="card-number">
        <p>کپی شماره کارت</p>
        <p>{userData.bankInfo.cardNumber}</p>
      </div>

      <div className="social-links">
        <a
          href={userData.socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          اینستاگرام
        </a>
        <a
          href={`https://wa.me/${userData.contactInfo.mobilePhone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          واتساپ
        </a>
        <a
          href={userData.socialLinks.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          تلگرام
        </a>
        <a
          href={userData.socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          اینستا
        </a>
      </div>

      <div className="actions">
        <button className="action-button">ذخیره در مخاطب</button>
        <button className="action-button">ذخیره من</button>
        <button className="action-button">تماس بگیرید</button>
        <button className="action-button">تماس بگیرید</button>
        <button onClick={handleSubmit}>ارسال فرم</button>
      </div>

      <div className="contact-info">
        <p>خط فروشگاه</p>
        <p>فقط در ساعات کاری</p>
        <p>خط همراه</p>
        <p>تلفن موبایل</p>
      </div>

      <div className="map-location">
        <p>آدرس ما روی نقشه</p>
      </div>

      <ContactForm onSubmit={(data) => console.log('Contact form submitted:', data)} /> {/* Add ContactForm */}
    </div>
  );
};

export default Template1;