import {defineField, defineType} from 'sanity'

export const destaquesHomeType = defineType({
  name: 'destaquesHome',
  title: 'Destaques_no_Home',
  type: 'document',
  fields: [
    defineField({
      name: 'Endereco_da_imagem',
      type: 'string',
    }),
    defineField({
      name: 'Nome',
      type: 'string',
    }),
    defineField({
      name: 'Preco_nominal',
      type: 'number',
    }),
    defineField({
      name: 'Percentual_de_desconto',
      type: 'number',
    }),
    defineField({
      name: 'Endereco_do_produto',
      type: 'string',
    }),
  ],
})