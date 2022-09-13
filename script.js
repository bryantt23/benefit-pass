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

console.log(JSON.stringify(steps, null, 4));

//helper functions
function http_request(url) {
  if (url === 'https://www.example.com') {
    return 'Hello, world!';
  }
  throw Error('Bad url');
}

function string_reverse(string = '') {
  return string.split('').reverse().join('');
}

function string_length(string = '') {
  return string.length;
}

function save_file(filename = '', contents = '') {
  console.log({ filename, contents });
}

function solution(x) {}
