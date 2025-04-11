import React, { useState } from 'react';
import './App.css';
import BusinessCardForm from './components/BusinessCardForm';
import TemplateManager from './templates/TemplateManager'; // Import TemplateManager
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Ensure Router is imported
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Import Menu icon
import BusinessCardDisplay from './components/BusinessCardDisplay';
import CustomerInfo from './components/CustomerInfo';

const theme = createTheme({
  direction: 'rtl',
});

function App() {
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false); // State for drawer
  const [contactData, setContactData] = useState([]); // State for contact form data as an array

  const handleFormSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2)); // Log form data as a string
    setFormData(data);
    setShowForm(false); // Switch to output view after form submission
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleContactFormSubmit = (data) => {
    console.log('Contact form submitted:', data);
    setContactData((prevData) => [...prevData, data]); // Append new contact data
  };

  return (
    <ThemeProvider theme={theme}>
      <Router> {/* Ensure Router wraps the entire component */}
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="dashboard-title">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}> {/* Change anchor to "right" */}
          <List>
            <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
              <ListItemText primary="Form" />
            </ListItem>
            <ListItem button component={Link} to="/business-card" onClick={toggleDrawer(false)}>
              <ListItemText primary="Business Card" />
            </ListItem>
            <ListItem button component={Link} to="/customer-info" onClick={toggleDrawer(false)}>
              <ListItemText primary="Customer Info" />
            </ListItem>
          </List>
        </Drawer>
        <Container className="main-container"> {/* Use CSS class for styling */}
          <Routes> {/* Use Routes instead of Switch for React Router v6 */}
            <Route path="/" element={<BusinessCardForm onSubmit={handleFormSubmit} />} />
            <Route path="/business-card" element={<BusinessCardDisplay formData={formData} />} /> {/* Pass formData */}
            <Route path="/customer-info" element={<CustomerInfo contactData={contactData} />} /> {/* Pass contactData */}
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
