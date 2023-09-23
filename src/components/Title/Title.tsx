import { Typography } from '@mui/material';

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return (
    <Typography
      sx={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        background: 'linear-gradient(to right, #B2D8F4 0%, #1A77D2 100%)',
        color: 'transparent',
        backgroundClip: 'text',
      }}>
      {title}
    </Typography>
  );
};

export default Title;
