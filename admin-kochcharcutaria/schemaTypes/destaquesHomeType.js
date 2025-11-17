import {defineField, defineType} from 'sanity'

export const destaquesHomeType = defineType({
  name: 'destaquesHomeType',
  title: 'Destaques Homepage',
  label: 'Carrossel de destaques Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'Endereco_da_imagem',
      title: 'Endereço da imagem',
      type: 'image',
    }),
    defineField({
      name: 'Nome',
      type: 'string',
    }),
    defineField({
      name: 'Preco_nominal',
      title: 'Preço nominal',
      type: 'number',
    }),
    defineField({
      name: 'Percentual_de_desconto',
      title: 'Percentual de desconto',
      type: 'number',
    }),
    defineField({
      name: 'Endereco_do_produto',
      title: 'Endereço do produto',
      type: 'url',
    }),
  ],
})