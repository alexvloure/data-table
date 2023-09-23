import { useState } from 'react';
import useColorSchema from '../../../hooks/useColorSchema';
import { StyledBox, StyledTextField } from './DataGridSearch.styled';
import { Button, Chip } from '@mui/material';

type Props = {
  handleSearch: (title: string) => void;
};

const DataGridSearch = ({ handleSearch }: Props) => {
  const isDarkMode = useColorSchema();
  const [searchValue, setSearchValue] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  return (
    <StyledBox isdarkmode={isDarkMode}>
      <StyledTextField
        isdarkmode={isDarkMode}
        label="Search by title"
        variant="outlined"
        size="small"
        value={title}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setTitle(event.target.value);
        }}
      />
      <Button
        variant="outlined"
        sx={{
          ':focus': {
            outline: 'none',
          },
          minWidth: '70px',
        }}
        onClick={() => {
          handleSearch(title.trim());
          setSearchValue(title.trim());
        }}>
        Search
      </Button>
      {searchValue !== '' && (
        <Chip
          data-testid="chipSearch"
          // sx={{ maxWidth: '80px' }}
          color="primary"
          label={searchValue}
          onDelete={() => {
            setSearchValue('');
            setTitle('');
            handleSearch('');
          }}
        />
      )}
    </StyledBox>
  );
};

export default DataGridSearch;
