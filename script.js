const obj = {
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

console.log(JSON.stringify(obj, null, 4));

//goal topological sort
//add steps to an array

//use queue
//get ones that have no steps
//take out the step, remove from args of other steps, repeat
const steps = obj.steps;
const stepsToExecute = [];
const completedSteps = new Set();
for (const key in steps) {
  let hasStepProperty = false;
  const nestedObject = steps[key];
  const argsObject = nestedObject['args'];
  //   console.log('🚀 ~ file: script.js ~ line 51 ~ argsObject', argsObject);
  for (const nestedKey in argsObject) {
    // console.log('🚀 ~ file: script.js ~ line 53 ~ nestedKey', nestedKey);
    const val = argsObject[nestedKey];
    // console.log('🚀 ~ file: script.js ~ line 55 ~ val', val);
    // console.log(Object.keys(val));
    if (Object.keys(val).includes('step')) {
      hasStepProperty = true;
    }
  }
  if (!hasStepProperty) {
    stepsToExecute.push(nestedObject);
  }
}

console.log('🚀 ~ file: script.js ~ line 47 ~ ', stepsToExecute); //gettext
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
