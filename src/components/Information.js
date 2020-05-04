import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function Info() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="info">
        
      <Typography variant="h4" gutterBottom>
        Current state v1.0.0
      </Typography>
      <Typography variant="body1" gutterBottom>
        - I've created this little PWA ( Progressive Web Application ) that retrieves data from <a id="api" href={'https://rickandmortyapi.com/'}>https://rickandmortyapi.com/ </a>
         which main purpose is to show main characters and episodes of the tv show Rick and Morty.
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        using this technologies:
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
          <ul>
              <ol><em>1. CREATE-REACT-APP</em></ol>
              <ol><em>2. RICK AND MORTY'S API</em></ol>
              <ol><em>3. MATERIAL-UI</em></ol>
              <ol><em>4. K.I.S.S PATTERN</em></ol>
              <ol><em>5. COMPONENTS</em></ol>
              <ol><em>6. REACT ROUTER</em></ol>
              <ol><em>7. REACT DEV TOOLS</em></ol>
          </ul>

      </Typography>
      <br />
      <Typography variant="h4" gutterBottom>
        Next update v1.0.1
      </Typography>

      <br />

      <Typography variant="h6" gutterBottom>
        upcoming features
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
          <ul>
            <ol>
              <em>1. STANDARD JS</em></ol>
            <ol><em>2. REDUX</em></ol>
          </ul>
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        notes:
      </Typography>
      <Typography variant="body1" gutterBottom>
        - In the next update I'll include Standard JS  module, that'll allow me to enforce code quality and automatically
         format all the code as well as catch style issues & programmer errors early; the reason I didn't implement it in 
         this version was because it threw me a bunch of errors, that I didn't know how to fix them, so firstly I'll learn
          to use Standard JS before using it.
      </Typography>
      <br />
      <Typography variant="body1" gutterBottom>
        - Also I had planned adding Redux to my app, but I didn't want to implement something that I dind't know perfectly
        because that could modify the current state and performance of my app, so I am completely decided learning Redux throughout
         my development experience and finally implement Redux in further React JS proyects.
      </Typography>

    </div>
  );
}
