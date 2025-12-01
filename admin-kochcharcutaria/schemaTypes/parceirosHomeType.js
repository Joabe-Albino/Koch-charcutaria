import {defineField, defineType} from 'sanity'

export const parceirosHomeType = defineType({
  name: 'parceirosHomeType',
  title: 'Carrossel parceiros Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'Endereco_da_imagem',
      title: 'Endereço da imagem',
      type: 'image',
    }),
    defineField({
      name: 'Endereco_da_pagina_do_parceiro',
      title: 'Endereço da pagina do parceiro',
      type: 'url',
    }),
  ],
})