import styled from '@emotion/styled';
import { Box, BoxProps, TextField, TextFieldProps } from '@mui/material';

type StyledBoxProps = {
  isdarkmode?: boolean;
} & BoxProps;

export const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isdarkmode',
})<StyledBoxProps>((props) => ({
  backgroundColor: props.isdarkmode ? '#1E1E1E' : '#F5F5F7',
  borderTopRightRadius: '4px',
  borderTopLeftRadius: '4px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  minHeight: '42px',
  padding: '10px',
  gap: '10px',
  overflowX: 'auto',
}));

type StyledTextFieldProps = {
  isdarkmode?: boolean;
} & TextFieldProps;

export const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== 'isdarkmode',
})<StyledTextFieldProps>((props) => ({
  minWidth: '100px',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: props.isdarkmode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
  },
  '& .MuiInputLabel-formControl': {
    color: props.isdarkmode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
  },
  '& .MuiOutlinedInput-input': {
    color: props.isdarkmode ? 'white' : 'black',
  },
}));
