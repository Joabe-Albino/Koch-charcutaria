import {defineField, defineType} from 'sanity'

export const revendaType = defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({
            name: 'Endereço da imagem',
            type: 'string',
        }),
        defineField({
            name: 'Nome da empresa',
            type: 'string',
        }),
        defineField({
            name: 'Link embedded Google Maps',
            type: 'string',
        }),
    ],
})