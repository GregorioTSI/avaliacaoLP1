export const CREATE_TABLE_VITIMA = `
  create table if not exists vitima (
    id integer primary key,
    nome text not null,
    idade integer not null,
    genero text not null
  )
`

export const CREATE_TABLE_OCORRENCIA = `
  create table if not exists ocorrencia (
    id integer primary key,
    descricao text not null,
    endereco text not null,
    vitimaId integer not null,
    houveObito boolean not null,
    foreign key(vitimaId)
      references vitima(id)
  )
`

export const INSERT_VITIMA = `
  insert into vitima values (
    ?, ?, ?, ?
  )
`

export const INSERT_OCORRENCIA = `
  insert into ocorrencia values (
    ?, ?, ?, ?, ?
  )
`

export const SELECT_VITIMAS_BY_FAIXA_IDADE = `
  select * from vitima where idade between ? and ?
`

export const SELECT_OCORRENCIAS_BY_GENERO_OBITO = `
  select * from ocorrencia
  where genero = ? and houveObito = ?
`

export const SELECT_VITIMAS_BY_ENDERECO = `
  select * from vitima
  where lower(endereco) like lower(?)
`

export const TRUNCATE_VITIMA = `
  delete from vitima
`

export const TRUNCATE_OCORRENCIA = `
  delete from ocorrencia
`
