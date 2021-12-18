import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Divider } from '@mui/material';
// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

type Props = {
  title: string;
  description?: string;
  href?: string;
  path?: string;
};

// export const BasicCard: React.FC<Props> = (props) => {
//   const { title } = props;
//   return (
//     <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="div">
//           {title}
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           adjective
//         </Typography>
//         <Typography variant="body2">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// };

// export const BasicCard: React.FC<Props> = (props) => {
//   const { title } = props;
//   return (
//     <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//         <Typography variant="h5" component="div">
//           {title}
//         </Typography>
//         <Divider />
//         <Typography variant="body2">
//           積み上げられた麻雀牌の山から、ある一定のルールに従って牌を取り除いていく、パズルゲーム。
//           <br />
//           {/* {'"a benevolent smile"'}  */}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// };

export const BasicCard: React.FC<Props> = (props) => {
  const { title, description = '', href = '', path = '' } = props;
  const navigate = useNavigate();

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardActionArea
        // href={href}
        // target="_blank"
        // rel="noopener noreferrer"
        onClick={() => navigate(path)}
      >
        <Typography gutterBottom variant="h5" component="div" align="center">
          {title}
        </Typography>
        <CardMedia
          component="img"
          height="194"
          image="/images/MahjonggSolitaire.png"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
            <br />
            {/* {'"a benevolent smile"'}  */}
          </Typography>
        </CardContent>
        {/* <Button size="small">Learn More</Button> */}
      </CardActionArea>
    </Card>
  );
};
