import Head from 'next/head';
import { Box, Container, Grid, Pagination, Typography } from '@mui/material';
import { users } from '../__mocks__/type-users';
import { DashboardLayout } from '../components/dashboard-layout';
import { CardSelect } from '../components/card-select/card-select';
import { TabelaRelatorios } from '../components/tabela-relatorios';

const Page = () => (
  <>
    <Head>
      <title>
        Relatórios alunos | Higher PPgSI
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
        <TabelaRelatorios></TabelaRelatorios>
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
