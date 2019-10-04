json.extract! curso, :id, :nome, :descricao, :qtde_vagas, :dia_hora, :created_at, :updated_at
json.url curso_url(curso, format: :json)
