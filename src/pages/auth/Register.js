// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../../images/LogoReact';
import Copyright from '../Copyright';
import ReactNotifications from '../../components/Notifications/ReactNotifications';
import api from '../../api/api';
import useAuth from '../../components/Auth/useAuth';

const theme = createTheme();

export default function Register() {
  const auth = useAuth();
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const params = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      password_confirmation: data.get('password_confirmation'),
    };

    if (!params.name) 
      return ReactNotifications('Warning', `Column name cannot be null.`, 'warning');

    if (!params.email) 
      return ReactNotifications('Warning', `Column email cannot be null.`, 'warning');

    if (!params.password) 
      return ReactNotifications('Warning', `Column password cannot be null.`, 'warning');

    if (!params.password_confirmation) 
      return ReactNotifications('Warning', `Column password_confirmation cannot be null.`, 'warning');

    if (params.password !== params.password_confirmation) 
      return ReactNotifications('Warning', `Passwords do not match.`, 'warning');

    try {
      const resp = await api.post('/register', params);
      auth.login(resp.data)
      history.push('/');
      // console.log(resp.data);
    } catch(err) {
      console.log(err.response.data)
      console.log(err.response.status)
      ReactNotifications(
        'Error',
        err.response.data,
        'danger'
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, background: '#fff' }}>
              <Logo />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="dense"
                required
                fullWidth
                id="name"
                label="User Name"
                name="name"
                type="text"
                autoComplete="name"
                variant="standard"
                autoFocus
              />
              <TextField
                margin="dense"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                variant="standard"
              />
              <TextField
                margin="dense"
                variant="standard"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                margin="dense"
                variant="standard"
                required
                fullWidth
                name="password_confirmation"
                label="Password Confirmation"
                type="password"
                id="password_confirmation"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              <Grid container>
                <Grid item>
                  <Link component={RouterLink} to={'/login'} variant="body2">
                    {"Do you already have an account? Login"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}