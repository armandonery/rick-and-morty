import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function EpiCard ({ epi }) {   {/* getting data from epi param */}

  const classes = useStyles();

  return (
    <div className="Card">
      <br />

      <Card className={classes.root}>
        <CardActionArea>     
          <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>Episode:</strong> {epi.episode} <br />
            <strong>Name:</strong> {epi.name} <br />
            <strong>Date:</strong> {epi.air_date} <br />
          </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <br />
      <br />
      
    </div>
  )
}
