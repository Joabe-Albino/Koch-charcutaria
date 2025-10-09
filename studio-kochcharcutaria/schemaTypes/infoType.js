import {defineField, defineType} from 'sanity'

export const infoType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'Número de Whatsapp',
      type: 'string',
    }),
    defineField({
      name: 'Link redirecionamento para o Whatsapp',
      type: 'string',
    }),
    defineField({
      name: 'Instagram',
      type: 'string',
    }),
    defineField({
      name: 'Link redirecionamento para o Instagram',
      type: 'string',
    }),
    defineField({
      name: 'Facebook',
      type: 'string',
    }),
    defineField({
      name: 'Link redirecionamento para o Facebook',
      type: 'string',
    }),
    defineField({
      name: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'Link redirecionamento para o E-mail',
      type: 'string',
    }),
  ],
})