import {defineField, defineType} from 'sanity'

export const infoType = defineType({
  name: 'info',
  title: 'informacoes',
  label: 'Informações',
  type: 'document',
  fields: [
    defineField({
      name: 'NumeroWhatsapp',
      label: 'Número do Whatsapp',
      type: 'string',
    }),
    defineField({
      name: 'LinkWhatsapp',
      label: 'Link do Whatsapp',
      type: 'url',
    }),
    defineField({
      name: 'Instagram',
      type: 'string',
    }),
    defineField({
      name: 'LinkInstagram',
      label: 'Link do Instagram',
      type: 'url',
    }),
    defineField({
      name: 'Facebook',
      type: 'string',
    }),
    defineField({
      name: 'LinkFacebook',
      label: 'Link do Facebook',
      type: 'url',
    }),
    defineField({
      name: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'LinkEmail',
      label: 'Link para o Email',
      type: 'url',
    }),
  ],
})