const reco = {
    name: 'reco',
    title: 'reco',
    type: 'document',
    fields: [
        {
            name: 'name', 
            title: 'Name',
            type: 'string'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: "block"}]
        },
    ]
}

export default reco