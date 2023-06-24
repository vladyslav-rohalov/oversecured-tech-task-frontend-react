import { Typography, Box } from '@mui/material';
import { Container } from '@mui/material';

export default function Hero({ user }) {
  return (
    <Container
      maxWidth="xl"
      style={{ backgroundColor: '#ffc107', height: '500px', marginTop: '32px' }}
    >
      <Box style={{ textAlign: 'center', paddingTop: '150px' }}>
        <Typography component="h1" variant="h1">
          Oversecured
        </Typography>
        {user ? (
          <Typography variant="h4" component="p" color="black">
            Welcome to the database {user}
          </Typography>
        ) : (
          <Typography component="h2" variant="h4">
            Register an account to work with the database
          </Typography>
        )}
      </Box>
    </Container>
  );
}
