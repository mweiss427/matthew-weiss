import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Sidebar from './Sidebar'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://matthew-weiss.com/">
         matthew-weiss.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const sidebar = {
  title: 'About Me',
  description:
    `I am a dreamer that cares about building a better future. 
    Strong self-learner that thrives on solving problems.  
    I am an enterinal optimist and will make the world a better place.  
    A builder that creates meaningful products. 
    A communicator that focuses on education and sharing ideas`,
  archives: [
    
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon, href: "https://github.com/mweiss427" },
    { name: 'Twitter', icon: TwitterIcon, href: "https://twitter.com/Matt_E_Weiss" },
    { name: 'Facebook', icon: FacebookIcon, href: "https://www.facebook.com/Weiss.Matthew" },
  ],
};

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            social={sidebar.social}
          />
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
