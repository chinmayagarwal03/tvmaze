import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTrail, animated } from 'react-spring';
import { Container, Card, CardContent, Typography } from '@material-ui/core';
import { LocalMovies as LocalMoviesIcon, Email, Phone, GitHub } from '@material-ui/icons';
import { Navbar, Nav } from 'react-bootstrap';
import './ShowListScreen.css';

const ShowListScreen = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  const trail = useTrail(shows.length, {
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { mass: 1, tension: 200, friction: 20 }
  });

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar container-fluid">
        <Navbar.Brand className="navbar-brand">TV Shows</Navbar.Brand>
      </Navbar>
      <Container maxWidth="md" className="card-container">
        <div className="card-grid">
          {trail.map((animation, index) => (
            <animated.div style={animation} key={shows[index].show.id}>
              <Card className="show-card">
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {shows[index].show.name}
                  </Typography>
                  <Link to={`/show/${shows[index].show.id}`} className="show-link">
                    <LocalMoviesIcon className="movie-icon" />
                    <Typography variant="body2" color="textSecondary" component="p">
                      View Details
                    </Typography>
                  </Link>
                </CardContent>
              </Card>
            </animated.div>
          ))}
        </div>
      </Container>
      <footer className="footer">
      <div>
      <a href="tel:8954502462" className="footer-link">
          <Phone className="footer-icon" />
        </a>
        <a href="mailto:chinmayagarwal4@gmail.com" className="footer-link">
          <Email className="footer-icon" />
        </a>
        <a href="https://github.com/chinmayagarwal03" className="footer-link">
          <GitHub className="footer-icon" />
        </a>
      </div>
       
        <div className="watermark">Made by Chinmay Agarwal</div>
      </footer>
    </>
  );
};

export default ShowListScreen;
