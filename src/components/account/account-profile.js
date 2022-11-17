import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7',
  dataMaxInscricaoQuali: '25/11/2023',
  dataMaxDissertacao: '31/12/2025'
};

export const AccountProfile = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 64,
            mb: 2,
            width: 64
          }}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {user.name}
        </Typography>

        {/* TEM QUE SER EDITAVELLLLLL */}
        <Typography
          color="textSecondary"
          variant="body2"
        >
          <b>Data máxima para inscrição na qualificação:</b>
          <br/>
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.dataMaxInscricaoQuali}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          <b>Data máxima para dissertação:</b>
          <br/>
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.dataMaxDissertacao}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        color="primary"
        fullWidth
        variant="text"
      >
        Upload picture
      </Button>
    </CardActions>
  </Card>
);
