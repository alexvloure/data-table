import useColorSchema from '../../hooks/useColorSchema';
import { LinearProgress } from '@mui/material';
import { StyledDataGrid } from './DataGrid.styled';
import { GridCellParams, useGridApiRef } from '@mui/x-data-grid';
import { usePostColumns } from '../../hooks/usePostColumns';
import { Post } from '../../models/Models';

type Props = {
  rows: Post[];
  isLoading: boolean;
};

const PostDataGrid = ({ rows, isLoading }: Props) => {
  const apiRef = useGridApiRef();
  const columns = usePostColumns(apiRef);
  const isDarkMode = useColorSchema();

  function isPrime(num: number): boolean {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }

  return (
    <StyledDataGrid
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
      pageSizeOptions={[15, 25, 50]}
      initialState={{
        pagination: {
          paginationModel: { pageSize: 15, page: 0 },
        },
      }}
      disableColumnMenu={true}
      getCellClassName={(params: GridCellParams) => {
        if (params.field === 'title' && isPrime(Number(params.id))) {
          return 'italicId';
        }
        return '';
      }}
    />
  );
};

export default PostDataGrid;
