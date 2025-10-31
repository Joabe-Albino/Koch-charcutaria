import {defineField, defineType} from 'sanity'

export const destaquesHomeType = defineType({
  name: 'destaquesHome',
  title: 'destaquesHome',
  label: 'Carrossel de destaques Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'Endereco_da_imagem',
      label: 'Endereço da imagem',
      type: 'image',
    }),
    defineField({
      name: 'Nome',
      type: 'string',
    }),
    defineField({
      name: 'Preco_nominal',
      label: 'Preço nominal',
      type: 'number',
    }),
    defineField({
      name: 'Percentual_de_desconto',
      label: 'Percentual de desconto',
      type: 'number',
    }),
    defineField({
      name: 'Endereco_do_produto',
      label: 'Endereço do produto',
      type: 'url',
    }),
  ],
})