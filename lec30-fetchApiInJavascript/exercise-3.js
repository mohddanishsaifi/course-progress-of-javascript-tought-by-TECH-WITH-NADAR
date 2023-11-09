import fs from 'fs/promises';

const url = "https://w.wallhaven.cc/full/jx/wallhaven-jxlwpm.jpg";

const response = fetch(url);

response.then((responseObject)=> responseObject).then( async(parseObject) => {
    

            const imageBlob = await parseObject.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);

            
    fs.writeFile('./exercise.jpg', imageObjectURL, (err) => {
        console.log(err);
    });
})