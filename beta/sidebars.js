module.exports = {
  mySidebar: [
    'getting-started',
    {
      type: 'category',
      label: '파이썬',
      items: [
        {
          type: 'category',
          label: '시작하기',
          items: [
            {
              type: 'autogenerated',
              dirName: 'python/1-start',
            },
          ],
        },
        {
          type: 'category',
          label: '데이터 타입',
          items: [
            {
              type: 'autogenerated',
              dirName: 'python/2-data-types',
            },
          ],
        },
        {
          type: 'category',
          label: '데이터 플로우',
          items: [
            {
              type: 'autogenerated',
              dirName: 'python/3-data-flow',
            },
          ],
        },
      ],
    },
  ],
};
