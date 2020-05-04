import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
});

export default function CharCard ({ char }) {   {/* getting data from char param */}

const classes = useStyles();

return (
    
    <div className="Card">
      
      <br />
      <br />

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia 
            className={classes.media}
            image={char.image}
          />        
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {char.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            I'm {char.status} <br />
            I'm {char.species} <br />
            My gender is {char.gender} <br />
          </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <br />
      <br />

    </div>

  )
}
