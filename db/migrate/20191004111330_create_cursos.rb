class CreateCursos < ActiveRecord::Migration[6.0]
  def change
    create_table :cursos do |t|
      t.string :nome
      t.string :descricao
      t.integer :qtde_vagas
      t.string :dia_hora

      t.timestamps
    end
  end
end
