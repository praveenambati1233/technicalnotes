module.exports = {
  docs: {
    Docusaurus: ['docs/doc1', 'docs/doc2', 'docs/doc3'],
    Features: ['docs/mdx'],
    Programming: [
      'programming/introduction',
      {
        type: 'category',
        label: 'Languages',
        items: [
          {
            type: 'category',
            label: 'Python',
            items: ['programming/languages/python/introduction']
          },
          {
            type: 'category',
            label: 'Java',
            items: ['programming/languages/java/introduction']
          }
        ]
      },
      {
        type: 'category',
        label: 'Data Structure',
        items: [
          'programming/data-structures/introduction',
        ]
      },
      {
        type: 'category',
        label: 'Algorithms',
        items: [
          'programming/algorithms/introduction',
        ]
      }
    ],
    'System Design': [
      {
        type: 'category',
        label: 'Design Patterns',
        items: [
          'system-design/design-patterns/design-pattern-glossary',
          'system-design/design-patterns/singleton'
        ]
      },
      'system-design/introduction'
    ],
    'Cloud Computing': [
      {
        type: 'category',
        label: 'AWS',
        items: ['cloud-computing/aws/aws-glossary',
        'cloud-computing/aws/ec2'
        ]
      },
    ]
  },
};
