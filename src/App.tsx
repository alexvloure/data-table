import { Container, Typography } from '@mui/material';
import './App.css';
import Table from './components/DataGrid/DataGrid';

function App() {
  return (
    <Container
      sx={{
        py: '2rem',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1000px !important',
      }}>
      <Typography sx={{ mb: '1rem', fontWeight: 'bold' }}>
        data table
      </Typography>
      <Table />
    </Container>
  );
}

export default App;
