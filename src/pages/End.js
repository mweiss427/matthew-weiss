
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Footer from '../components/blog/Footer';


function End(){

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              The End
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              TODO date
            </Typography>
            <Typography variant="subtitle1" paragraph>
              You've reached the end of my website.  You've read it all.
            </Typography>
            <Link
              href="https://google.com"
              key="google"
            >
              <Stack>
                <span>To Google</span>
              </Stack>
            </Link>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image='https://source.unsplash.com/random'
            alt='Thank you pic'
          />
        </Card>
      </CardActionArea>
      <Footer
        title="Thank you"
        description="I hope you found value in my site.  Thank you for your time."
      />
    </Grid>
    );
  }

export default End;