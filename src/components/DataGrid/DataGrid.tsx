import { useQuery } from '@tanstack/react-query';
import useTheme from '../../hooks/useColorSchema';
import { Post } from '../../models/Models';
import { Box, LinearProgress } from '@mui/material';
import { StyledDataGrid } from './DataGrid.styled';
import { GridCellParams, useGridApiRef } from '@mui/x-data-grid';
import { usePostsColumns } from '../../hooks/usePostsColumns';
import { useEffect, useState } from 'react';
import DataGridSearch from '../DataGridSearch/DataGridSearch';

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
    response.json()
  );
};

const DataGrid = () => {
  const apiRef = useGridApiRef();
  const columns = usePostsColumns(apiRef);
  const [rows, setRows] = useState<Post[]>([]);
  const isDarkMode = useTheme();
  const { data, isLoading } = useQuery<Post[], boolean>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  useEffect(() => {
    if (!isLoading && data) {
      setRows(data);
    }
  }, [data, isLoading]);

  function isPrime(num: number): boolean {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }

  function handleSearch(value: string) {
    if (value.trim() === '') {
      setRows(data || []);
      return;
    }
    setRows([...data!].filter((row) => row.title.includes(value.trim())));
  }

  return (
    <Box sx={{ width: '100%', height: '80vh' }}>
      <DataGridSearch handleSearch={handleSearch} />
      <StyledDataGrid
        autoPageSize
        columns={columns}
        rows={rows}
        apiRef={apiRef}
        isdarkmode={isDarkMode}
        loading={isLoading}
        slots={{
          loadingOverlay: LinearProgress,
        }}
        editMode="row"
        getRowId={(row) => row.id}
        disableColumnMenu={true}
        getCellClassName={(params: GridCellParams) => {
          if (params.field === 'title' && isPrime(Number(params.id))) {
            return 'italicId';
          }
          return '';
        }}
      />
    </Box>
  );
};

export default DataGrid;
