I have completed the test and I tried to complete all the steps that is written in the file.

# First of all I will explain Backend:
Backend is made in Node.js and I use Express.js as a framework.

-> I use OpenAI API to generate the posts
-> And Axios to fetch/call the API

Imp Note: Please make a folder in backend folder named `Config` and under `Config` make a .env file named `config.env` file and make 2 Keys in it.
`CHATGPT_API=[YOUR API KEY HERE]`,
`PORT=8080`

you can use my API key to test the code.

I try to make professional folder structure to complete the backend.

I create `generatePost.controllers` to control the API end-point and and under `utils` folder there are 3 files
`chatgpt.js` where I config thr OpenAI API
`errorResponse.js` where i handle errors
`generatePost.js` where I make a seperate function which returns the posts that is generated through the API Key.

That's what for Backend.

You can start the backend (if you want to run it seperately) by `npm start`

Server runs on port `8080`

Remember, Do not forget to add `config.env` file under `config` folder.


# Now, Comming to the Front-End

Front end is made in React.js and for styling I use TailwindCSS framework and add some custom styling in `index.css` as well.

Mainly I also use `Redux` to handle State Management and also try to make the coding more easy to understand and try to clean up the coding.

I try to make professional folder structure.

I use 4 folders here 
`assets` there is a font folder in it to add a custom font to make application looks batter
`components` I make some components to re-use it in application
`constants` I use axios for the API calls and for this I make a file to config `axios` baseURL generic
`redux` In this folder I handle the State Management of the application.


At the end you just need to start `npm start` to run both the applications at the same time for this I use `concurrently` which allow us to run multiple application with single command in same terminal.



