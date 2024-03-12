import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import "../styles/AboutStyles.css"; // Import the CSS file

const About = () => {
  return (
    <Layout>
      <Box className="about-container">
        <Typography variant="h4" className="about-title">
          Welcome To Corporate Cricket
        </Typography>
        <Typography className="about-content">
          Welcome to our corporate cricket portal! Our platform is designed to
          bring together employees from various companies to participate in
          exciting cricket tournaments. Here's what you can expect from our
          platform:
          <br />
          <br />
          <strong>Team Creation:</strong> Create your cricket team, recruit
          players from within your organization, and showcase your cricketing
          talent.
          <br />
          <strong>Tournament Posting:</strong> Organizers can post details
          about upcoming cricket tournaments, including date, venue, format,
          and entry fee.
          <br />
          <strong>Participation:</strong> Register your team to participate in
          tournaments, subject to eligibility criteria and entry fees.
          <br />
          <strong>Match Planning:</strong> Tournament organizers can plan
          matches, schedule fixtures, and communicate match schedules to
          participating teams.
          <br />
          <strong>Results Announcement:</strong> Results of each match are
          recorded and announced promptly, highlighting the winning team and
          outstanding performances.
          <br />
          <strong>Fair Play:</strong> Our platform promotes fair play and
          sportsmanship, ensuring that all participants adhere to the rules and
          regulations of the tournament.
          <br />
          <br />
          Join us today and experience the thrill of cricketing action at our
          corporate cricket portal!
        </Typography>
      </Box>
    </Layout>
  );
};

export default About;
