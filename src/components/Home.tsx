import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { BasicCard } from './BasicCard';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// export const Home: React.VFC = () => {
//   return (
//     <>
//       <Typography variant="h4" component="div">
//         Games
//       </Typography>
//       <Grid
//         container
//         spacing={{ xs: 2, md: 3 }}
//         columns={{ xs: 4, sm: 8, md: 12 }}
//       >
//         {Array.from(Array(6)).map((_, index) => (
//           <Grid item xs={2} sm={4} md={4} key={index}>
//             {/* <Item> */}
//             <BasicCard />
//             {/* </Item> */}
//           </Grid>
//         ))}
//       </Grid>
//     </>
//   );
// };

export const Home: React.VFC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom component="div">
        作ったゲームやライブラリ
      </Typography>
      <Box
        sx={{
          backgroundColor: '#F3F6F9',
          padding: '16px',
        }}
      >
        <Typography gutterBottom variant="h4" component="div">
          Games
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <BasicCard
              title={'Mahjongg Solitaire'}
              description={
                '積み上げられた麻雀牌の山から、ある一定のルールに従って牌を取り除いていく、パズルゲーム。'
              }
              href={'https://mystifying-leakey-44c457.netlify.app/'}
              path={'/mahjongg-solitaire'}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
