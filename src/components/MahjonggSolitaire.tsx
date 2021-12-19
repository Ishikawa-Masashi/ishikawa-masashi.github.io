import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { BasicCard } from './BasicCard';
import { ReferenceCard } from './Elements/ReferenceCard';
import { ButtonBases } from './Elements/ImageButton';

export const MahjonggSolitaire: React.VFC = () => {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: 'background.paper', p: 3 }}
    >
      <Typography gutterBottom variant="h4" component="div" align="center">
        Mahjongg Solitaire
      </Typography>

      <Box display="flex" justifyContent="center" alignItems="center">
        <ReferenceCard
          image={'/images/MahjonggSolitaire.png'}
          url={'https://mystifying-leakey-44c457.netlify.app/'}
        />
      </Box>

      <Box sx={{ p: 4 }}>
        <Typography gutterBottom variant="h4" component="div">
          遊び方
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          同じ牌をタッチして2個1組で消していく。ただし、左右に牌がある牌と、牌の下にある牌は消去できない。
        </Typography>
      </Box>
    </Box>
  );
};
