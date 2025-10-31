import {defineField, defineType} from 'sanity'

export const carrosselType = defineType({
  name: 'carrossel',
  title: 'carrossel',
  label: 'Carrossel',
  type: 'document',
  fields: [
    defineField({
      name: 'Endereco_da_imagem',
      label: 'Endereço da imagem',
      type: 'image',
    }),
    defineField({
      name: 'Endereco_do_produto',
      label: 'Endereço do produto',
      type: 'url',
    }),
  ],
})