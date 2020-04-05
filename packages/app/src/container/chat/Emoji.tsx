import React from 'react';
import { Collapse, Box, Grid, useTheme } from '@im/component';
import emojis from './emojis';

interface Props {
  visible: boolean;
  onSelect: (emoji: string) => void;
}

export default function Emoji(props: Props) {
  const { visible, onSelect } = props;
  const theme = useTheme();
  const handleClickEmoji = (emoji: string) => () => {
    onSelect(emoji);
  };

  return (
    <Collapse in={visible}>
      <Box overflow="auto" height={200} bgcolor={theme.palette.background.default} p={2}>
        <Grid container spacing={1}>
          {emojis.map(emoji => (
            <Grid item xs={2} spacing={4} justify="center" onClick={handleClickEmoji(emoji.native)}>
              <Box fontSize={24} textAlign="center">
                {emoji.native}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Collapse>
  );
}
