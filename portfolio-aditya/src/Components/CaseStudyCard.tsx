import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';


// /* Tag */

/* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: flex-start;
// padding: 0px 10px;
// gap: 10px;

// position: absolute;
// width: 72px;
// height: 24px;
// left: 0px;
// top: 27px;

// background: #FFF6E9;
// border-radius: 60px;

export default function MultiActionAreaCard() {
  return (
    <Card sx={{display:"flex",flexDirection:"column"}}>
      <div style={{display:"flex",flexDirection:"row"}} >
        <CardContent sx={{ margin:"25px"}}>
          <Typography gutterBottom variant="h5" component="div" sx={{backgroundColor:'#FFF6E9;',width:'72px', height:'24px', color:'#FFA217'}}>
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          image={require(`../ustils/Maskgroup.png`)}
          alt="green iguana"
          sx={{ width: '30%', height: '30%' , margin:"25px"}}
        />
      </div>
      <CardActions sx={{margin:"25px"}}>
      <Button sx={{ 
        backgroundColor: '#FFA217', 
        color: 'white', 
        '&:hover': {
          backgroundColor: '#ed920a', 
        }
      }} variant="contained">View Case Study</Button>
      </CardActions>
    </Card>
  );
}
