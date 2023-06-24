import { Container, AppBar } from '@mui/material';
import Navigation from 'components/navigation/navigation';

export default function Header({
  onLoginSubmit,
  onRegisterSubmit,
  onLogOutClick,
  isLogin,
  user,
}) {
  return (
    <AppBar position="static" sx={{ p: '24px 0', bgcolor: 'secondary.main' }}>
      <Container maxWidth="xl">
        <Navigation
          onLoginSubmit={onLoginSubmit}
          onRegisterSubmit={onRegisterSubmit}
          onLogOutClick={onLogOutClick}
          isLogin={isLogin}
        />
      </Container>
    </AppBar>
  );
}
