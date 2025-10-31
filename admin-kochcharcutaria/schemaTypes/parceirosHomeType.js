import {defineField, defineType} from 'sanity'

export const parceirosHomeType = defineType({
  name: 'parceirosHome',
  label: 'Carrossel parceiros de Home',
  type: 'document',
  fields: [
    defineField({
      name: 'Endereco_da_imagem',
      label: 'Endereço da imagem',
      type: 'image',
    }),
    defineField({
      name: 'Endereco_da_pagina_do_parceiro',
      label: 'Endereço da pagina do parceiro',
      type: 'url',
    }),
  ],
})