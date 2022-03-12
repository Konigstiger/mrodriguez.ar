import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';


function Copyright() {
  return (
    // <Typography variant="body2" color="text.secondary">
      <Typography variant="body2" className='text-color-06-white'>
      {'Copyright © '}
      <Link color="#AAAAAA" href="https://mrodriguez.ar/">
        mrodriguez.ar
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: '#54556E',

          // backgroundColor: (theme) =>
          //   theme.palette.mode === 'dark'
          //     ? theme.palette.grey[200]
          //     : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" className='text-color-07-white-strong'>
            Mariano Rodriguez
          </Typography>
          <Copyright />
        </Container>
      </Box>

  );
}