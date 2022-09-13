# Workflow Runner

We have a set of actions, each of which takes in some parameters and outputs a value. We’d like to run a particular workflow, which is just a sequence of actions, with a particular set of parameters for each one, and collect their outputs.
The output from one action A can be a parameter to another action B, when this is the case, we say that B depends on A, as B cannot run until A has produced its output.

An example workflow is as follows:

1. Get the text of the web page ’https://www.example.com/’
2. Reverse the string obtained from step 1
3. Write the string obtained from step 2 to file “text.txt”

In this scenario, workflows are specified as graphs (DAG) serialized as json, with actions as nodes, and edges representing dependencies. We want to write a function that can take in the DAG and execute the actions in the correct sequence.

An example graph is below -- this graph the same on that's in tests/graph1.json

```
{
    "steps": {
        "reverse-text": {
            "type": "reverse-string",
            "args": {
                "string": {
                    "type": "reference",
                    "step": "get-text"
                }
            }
        },
        "get-text": {
            "type": "http-request",
            "args": {
                "url": {
                    "type": "value",
                    "value": "https://www.example.com"
                }
            }
        },
        "save-file": {
            "type": "save-file",
            "args": {
                "filename": {
                    "type": "value",
                    "value": "/foo.txt"
                },
                "contents": {
                    "type": "reference",
                    "step": "reverse-text"
                }
            }
        }
    }
}
```

Your solution should be able to run the graph above with `solution('./tests/graph1.json')`, which should produce the following output:

```
running get-text
running reverse-text
running save-file
Got filename /foo.txt
Got contents !dlrow ,olleH
```
