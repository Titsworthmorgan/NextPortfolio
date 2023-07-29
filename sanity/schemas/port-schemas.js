const project = {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'name', 
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug', 
            title: 'Slug',
            type: 'slug',
            options: {source: 'name'}
        },
        {
            name: 'content',
            title: 'Content',
            type: 'string',
        },
        {
            name: 'url',
            title: 'URL',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                name: 'alt',
                title: 'Alt',
                type: 'string'
                },
            ]
        },
        {
            name: 'tech',
            title: 'Tech',
            type: 'array',
            of: [
              {
                title: 'tech',
                type: 'object',
                fields: [
                  {
                    name: 'label',
                    title: 'Label', 
                    type: 'string'
                  }
                ]
              }
            ]
        },
    ],

}


export default project