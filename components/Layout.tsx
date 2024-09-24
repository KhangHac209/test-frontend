// components/Layout.tsx
import { AppBar, Toolbar, Typography } from '@mui/material';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Test Frontend</Typography>
        </Toolbar>
      </AppBar>
      <main style={{ padding: '20px' }}>{children}</main>
    </>
  );
};

export default Layout;
