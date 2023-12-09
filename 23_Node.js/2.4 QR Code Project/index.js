/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs'; 


inquirer
  .prompt([
    {"message": "Enter your URL:" , 'name': 'URL'}
  ])

  .then((answers) => {
    const url = answers.URL;

    var qr_img = qr.image(url);
    qr_img.pipe(fs.createWriteStream('myQr.png'));

    fs.writeFile('url.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })

  .catch((error) => {
    if (error.isTtyError) {
      console.log(error)
      console.log(error.isTtyError)
    } else {
      console.log("I have no idea what just happened! ")
    }
  });

 