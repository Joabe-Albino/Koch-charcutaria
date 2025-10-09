import {defineField, defineType} from 'sanity'

export const produtosViewType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'Endereço da imagem',
      type: 'string',
    }),
    defineField({
      name: 'Nome do produto',
      type: 'string',
    }),
    defineField({
      name: 'Preço do produto',
      type: 'double',
    }),
    defineField({
      name: 'Descrição',
      type: 'string',
    }),
    defineField({
      name: 'Link do produto',
      type: 'string',
    }),
    defineField({
      name: 'Endereço do vídeo',
      type: 'string',
    }),
  ],
})