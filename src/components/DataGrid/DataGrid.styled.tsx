import styled from '@emotion/styled';
import { DataGrid, DataGridProps, GridActionsCellItem } from '@mui/x-data-grid';

type StyledTableProps = {
  isdarkmode?: boolean;
} & DataGridProps;

export const StyledDataGrid = styled(DataGrid, {
  shouldForwardProp: (prop) => prop !== 'isdarkmode',
})<StyledTableProps>((props) => ({
  backgroundColor: props.isdarkmode ? '#1E1E1E' : '#F5F5F7',
  boxShadow: '2',
  border: 'none',
  color: props.isdarkmode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
  '& .MuiDataGrid-withBorderColor': {
    borderColor: props.isdarkmode ? '#252525' : '#888888',
  },
  '& .MuiTablePagination-root, .MuiTablePagination-actions > button, .MuiTablePagination-selectIcon, .MuiDataGrid-menuIcon > button, .MuiDataGrid-sortIcon':
    {
      color: props.isdarkmode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
    },
  '& .MuiDataGrid-row--editing .MuiDataGrid-cell, .MuiDataGrid-editInputCell input':
    {
      color: props.isdarkmode ? 'white' : 'black',
      backgroundColor: props.isdarkmode ? '#121212' : 'white',
    },
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: props.isdarkmode ? '#303030' : '#E0E0E0',
    minHeight: '45px !important',
    maxHeight: '45px !important',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  '& .MuiDataGrid-columnSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-overlay': {
    backgroundColor: props.isdarkmode ? '#1E1E1E' : '#F5F5F7',
  },
  '& .italicId': {
    fontStyle: 'italic',
  },
}));

export const StyledGridActionItem = styled(GridActionsCellItem)(() => ({
  '&:focus': { outline: 'none !important;' },
  '&:hover': { opacity: 0.8 },
  color: 'inherit',
}));
