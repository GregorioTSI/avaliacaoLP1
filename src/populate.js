import { openDB } from './config/db.js'
import {
  CREATE_TABLE_VITIMA,
  CREATE_TABLE_OCORRENCIA,
  INSERT_VITIMA,
  INSERT_OCORRENCIA,
  TRUNCATE_VITIMA,
  TRUNCATE_OCORRENCIA,
} from './config/queries.js'

const vitimas = [
  {
    id: 1,
    nome: 'Maria',
    idade: 25,
    genero: 'F',
  },
  {
    id: 2,
    nome: 'João',
    idade: 30,
    genero: 'M',
  },
  {
    id: 3,
    nome: 'Ana',
    idade: 35,
    genero: 'F',
  },
]

const ocorrencias = [
  {
    id: 1,
    descricao: 'Assalto',
    endereco: 'Rua A, 123',
    vitimaId: 1,
    houveObito: false,
  },
  {
    id: 2,
    descricao: 'Homicídio',
    endereco: 'Rua B, 456',
    vitimaId: 1,
    houveObito: true,
  },
  {
    id: 3,
    descricao: 'Roubo',
    endereco: 'Rua C, 789',
    vitimaId: 2,
    houveObito: false,
  },
  {
    id: 4,
    descricao: 'Agressão',
    endereco: 'Rua D, 012',
    vitimaId: 2,
    houveObito: false,
  },
  {
    id: 5,
    descricao: 'Estupro',
    endereco: 'Rua E, 345',
    vitimaId: 3,
    houveObito: true,
  },
  {
    id: 6,
    descricao: 'Roubo',
    endereco: 'Rua F, 678',
    vitimaId: 3,
    houveObito: false,
  },
]

;(async () => {
  const db = await openDB()

  await db.exec(CREATE_TABLE_VITIMA)
  await db.exec(CREATE_TABLE_OCORRENCIA)

  await db.exec(TRUNCATE_OCORRENCIA)
  await db.exec(TRUNCATE_VITIMA)

  for (let i = 0; i < vitimas.length; i++) {
    const { id, nome, idade, genero } = vitimas[i]

    await db.run(INSERT_VITIMA, id, nome, idade, genero)
    console.log(`Vítima #${i + 1} criada`)
  }

  for (let i = 0; i < ocorrencias.length; i++) {
    const { id, descricao, endereco, vitimaId, houveObito } = ocorrencias[i]

    await db.run(INSERT_OCORRENCIA, id, descricao, endereco, vitimaId, houveObito)
    console.log(`Ocorrência #${i + 1} criada`)
  }
})()
