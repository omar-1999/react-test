import { Link as RouterLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FactCheckIcon from '@mui/icons-material/FactCheck';

const ListItems = () => {
  const listItems = [{
    url: '/',
    icon: <DashboardIcon />,
    text: 'Dashboard',
  }, {
    url: '/employees',
    icon: <AccountBoxIcon />,
    text: 'Employees',
  }, {
    url: '/requests',
    icon: <FactCheckIcon />,
    text: 'Requests',
  }];

  return (
    <>
      {
        listItems.map((text, index) =>
        (
          <ListItem button key={index} component={RouterLink} to={text.url}>
            <ListItemIcon>{text.icon}</ListItemIcon>
            <ListItemText primary={text.text} />
          </ListItem>
        )
        )
      }
    </>
  );
}

export default ListItems;