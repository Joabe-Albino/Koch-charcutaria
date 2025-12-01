import {defineField, defineType} from 'sanity'

export const infoType = defineType({
  name: 'infoType',
  title: 'Informações',
  type: 'document',
  fields: [
    defineField({
      name: 'NumeroWhatsapp',
      title: 'Número do Whatsapp',
      type: 'string',
    }),
    defineField({
      name: 'LinkWhatsapp',
      title: 'Link do Whatsapp',
      type: 'url',
    }),
    defineField({
      name: 'Instagram',
      type: 'string',
    }),
    defineField({
      name: 'LinkInstagram',
      title: 'Link do Instagram',
      type: 'url',
    }),
    defineField({
      name: 'Facebook',
      type: 'string',
    }),
    defineField({
      name: 'LinkFacebook',
      title: 'Link do Facebook',
      type: 'url',
    }),
    defineField({
      name: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'LinkEmail',
      title: 'Link para o Email',
      type: 'url',
    }),
  ],
})