import {defineField, defineType} from 'sanity'

export const revendaType = defineType({
    name: 'revenda',
    title: 'Lojas_de_revenda',
    type: 'document',
    fields: [
        defineField({
            name: 'Endereco_da_imagem',
            type: 'string',
        }),
        defineField({
            name: 'Nome_da_empresa',
            type: 'string',
        }),
        defineField({
            name: 'Link_Google_Maps',
            type: 'string',
        }),
    ],
})