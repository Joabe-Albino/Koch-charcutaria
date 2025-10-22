import {defineField, defineType} from 'sanity'

export const parceirosHomeType = defineType({
  name: 'parceirosHome',
  title: 'Parceiros_no_Home',
  type: 'document',
  fields: [
    defineField({
      name: 'Endereco_da_imagem',
      type: 'string',
    }),
    defineField({
      name: 'Endereco_da_pagina_do_parceiro',
      type: 'string',
    }),
  ],
})