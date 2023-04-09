import Grid from '@mui/material/Unstable_Grid2';
import Navigation from 'components/Navigation';
import { Outlet } from 'react-router-dom';

const Layout = () => (
    <Grid container spacing="2">
        <Navigation />
        <Outlet/>
    </Grid>
);

export default Layout;