import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import { aprovacaoExames, avaliacao, curso, orientador } from './mock-options';



export const RelatorioDetails = (props) => {
  const [values, setValues] = useState({
    firstName: 'asdasdasdfsadf',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Relatório"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email USP"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Número USP"
                name="nusp"
                onChange={handleChange}
                required
                disabled
                value={values.nusp}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Link Lattes"
                name="lattes"
                onChange={handleChange}
                required
                value={values.lattes}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Última atualização Lattes"
                name="updateLattes"
                onChange={handleChange}
                required
                // type="date"
                value={values.updateLattes}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Curso"
                name="curso"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.curso}
                variant="outlined"
              >
                {curso.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Orientador"
                name="orientador"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.orientador}
                variant="outlined"
              >
                {orientador.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Data de entrada como aluno regular"
                name="dataEntrada"
                onChange={handleChange}
                required
                value={values.dataEntrada}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Resultado da avaliação"
                name="avaliacao"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.avaliacao}
                variant="outlined"
              >
                {avaliacao.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Prazo máximo para inscrição no programa de qualificação"
                name="prazoQualificacao"
                onChange={handleChange}
                required
                // type="date"
                value={values.prazoQualificacao}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Prazo máximo para dissertação"
                name="prazoDissertacao"
                onChange={handleChange}
                required
                // type="date"
                value={values.prazoDissertacao}
                variant="outlined"
              />
            </Grid>

            {/** REFERENTE A DISCPLINAS CURSADAS NO PROGRAMA */}

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Já realizou exame de proficiência?"
                name="proficiencia"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.proficiencia}
                variant="outlined"
              >
                {aprovacaoExames.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Já realizou exame de qualificação"
                name="qualificacao"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.qualificacao}
                variant="outlined"
              >
                {aprovacaoExames.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>


          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};
