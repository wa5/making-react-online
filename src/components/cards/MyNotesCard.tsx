import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export const MyNotesCard:React.FC<{name:any,fileLink:any,language:any,topic:any}>=({fileLink,language,name,topic})=> {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          topics of teachers
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2">
          language:{language}
          <br />
          {`topic:${topic}`}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={fileLink}>
        <Button size="small">download</Button></a>
      </CardActions>
    </Card>
  );
}