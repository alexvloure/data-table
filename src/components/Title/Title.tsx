import { Typography } from '@mui/material';

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return (
    <Typography
      sx={{
        mb: '1rem',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      }}>
      {title}
    </Typography>
  );
};

export default Title;
