import {defineField, defineType} from 'sanity'

export const produtosViewType = defineType({
  name: 'produtosViewType',
  title: 'Produtos_na_pagina_produtos',
  type: 'document',
  fields: [
    defineField({
      name: 'Endereco_da_imagem',
      type: 'string',
    }),
    defineField({
      name: 'Nome_do_produto',
      type: 'string',
    }),
    defineField({
      name: 'Preco_do_produto',
      type: 'number',
    }),
    defineField({
      name: 'Percentual_de_desconto',
      type: 'number',
    }),
    defineField({
      name: 'Descricao',
      type: 'string',
    }),
    defineField({
      name: 'Link_do_produto',
      type: 'string',
    }),
    defineField({
      name: 'Endereco_do_video',
      type: 'string',
    }),
  ],
})