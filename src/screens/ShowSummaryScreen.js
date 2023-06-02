// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Container, Typography, Button } from '@material-ui/core';
// import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';
// import { useSpring, animated } from 'react-spring';

// const ShowSummaryScreen = () => {
//   const { showId } = useParams();
//   const [summary, setSummary] = useState('');

//   useEffect(() => {
//     fetch(`https://api.tvmaze.com/shows/${showId}`)
//       .then((response) => response.json())
//       .then((data) => setSummary(data.summary));
//   }, [showId]);

//   const fadeAnimation = useSpring({
//     from: { opacity: 0 },
//     to: { opacity: 1 },
//     config: { duration: 500 }
//   });

//   return (
//     <Container maxWidth="md" style={{ marginTop: '2rem' }}>
//       <animated.div style={fadeAnimation}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           SUMMARY
//         </Typography>
//         <Typography variant="body1" component="p" dangerouslySetInnerHTML={{ __html: summary }}></Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           startIcon={<ArrowBackIcon />}
//           style={{ marginTop: '2rem' }}
//           onClick={() => window.history.back()}
//         >
//           Back
//         </Button>
//       </animated.div>
//     </Container>
//   );
// };

// export default ShowSummaryScreen;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button, Card, CardContent } from '@material-ui/core';
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';
import { useSpring, animated } from 'react-spring';
import { Navbar, Nav } from 'react-bootstrap';
import './ShowListScreen.css';

const ShowSummaryScreen = () => {
  const { showId } = useParams();
  const [summary, setSummary] = useState('');

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then((response) => response.json())
      .then((data) => setSummary(data.summary));
  }, [showId]);

  const fadeAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 }
  });

  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar container-fluid">
        <Navbar.Brand className="navbar-brand">Summary</Navbar.Brand>
      </Navbar>
    <Container maxWidth="md" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <animated.div style={fadeAnimation}>
        <Card style={{ width: '100%', marginBottom: '2rem' }}>
          <CardContent>
            <Typography variant="body1" component="p" dangerouslySetInnerHTML={{ __html: summary }}></Typography>
          </CardContent>
        </Card>
        <Button
         variant="contained"
         color="primary"
         startIcon={<ArrowBackIcon />}
         style={{ backgroundColor: '#222222', color: '#ffffff', marginTop: '2rem' }}
         onClick={() => window.history.back()}
>
          Back
        </Button>
      </animated.div>
      <footer style={{ marginTop: '2rem', textAlign: 'center', color: 'gray' }}>
        <Typography variant="body2" color="textSecondary">
          Made by Chinmay Agarwal
        </Typography>
      </footer>
    </Container>
    </>
  );
};

export default ShowSummaryScreen;
