import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from './severity-pill';

const relatorios = [
  {
    id: uuid(),
    aluno: {
      nome: 'Vanessa Nascimento'
    },
    enviadoEm: 1555016400000,
    status: 'pendente'
  },
  {
    id: uuid(),
    aluno: {
      nome: 'Vanessa Nascimento'
    },
    enviadoEm: 1555016400000,
    status: 'aprovado'
  },
  {
    id: uuid(),
    aluno: {
      nome: 'Vanessa Nascimento'
    },
    enviadoEm: 1555016400000,
    status: 'reprovado'
  }
];

export const TabelaRelatorios = (props) => (
  <Card {...props}>
    <CardHeader title="Relatórios" />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Aluno
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Data de envio
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {relatorios.map((relatorio) => (
              <TableRow
                hover
                key={relatorio.id}
              >
                <TableCell>
                  {relatorio.aluno.nome}
                </TableCell>
                <TableCell>
                  {format(relatorio.enviadoEm, 'dd/MM/yyyy')}
                </TableCell>
                <TableCell>
                    {relatorio.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        Ver todos
      </Button>
    </Box>
  </Card>
);
