import {defineField, defineType} from 'sanity'

export const produtosViewType = defineType({
  name: 'produtosViewType',
  title: 'Produtos',
  type: 'document',
  fields: [
    defineField({
      name: 'Endereco_da_imagem',
      title: 'Endereço da imagem',
      type: 'image',
    }),
    defineField({
      name: 'Nome_do_produto',
      title: 'Nome do produto',
      type: 'string',
    }),
    defineField({
      name: 'Preco_do_produto',
      title: 'Preço do produto',
      type: 'number',
    }),
    defineField({
      name: 'Percentual_de_desconto',
      title: 'Percentual de desconto',
      type: 'number',
    }),
    defineField({
      name: 'Descricao',
      title: 'Descrição',
      type: 'string',
    }),
    defineField({
      name: 'Link_do_produto',
      title: 'Link do produto',
      type: 'url',
    }),
    defineField({
      name: 'Endereco_do_video',
      title: 'Endereço do vídeo',
      type: 'url',
    }),
  ],
})