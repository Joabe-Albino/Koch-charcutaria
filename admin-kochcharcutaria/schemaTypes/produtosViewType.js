import {defineField, defineType} from 'sanity'

export const produtosViewType = defineType({
  name: 'produtosViewType',
  title: 'Produtos_na_pagina_produtos',
  type: 'document',
  fields: [
    defineField({
      name: 'Endereco_da_imagem',
      label: 'Endereço da imagem',
      type: 'image',
    }),
    defineField({
      name: 'Nome_do_produto',
      label: 'Nome do produto',
      type: 'string',
    }),
    defineField({
      name: 'Preco_do_produto',
      label: 'Preço do produto',
      type: 'number',
    }),
    defineField({
      name: 'Percentual_de_desconto',
      label: 'Percentual de desconto',
      type: 'number',
    }),
    defineField({
      name: 'Descricao',
      label: 'Descrição',
      type: 'string',
    }),
    defineField({
      name: 'Link_do_produto',
      label: 'Link do produto',
      type: 'url',
    }),
    defineField({
      name: 'Endereco_do_video',
      label: 'Endereço do vídeo',
      type: 'url',
    }),
  ],
})