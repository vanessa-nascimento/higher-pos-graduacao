import { v4 as uuid } from 'uuid';

export const users = [
  {
    id: uuid(),
    description: 'Sou aluno de mestrado/doutorado do PPgSI',
    title: 'Aluno',
    router: '/aluno'
  },
  {
    id: uuid(),
    description: 'Sou orientador do PPgSI',
    title: 'Orientador',
    router: '/orientador'
  },
  {
    id: uuid(),
    description: 'Faço parte da coordenação (CCP) do PPgSI',
    title: 'Coordenação',
    router: '/coordenacao'
  },
]