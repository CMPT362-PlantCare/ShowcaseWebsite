import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  createTheme,
  ThemeProvider,
  CardContent,
  CssBaseline,
  Container,
  Grid,
  Avatar
} from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import "./App.css";
import Card from "./Card";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const videoUrl = "https://www.youtube.com/embed/SPgVi5D-Sog";

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "#11321A" }}>
        <Avatar style={{ padding: '3px' }}>
          <img src="app-icon.png" alt="App Icon" style={{ width: '100%', height: '100%' }} />
        </Avatar>
          <h1 style={{ paddingLeft: '15px' }} className="text">
            CMPT 362 - Group 23
          </h1>
          <div style={{ flexGrow: 1 }} />
          <IconButton color="inherit" onClick={toggleDarkMode}>
            {darkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: "20px" }}>
        <h2 className="text">Project Statement:</h2>
      </Container>

      <Container style={{ marginTop: "20px" }}>
        <Card>
          <CardContent>
            <h3 className="text-in-card">
              Welcome to PlantCare - Our mobile app empowers users to add,
              monitor, and nurture their plants with personalized reminders,
              insightful watering history visualization, and a rich database
              offering information on diverse plant species. We hope to make caring for plants a delightful journey for everyone!
            </h3>
          </CardContent>
        </Card>
      </Container>

      <Container style={{ marginTop: "20px" }}>
        <h2 className="text">Team Members:</h2>
      </Container>

      <Container style={{ marginTop: "20px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <h3 className="text-in-card">Divya Soneji</h3>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <h3 className="text-in-card">301338933</h3>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <h3 className="text-in-card">dns8@sfu.ca</h3>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <h3 className="text-in-card">Sara Hwang</h3>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <h3 className="text-in-card">301296166</h3>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <h3 className="text-in-card">sha173@sfu.ca</h3>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <h3 className="text-in-card">Shiva Sanei</h3>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <h3 className="text-in-card">301317429</h3>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <h3 className="text-in-card">ssanei@sfu.ca</h3>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <h3 className="text-in-card">Gourav Bhardwaj</h3>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <h3 className="text-in-card">301540604</h3>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <h3 className="text-in-card">gba37@sfu.ca</h3>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <h3 className="text-in-card">Ekamdeep Kaur</h3>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <h3 className="text-in-card">eka61@sfu.ca</h3>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <h3 className="text-in-card">301416946</h3>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container style={{ marginTop: "20px" }}>
        <h2 className="text">Project Pitch:</h2>
      </Container>

      <Container style={{ marginTop: "20px" }}>
        <Card>
          <CardContent>
            {videoUrl && (
              <iframe
                width="100%"
                height="600"
                src={videoUrl}
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            )}
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

export default App;
