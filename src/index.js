import { openDB } from './config/db.js'
import {
  SELECT_VITIMAS_BY_FAIXA_IDADE,
  SELECT_OCORRENCIAS_BY_GENERO_OBITO,
  SELECT_VITIMAS_BY_ENDERECO,
} from './config/queries.js'

;(async () => {
  const db = await openDB()

  let results = await db.all(SELECT_VITIMAS_BY_FAIXA_IDADE, 20, 30)
  console.log(results)

  results = await db.all(SELECT_OCORRENCIAS_BY_GENERO_OBITO, 'F', true)
  console.log(results)

  results = await db.all(SELECT_VITIMAS_BY_ENDERECO, '%rua%')
  console.log(results)
})()
