import { GridRowId } from "@mui/x-data-grid";

export type Post = {
  body: string;
  id: string;
  title: string;
  userId: string;
};

export type Column = {
  field: string;
  headerName: string;
  width: number;
  sortable: boolean;
  editable: boolean;
  renderCell?: ({id}: {id: GridRowId}) => React.JSX.Element[] 
};
