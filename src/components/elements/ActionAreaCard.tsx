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

type Props = {
  title: string;
  description?: string;
  href?: string;
  path?: string;
};

export const ActionAreaCard: React.FC<Props> = (props) => {
  const { title, description = '', href = '', path = '' } = props;
  const navigate = useNavigate();

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardActionArea onClick={() => navigate(path)}>
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
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
