import {defineField, defineType} from 'sanity'

export const carrosselType = defineType({
  name: 'carrossel',
  title: 'Carrossel',
  type: 'document',
  fields: [
    defineField({
      name: 'Endereco_da_imagem',
      type: 'string',
    }),
    defineField({
      name: 'Endereco_do_produto',
      type: 'string',
    }),
  ],
})