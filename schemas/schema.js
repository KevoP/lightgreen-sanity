// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: 'author',
      type: 'document',
      title: 'Author',
      fields: [
        {
          name: "name", 
          title: "Author", 
          type: "string"
        },
        {
          name: "avatar", 
          title: "Avatar", 
          type: "image"
        },
      ]
    },
    {
      name: 'blog',
      type: 'document',
      title: 'Blog',
      fields: [
        {
          name: 'title', 
          type: 'string',
          title: 'Title',
          validation: Rule => Rule.required().min(5).max(50).warning('Title must be between 5 and 50 characters'),
        },
        {
          name: 'subtitle', 
          type: 'string',
          title: 'Subtitle'
        },
        {
          name: 'slug',
          type: 'slug',
          title: 'Slug'
        },
        {
          name: 'coverImage',
          title: 'Cover Image',
          type: 'image',
          fields:[
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              options: {
                isHighlighted: true
              }
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alt',
              options: {
                isHighlighted: true
              }
            }
          ]
        },
        {
          name: 'author',
          title: 'Author',
          type: 'reference',
          validation: (Rule) => { return Rule.required(); },
          to: [
            {type: 'author'}
          ]
        },
        {
          name: 'date',
          title: 'Date',
          type: 'datetime',
          validation: (Rule) => { return Rule.required(); },
        },
        {
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [
            {
              type: 'block',
            },
            {
              type: 'image',
              fields: [
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                  options: {
                    isHighlighted: true
                  }
                },
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alt',
                  options: {
                    isHighlighted: true
                  }
                },
                {
                  title: "Position",
                  name: "position",
                  type: "string",
                  options: {
                      list: [
                          {title:"Center", value: "center"},
                          {title: "Left", value: "left"},
                          {title: "Right", value: "right"}
                      ],
                      layout: 'dropdown',
                      isHighlighted: true
                  }  
                }
              ]
            },
          ]
        }
      ]
    }
  ])
})
