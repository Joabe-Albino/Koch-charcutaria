import {defineField, defineType} from 'sanity'

export const infoType = defineType({
  name: 'info',
  title: 'Informacoes',
  type: 'document',
  fields: [
    defineField({
      name: 'Numero_de_Whatsapp',
      type: 'string',
    }),
    defineField({
      name: 'Link_redirecionamento_para_o_Whatsapp',
      type: 'url',
    }),
    defineField({
      name: 'Instagram',
      type: 'string',
    }),
    defineField({
      name: 'Link_redirecionamento_para_o_Instagram',
      type: 'url',
    }),
    defineField({
      name: 'Facebook',
      type: 'string',
    }),
    defineField({
      name: 'Link_redirecionamento_para_o_Facebook',
      type: 'url',
    }),
    defineField({
      name: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'Link_redirecionamento_para_o_Email',
      type: 'url',
    }),
  ],
})