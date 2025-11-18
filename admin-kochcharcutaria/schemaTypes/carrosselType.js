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
      title: 'Imagem (PNG/JPEG) ou vídeo (MP4)',
      type: 'file',
    }),
    defineField({
      name: 'Ordem',
      title: 'Prioridade de mostragem (crescente, decimal)',
      type: 'number',
    }),
  ],
})