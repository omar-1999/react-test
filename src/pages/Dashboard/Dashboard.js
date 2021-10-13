import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Copyright from '../Copyright';
import BarChart from './BarChart';
import PieChart from './PieChart';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';

const Dashboard = () => {
  return (
    <Container sx={{ mt: 2, mb: 4 }}>
      <Grid container spacing={2}>
        {/* Chart */}
        <Grid item xs={12} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Chart />
          </Paper>
        </Grid>
        {/* PieChart */}
        <Grid item xs={12} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <PieChart />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Deposits />
          </Paper>
        </Grid>
        {/* BarChart */}
        <Grid item xs={12} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <BarChart />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  );
}

export default Dashboard;