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
  Avatar,
} from "@mui/material";
import {
  LightMode,
  DarkMode,
  Download,
  PhoneAndroid,
} from "@mui/icons-material";
import "./App.css";
import Card from "./Card";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const projectPitchUrl = "https://www.youtube.com/embed/SPgVi5D-Sog";
  const showAndTellOneUrl = "https://www.youtube.com/embed/bNPBW7WVzAg";
  const showAndTellTwoUrl = "https://www.youtube.com/embed/680jwnZBujg";

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
          <Avatar style={{ padding: "3px" }}>
            <img
              src="app-icon.png"
              alt="App Icon"
              style={{ width: "100%", height: "100%" }}
            />
          </Avatar>
          <h1 style={{ paddingLeft: "15px" }} className="text">
            CMPT 362 - Group 23
          </h1>
          <div style={{ flexGrow: 1 }} />

          <a
            href="PlantCare.apk"
            download
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <IconButton color="inherit" style={{ color: "inherit" }}>
              <PhoneAndroid />
            </IconButton>
          </a>

          <a
            href="PlantCare.zip"
            download
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <IconButton color="inherit" style={{ color: "inherit" }}>
              <Download />
            </IconButton>
          </a>

          <IconButton color="inherit" onClick={toggleDarkMode}>
            {darkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: "20px" }}>
        <h2 className="text">PlantCare</h2>
      </Container>

      {/* PlantCare Overview */}
      <Container style={{ marginTop: "20px" }}>
        <Card>
          <CardContent>
            <h3 className="text-in-card">
              🌿 Welcome to PlantCare! Where Your Plants Thrive with Ease. At
              PlantCare, we're here to make plant care simple, enjoyable, and
              personalized. Our app helps you add, monitor, and nurture your
              plants effortlessly. From personalized reminders to a rich plant
              database, we've got you covered.
            </h3>
          </CardContent>
        </Card>
      </Container>

      {/* Mission */}
      <Container style={{ marginTop: "20px" }}>
        <h2 className="text">🌱 Mission:</h2>
      </Container>
      <Container style={{ marginTop: "20px" }}>
        <Card>
          <CardContent>
            <h3 className="text-in-card">
              We're on a mission to bring joy to plant care. With user-friendly
              technology, we want to make it easy for everyone to connect with
              their plants, turning it into a delightful experience.
            </h3>
          </CardContent>
        </Card>
      </Container>

      {/* What Sets Us Apart */}
      <Container style={{ marginTop: "20px" }}>
        <h2 className="text">✨ What Sets Us Apart:</h2>
      </Container>
      <Container style={{ marginTop: "20px" }}>
        <Card>
          <CardContent>
            <h3 className="text-in-card">
              Personalized Plant Care: Add your plants and receive tailored
              reminders based on their unique needs. Explore our Plant Database:
              Get insights into diverse plant species, whether you're a newbie
              or a seasoned plant parent. Intuitive Calendar: Stay organized
              with our calendar, keeping track of watering tasks.
            </h3>
          </CardContent>
        </Card>
      </Container>

      {/* Why PlantCare */}
      <Container style={{ marginTop: "20px" }}>
        <h2 className="text">🌍 Why PlantCare:</h2>
      </Container>
      <Container style={{ marginTop: "20px" }}>
        <Card>
          <CardContent>
            <h3 className="text-in-card">
              As living costs rise, more millennials are turning to plants for a
              fulfilling connection with nature. PlantCare welcomes you to a
              community where plant care is affordable, simple, and delightful.
              Join PlantCare today and let's cultivate happiness together! 🌿✨
            </h3>
          </CardContent>
        </Card>
      </Container>

      <Container style={{ marginTop: "20px" }}>
        <h2 className="text">Team Members 🤝:</h2>
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
                <h3 className="text-in-card">gba46@sfu.ca</h3>
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
                <h3 className="text-in-card">301416946</h3>
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
        </Grid>
      </Container>

      <Container style={{ marginTop: "20px" }}>
        <h2 className="text">Show & Tell 2:</h2>
      </Container>

      <Container style={{ marginTop: "20px" }}>
        <Card>
          <CardContent>
            {showAndTellTwoUrl && (
              <iframe
                width="100%"
                height="600"
                src={showAndTellTwoUrl}
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            )}
          </CardContent>
        </Card>
      </Container>

      <Container style={{ marginTop: "20px" }}>
        <h2 className="text">Show & Tell 1:</h2>
      </Container>

      <Container style={{ marginTop: "20px" }}>
        <Card>
          <CardContent>
            {showAndTellOneUrl && (
              <iframe
                width="100%"
                height="600"
                src={showAndTellOneUrl}
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            )}
          </CardContent>
        </Card>
      </Container>

      <Container style={{ marginTop: "20px" }}>
        <h2 className="text">Project Pitch:</h2>
      </Container>

      <Container style={{ marginTop: "20px" }}>
        <Card>
          <CardContent>
            {projectPitchUrl && (
              <iframe
                width="100%"
                height="600"
                src={projectPitchUrl}
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
