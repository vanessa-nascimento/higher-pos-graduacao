import { v4 as uuid } from 'uuid';

export const users = [
  {
    id: uuid(),
    description: 'Sou aluno de mestrado/doutorado do PPgSI',
    media: '/static/images/users/user_aluno.svg',
    title: 'Aluno',
    router: '/aluno'
  },
  {
    id: uuid(),
    description: 'Sou orientador do PPgSI',
    media: '/static/images/users/user_orientador.svg',
    title: 'Orientador',
    router: '/orientador'
  },
  {
    id: uuid(),
    description: 'Faço parte da coordenação (CCP) do PPgSI',
    media: '/static/images/users/user_coordenacao.svg',
    title: 'Coordenação',
    router: '/coordenacao'
  },
]