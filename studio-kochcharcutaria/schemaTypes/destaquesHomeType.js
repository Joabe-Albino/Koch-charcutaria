import {defineField, defineType} from 'sanity'

export const destaquesHomeType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'Endereço da imagem',
      type: 'string',
    }),
    defineField({
      name: 'Nome',
      type: 'string',
    }),
    defineField({
      name: 'Preço nominal',
      type: 'double',
    }),
    defineField({
      name: 'Percentual de desconto',
      type: 'double',
    }),
    defineField({
      name: 'Endereço do produto',
      type: 'string',
    }),
  ],
})