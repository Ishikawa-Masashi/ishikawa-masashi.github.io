import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { BasicCard } from '../BasicCard';
import { ReferenceCard } from '../Elements/ReferenceCard';
import { ButtonBases } from '../Elements/ImageButton';

import TeX from '@ishikawa-masashi/react-katex';
const _ = String.raw;

export const ConversionEulerToMatrix: React.VFC = () => {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: 'background.paper', p: 3 }}
    >
      <Typography gutterBottom variant="h4" component="div" align="center">
        オイラー角と行列の相互変換
      </Typography>
      <Typography gutterBottom variant="body1" component="div">
        こんなページは作りたくないけどしょーがない。
        なるべくオイラー角を使わないプログラムスタイルに取り組みましょう＞３Ｄ初心者のみなさん
        はすべて結果が異なります。
      </Typography>
      <Typography gutterBottom variant="body1" component="div">
        角度で指定する場合は、回転の順序（回転軸の座標系のとり方）によって同じ角度でも６通りの回転結果が存在します。
        ＸＹＺ・ＸＺＹ・ＹＸＺ・ＹＺＸ・ＺＸＹ・ＺＹＸ
        はすべて結果が異なります。
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
        <TeX block>{_`
          R^{left}_x = 
            \left(
              \begin{array}{ccc}
                1 & 0 & 0 \\
                0 & \cos \theta & - \sin \theta \\
                0 & \sin \theta & \cos \theta
              \end{array}
            \right)
        `}</TeX>
        <TeX block>{_`
R^{left}_y = 
\left(
  \begin{array}{ccc}
    \cos \theta & 0 & \sin \theta \\
    0 & 1 & 0 \\
    -\sin \theta & 0 & \cos \theta
  \end{array}
\right)
        `}</TeX>
        <Typography gutterBottom variant="body1" component="div">
          同じ牌をタッチして2個1組で消していく。ただし、左右に牌がある牌と、牌の下にある牌は消去できない。
        </Typography>
      </Box>
    </Box>
  );
};
