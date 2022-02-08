# Node.js HTTP Server Exam

## Task description

We want to create a file server using Node.js. 
Please implement the following steps to do this:

1. Create a function that return a `http.Server` and follow the guidelines below.
2. Serve the text of the file `testText.txt` in the body of the HTTP response 
when a GET request is made to the '/' route.
3. Parse the request for a "paragraphs" parameter. 
That parameter must be an integer and represent the number of 
paragraph you want to receive starting from the beginning of the test text. 
Return the appropriate content in the body of the response.
4. If any error happens, return a 500 error.
5. If the provided route is not known, return a 404 error.

## Hints

* Reading and running the automated tests in the `*.spec.js` file is extremely helpful. 
* Run the tests multiple times to make sure everything works.
