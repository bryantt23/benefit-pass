const steps = {
  steps: {
    'reverse-text': {
      type: 'reverse-string',
      args: {
        string: {
          type: 'reference',
          step: 'get-text'
        }
      }
    },
    'get-text': {
      type: 'http-request',
      args: {
        url: {
          type: 'value',
          value: 'https://www.example.com'
        }
      }
    },
    'save-file': {
      type: 'save-file',
      args: {
        filename: {
          type: 'value',
          value: '/foo.txt'
        },
        contents: {
          type: 'reference',
          step: 'reverse-text'
        }
      }
    }
  }
};

console.log(steps);
