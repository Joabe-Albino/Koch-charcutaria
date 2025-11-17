import {defineField, defineType} from 'sanity'

export const carrosselType = defineType({
  name: 'carrosselType',
  title: 'Carrossel',
  type: 'document',
  fields: [
    defineField({
      name: 'Nome',
      title: 'Nome',
      type: 'string',
    }),
    defineField({
      name: 'Imagem_video',
      title: 'Imagem PNG ou vídeo MP4',
      type: 'file',
    }),
    defineField({
      name: 'Endereco_do_produto',
      title: 'Endereço do produto',
      type: 'url',
    }),
  ],
})