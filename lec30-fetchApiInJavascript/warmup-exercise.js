import fs from 'fs-extra';

const result = fetch('https://www.craigslist.org/about/');

result.then((response) => {
    const html =  response.text();
    html.then((html) => {
        fs.outputFileSync("hello.html", html);
    })
})