import {defineField, defineType} from 'sanity'

export const revendaType = defineType({
    name: 'revenda',
    title: 'Lojas_de_revenda',
    type: 'document',
    fields: [
        defineField({
            name: 'Endereco_da_imagem',
            label: 'Endereço da imagem',
            type: 'image',
        }),
        defineField({
            name: 'Nome_da_empresa',
            label: 'Nome da empresa',
            type: 'string',
        }),
        defineField({
            name: 'Link_Google_Maps',
            label: 'Link Google Maps',
            type: 'url',
        }),
    ],
})