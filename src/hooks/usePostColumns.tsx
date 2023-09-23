import { useState } from 'react';
import { Save, Edit, Cancel } from '@mui/icons-material';
import { GridRowId } from '@mui/x-data-grid';
import { GridApiCommunity } from '@mui/x-data-grid/internals';
import { Column } from '../models/Models';
import { StyledGridActionItem } from '../components/DataGrid/DataGrid.styled';

export function usePostColumns(
  apiRef: React.MutableRefObject<GridApiCommunity>
) {
  const [editMode, setEditMode] = useState<GridRowId | string>('');

  const columns: Column[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 50,
      sortable: false,
      editable: false,
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 250,
      sortable: false,
      editable: true,
    },
    {
      field: 'body',
      headerName: 'Body',
      width: 400,
      sortable: false,
      editable: true,
    },
    {
      field: 'userId',
      headerName: 'User ID',
      width: 100,
      sortable: false,
      editable: false,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      sortable: false,
      editable: false,
      renderCell: ({ id }) => {
        if (editMode === id) {
          return [
            <StyledGridActionItem
              key={`${id}Save`}
              icon={<Save />}
              label="Save"
              onClick={() => {
                apiRef.current.stopRowEditMode({ id });
                setEditMode('');
              }}
            />,
            <StyledGridActionItem
              key={`${id}Cancel`}
              icon={<Cancel />}
              label="Cancel"
              onClick={() => {
                apiRef.current.stopRowEditMode({
                  id,
                  ignoreModifications: true,
                });
                setEditMode('');
              }}
            />,
          ];
        }
        return [
          <StyledGridActionItem
            key={id}
            icon={<Edit />}
            label="Edit"
            onClick={() => {
              if (editMode !== '')
                apiRef.current.stopRowEditMode({ id: editMode });
              apiRef.current.startRowEditMode({ id });
              setEditMode(id);
            }}
          />,
        ];
      },
    },
  ];
  return columns;
}
