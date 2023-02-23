import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import books from './books.md';
import post3 from './blog-post.3.md';

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Health', url: '#'},
  { title: 'Curling', url: '#'},
  { title: 'DevOps', url: '#'},
  { title: "Home Automation", url: '#'}
];

const mainFeaturedPost = {
  title: 'Are you preparing to live forever? Should you?',
  description:
    "Advancements in technology are so rapid the future is as unknown as it has every been.  Start living a life that will prepare you for rapid change.",
  image: 'https://source.unsplash.com/random',
  imageText: 'Technology pic',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Curling',
    description:
      `"Curling is a game of skill and of traditions. A shot well executed is a delight to see and so, too, it is a fine thing to observe the time-honoured traditions of curling being applied in the true spirit of the game. Curlers play to win but never to humble their opponents. A true curler would prefer to lose rather than win unfairly." ~ The World Curling Federation rulebook`,
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Curling',
  },
  {
    title: 'DevOps',
    description:
      `DevOps is a lifestyle.  Continous is the key word.  Continous integration, continous delivery, continous monitoring are all buzz phrases in the industry.  I live with a DevOps mind set, continous learning, continous improvment, continous advancement.  
      It is about the process, not the product.  It is about the knowledge, not the test.  Learing daily, imporving daily, and being happy on the journey are the...`,
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];

const posts = [post3, post1];

const sidebar = {
  title: 'About Me',
  description:
    `I am a dreamer that cares about building a better future. 
    Strong self-learner that thrives on solving problems.  
    I am an enterinal optimist and will leave the world better off then when I got here.  
    A builder that creates meaningful products. 
    A communicator that focuses education and sharing ideas`,
  archives: [
    
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon, href: "https://github.com/mweiss427" },
    { name: 'Twitter', icon: TwitterIcon, href: "https://twitter.com/Matt_E_Weiss" },
    { name: 'Facebook', icon: FacebookIcon, href: "https://www.facebook.com/Weiss.Matthew" },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Matthew E Weiss" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Thank you"
        description="I hope you found value in my site.  Thank you for your time."
      />
    </ThemeProvider>
  );
}
