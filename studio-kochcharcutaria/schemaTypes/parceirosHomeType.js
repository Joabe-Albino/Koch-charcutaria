import {defineField, defineType} from 'sanity'

export const parceirosHomeType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'Endereço da imagem',
      type: 'string',
    }),
    defineField({
      name: 'Endereço da página do parceiro',
      type: 'string',
    }),
  ],
})