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
      type: 'string',
    }),
    defineField({
      name: 'Instagram',
      type: 'string',
    }),
    defineField({
      name: 'Link_redirecionamento_para_o_Instagram',
      type: 'string',
    }),
    defineField({
      name: 'Facebook',
      type: 'string',
    }),
    defineField({
      name: 'Link_redirecionamento_para_o_Facebook',
      type: 'string',
    }),
    defineField({
      name: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'Link_redirecionamento_para_o_Email',
      type: 'string',
    }),
  ],
})