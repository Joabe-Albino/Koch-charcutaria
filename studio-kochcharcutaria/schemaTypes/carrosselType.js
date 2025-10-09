import {defineField, defineType} from 'sanity'

export const carrosselType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'Endereço da imagem',
      type: 'string',
    }),
    defineField({
      name: 'Endereço do produto',
      type: 'string',
    }),
  ],
})