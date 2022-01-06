import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { MenubarExample } from './MenubarExample';

// コンポーネントを定義
export const About: React.VFC = () => {
  // ここでクラス名を取得
  // const classes = useStyles({});

  return (
    <Paper>
      <Typography variant="h4" noWrap>
        About
      </Typography>
      <hr></hr>
      <Typography variant="h6">
        <p>QuickBasic are programming languages for beginners.</p>
      </Typography>
      <MenubarExample></MenubarExample>
    </Paper>
  );
};
