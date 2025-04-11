import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import { TextField, Button, FormControl, Typography, Divider, Select, MenuItem } from '@mui/material';

function BusinessCardForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    basicInfo: {
      fullName: '',
      jobTitle: '',
      shortDescription: '',
      profileImage: null,
    },
    contactInfo: {
      mobilePhone: '',
      officePhone: '',
      email: '',
      website: '',
      address: '',
    },
    socialLinks: {
      instagram: '',
      telegram: '',
      linkedin: '',
      twitter: '',
      other: '',
    },
    bankInfo: { cardNumber: '', sheba: '' },
    additionalInfo: {
      gallery: [],
      video: '',
      additionalDescription: '',
      userInfoForm: '',
      customers: '',
    },
    cardSettings: { template: '', customColor: '', customFont: '' },
  });

  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate(); // Use useNavigate hook

  const handleInputChange = (e, section, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: { ...prevData[section], [field]: e.target.value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      navigate('/business-card'); // Use navigate instead of history.push
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      {showAlert && (
        <div className="alert --Paper-shadow-none">
          اطلاعات با موفقیت ذخیره شد.
        </div>
      )}
      <Typography variant="h6" style={{textAlign: 'right'}}>اطلاعات پایه</Typography>
      <FormControl fullWidth margin="normal">
        <TextField
          label="نام و نام خانوادگی"
          value={formData.basicInfo.fullName}
          onChange={(e) => handleInputChange(e, 'basicInfo', 'fullName')}
          InputProps={{style: {textAlign: 'right'}}}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="عنوان شغلی"
          value={formData.basicInfo.jobTitle}
          onChange={(e) => handleInputChange(e, 'basicInfo', 'jobTitle')}
          InputProps={{style: {textAlign: 'right'}}}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="توضیحات کوتاه"
          multiline
          minRows={3}
          value={formData.basicInfo.shortDescription}
          onChange={(e) => handleInputChange(e, 'basicInfo', 'shortDescription')}
          InputProps={{style: {textAlign: 'right'}}}
        />
      </FormControl>
      <Divider />

      <Typography variant="h6" style={{textAlign: 'right'}}>اطلاعات تماس</Typography>
      <FormControl fullWidth margin="normal">
        <TextField
          label="تلفن همراه"
          value={formData.contactInfo.mobilePhone}
          onChange={(e) => handleInputChange(e, 'contactInfo', 'mobilePhone')}
          InputProps={{style: {textAlign: 'right'}}}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="تلفن دفتر"
          value={formData.contactInfo.officePhone}
          onChange={(e) => handleInputChange(e, 'contactInfo', 'officePhone')}
          InputProps={{style: {textAlign: 'right'}}}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="ایمیل"
          value={formData.contactInfo.email}
          onChange={(e) => handleInputChange(e, 'contactInfo', 'email')}
          InputProps={{style: {textAlign: 'right'}}}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="وب‌سایت"
          value={formData.contactInfo.website}
          onChange={(e) => handleInputChange(e, 'contactInfo', 'website')}
          InputProps={{style: {textAlign: 'right'}}}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="آدرس"
          value={formData.contactInfo.address}
          onChange={(e) => handleInputChange(e, 'contactInfo', 'address')}
          InputProps={{style: {textAlign: 'right'}}}
        />
      </FormControl>
      <Divider />

      <Typography variant="h6" style={{textAlign: 'right'}}>لینک‌های اجتماعی</Typography>
      <FormControl fullWidth margin="normal">
        <TextField
          label="اینستاگرام"
          value={formData.socialLinks.instagram}
          onChange={(e) => handleInputChange(e, 'socialLinks', 'instagram')}
          InputProps={{style: {textAlign: 'right'}}}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="تلگرام"
          value={formData.socialLinks.telegram}
          onChange={(e) => handleInputChange(e, 'socialLinks', 'telegram')}
          InputProps={{style: {textAlign: 'right'}}}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="لینکدین"
          value={formData.socialLinks.linkedin}
          onChange={(e) => handleInputChange(e, 'socialLinks', 'linkedin')}
          InputProps={{style: {textAlign: 'right'}}}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="توییتر"
          value={formData.socialLinks.twitter}
          onChange={(e) => handleInputChange(e, 'socialLinks', 'twitter')}
          InputProps={{style: {textAlign: 'right'}}}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="سایر"
          value={formData.socialLinks.other}
          onChange={(e) => handleInputChange(e, 'socialLinks', 'other')}
          InputProps={{style: {textAlign: 'right'}}}
        />
      </FormControl>
      <Divider />

      <Typography variant="h6" style={{textAlign: 'right'}}>اطلاعات بانکی</Typography>
      <FormControl fullWidth margin="normal">
        <TextField
          label="شماره کارت"
          value={formData.bankInfo.cardNumber}
          onChange={(e) => handleInputChange(e, 'bankInfo', 'cardNumber')}
          InputProps={{style: {textAlign: 'right'}}}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="شبا"
          value={formData.bankInfo.sheba}
          onChange={(e) => handleInputChange(e, 'bankInfo', 'sheba')}
          InputProps={{style: {textAlign: 'right'}}}
        />
      </FormControl>
      <Divider />

      <Typography variant="h6" style={{textAlign: 'right'}}>اطلاعات اضافی</Typography>
      <FormControl fullWidth margin="normal">
        <TextField
          label="ویدیو"
          value={formData.additionalInfo.video}
          onChange={(e) => handleInputChange(e, 'additionalInfo', 'video')}
          InputProps={{style: {textAlign: 'right'}}}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="توضیحات اضافی"
          multiline
          minRows={3}
          value={formData.additionalInfo.additionalDescription}
          onChange={(e) => handleInputChange(e, 'additionalInfo', 'additionalDescription')}
          InputProps={{style: {textAlign: 'right'}}}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="فرم اطلاعات کاربر"
          value={formData.additionalInfo.userInfoForm}
          onChange={(e) => handleInputChange(e, 'additionalInfo', 'userInfoForm')}
          InputProps={{style: {textAlign: 'right'}}}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="مشتریان"
          value={formData.additionalInfo.customers}
          onChange={(e) => handleInputChange(e, 'additionalInfo', 'customers')}
          InputProps={{style: {textAlign: 'right'}}}
        />
      </FormControl>
      <Divider />

      <Typography variant="h6" style={{textAlign: 'right'}}>تنظیمات کارت</Typography>
      <FormControl fullWidth margin="normal">
        <Select
          label="قالب"
          value={formData.cardSettings.template}
          onChange={(e) => handleInputChange(e, 'cardSettings', 'template')}
          style={{textAlign: 'right'}}
        >
          <MenuItem value="template1">قالب ۱</MenuItem>
          <MenuItem value="template2">قالب ۲</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="رنگ سفارشی"
          value={formData.cardSettings.customColor}
          onChange={(e) => handleInputChange(e, 'cardSettings', 'customColor')}
          InputProps={{style: {textAlign: 'right'}}}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="فونت سفارشی"
          value={formData.cardSettings.customFont}
          onChange={(e) => handleInputChange(e, 'cardSettings', 'customFont')}
          InputProps={{style: {textAlign: 'right'}}}
        />
      </FormControl>

      <Button type="submit" variant="contained" color="primary" style={{marginTop: '20px'}}>
        ذخیره اطلاعات
      </Button>
    </form>
  );
}

export default BusinessCardForm;