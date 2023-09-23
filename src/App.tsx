import { Box, Container, Typography } from '@mui/material';
import './App.css';
import { useQuery } from '@tanstack/react-query';
import { Post } from './models/Models';
import { useEffect, useState } from 'react';
import DataGridSearch from './components/DataGridSearch/DataGridSearch';
import PostDataGrid from './components/PostDataGrid/PostDataGrid';
import Title from './components/Title/Title';

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
    response.json()
  );
};

function App() {
  const [rows, setRows] = useState<Post[]>([]);
  const { data, isLoading } = useQuery<Post[], boolean>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  useEffect(() => {
    if (!isLoading && data) {
      setRows(data);
    }
  }, [data, isLoading]);

  function handleSearch(value: string) {
    if (value.trim() === '') {
      setRows(data || []);
      return;
    }
    setRows([...data!].filter((row) => row.title.includes(value.trim())));
  }

  return (
    <Container
      sx={{
        py: '2rem',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1000px !important',
      }}>
      <Title title={'Exoticca'} />
      <Typography sx={{ mb: '1rem' }}>technical assignment</Typography>
      <Box sx={{ width: '100%', height: '70vh' }}>
        <DataGridSearch handleSearch={handleSearch} />
        <PostDataGrid rows={rows} isLoading={isLoading} />
      </Box>
    </Container>
  );
}

export default App;
