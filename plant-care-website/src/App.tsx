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
  const finalDemoUrl = "https://www.youtube.com/embed/hkxtRC4eYqM";

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
        <h2 className="text">Final Demo:</h2>
      </Container>

      <Container style={{ marginTop: "20px" }}>
        <Card>
          <CardContent>
            {finalDemoUrl && (
              <iframe
                width="100%"
                height="600"
                src={finalDemoUrl}
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            )}
          </CardContent>
        </Card>
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

      {/* Contributions */}
      <Container style={{ marginTop: "20px" }}>
        <h2 className="text">Contributions 🌟:</h2>
      </Container>
      <Container style={{ marginTop: "20px" }}>
        <h3 className="text">Divya:</h3>
      </Container>
      <Container style={{ marginTop: "20px" }}>
        <Card>
          <CardContent>
            <h3 className="text-in-card">
              Created the "Login" and "Signup" pages, implementing login/signup
              functionality with Firebase Authentication. Initially established
              a Room Database, which was later discarded due to unreliable
              storage. Subsequently, persisted user data by configuring Firebase
              Realtime Database. Designed a JSON schema for storing user and
              plant information on Firebase Realtime Database. Implemented logic
              for saving, updating, and deleting plants within the "Add Plant"
              and "Edit Plant" pages. Enhanced data integrity by ensuring
              robustness in handling input during screen orientation changes.
              Configured Firebase Storage to store plant images in the cloud.
              Optimized storage on the file system by implementing logic to
              create local copies of images and managing cleanup for deleted and
              cancelled copies. Created the project website.
            </h3>
          </CardContent>
        </Card>
      </Container>

      <Container style={{ marginTop: "20px" }}>
        <h3 className="text">Sara:</h3>
      </Container>
      <Container style={{ marginTop: "20px" }}>
        <Card>
          <CardContent>
            <h3 className="text-in-card">
              Created the “Add plant” page. Set up the API calls to get plant
              species via the autocomplete text field in the “Add plant” page,
              and get care guides, suggested watering frequency, and default
              plant picture by plant species ID. Created the “Plant info” page
              and populate it with information from the API. Helped to create
              the thread diagram.
            </h3>
          </CardContent>
        </Card>
      </Container>

      <Container style={{ marginTop: "20px" }}>
        <h3 className="text">Shiva:</h3>
      </Container>
      <Container style={{ marginTop: "20px" }}>
        <Card>
          <CardContent>
            <h3 className="text-in-card">
              Created the dashboard page Created the bottom navigation bar for
              the main activities of the app. Secured API Key by storing them in
              local properties and accessing it through BuildConfig. Implemented
              the AlarmManager to schedule daily reminders for plant watering.
              Utilized a BroadcastReceiver to handle these alarms and trigger
              the display notification for plants that require watering. Helped
              to create the thread diagram. Edited all project demos.
            </h3>
          </CardContent>
        </Card>
      </Container>

      <Container style={{ marginTop: "20px" }}>
        <h3 className="text">Gourav:</h3>
      </Container>
      <Container style={{ marginTop: "20px" }}>
        <Card>
          <CardContent>
            <h3 className="text-in-card">
              Created the MVVM diagram to help structure different components
              and make the code modular, ensuring scalability and
              maintainability. Implemented Schedule Activity to display watering
              events with the functionality to mark them as done. Modified
              firebase database to store watering events and firebase key for
              each plant adopted by user Helped to create the thread diagram.
            </h3>
          </CardContent>
        </Card>
      </Container>

      <Container style={{ marginTop: "20px" }}>
        <h3 className="text">Ekamdeep:</h3>
      </Container>
      <Container style={{ marginTop: "20px" }}>
        <Card>
          <CardContent>
            <h3 className="text-in-card">
              Created the UI and functionality of Splash screen with our app’s
              logo which is shown while the app starts.
            </h3>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

export default App;
