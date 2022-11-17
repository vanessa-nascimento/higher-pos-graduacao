import Head from 'next/head';
import { Box, Container, Grid, Pagination, Typography } from '@mui/material';
import { users } from '../__mocks__/type-users';
import { DashboardLayout } from '../components/dashboard-layout';
import { CardSelect } from '../components/card-select/card-select';

const Page = () => (
  <>
    <Head>
      <title>
        Início | Higher PPgSI
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Box
            sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                m: -1
            }}
            >
            <Typography
                sx={{ m: 1 }}
                variant="h4"
            >
                Seja bem-vindo ao Higher do PPgSI, você é?
            </Typography>
        </Box>
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {users.map((user) => (
              <Grid
                item
                key={user.id}
                lg={4}
                md={6}
                xs={12}
              >
                <CardSelect product={user} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
