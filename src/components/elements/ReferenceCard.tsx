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
import Grid from '@mui/material/Grid';

type Props = {
  url?: string;
  image?: string;
};

export const ReferenceCard: React.FC<Props> = (props) => {
  const { url = '', image } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt="image" />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pl: 1,
            pb: 1,
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              window.open(url);
            }}
          >
            ゲームをプレイする
          </Button>
        </Box>
        <Typography variant="body2" color="text.secondary" align="center">
          注意: クリックすると別のタブが開きます
        </Typography>
      </CardContent>
    </Card>
  );
};
