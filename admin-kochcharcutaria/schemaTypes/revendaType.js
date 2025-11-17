import {defineField, defineType} from 'sanity'

export const revendaType = defineType({
    name: 'revendaType',
    title: 'Lojas de revenda',
    type: 'document',
    fields: [
        defineField({
            name: 'Endereco_da_imagem',
            title: 'Endereço da imagem',
            type: 'image',
        }),
        defineField({
            name: 'Nome_da_empresa',
            title: 'Nome da empresa',
            type: 'string',
        }),
        defineField({
            name: 'Link_Google_Maps',
            title: 'Link Google Maps para embedding',
            type: 'url',
        }),
    ],
})