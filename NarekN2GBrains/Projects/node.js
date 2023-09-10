/** automatically adds slide then we upload image to 'projectImage' direction
 * just run this code in terminal with this command --> node node.js 
 * make sure the terminal is open in the same folder as node.js
*/

const fs = require('fs');

const imagePath = '../image/projectImage';

const works = [];

fs.readdir(imagePath, (error, files) => {

    if (error) {
        console.error(`Error reading direction: ${error}`);
    }

    files.map((file, i) => {

        works.push({

            workName: `Example${i + 1}`,
            description: `Description about Example${i + 1}`,
            url: `${imagePath}/${file}`,

        });

    });

    const fileContent = `const works=${JSON.stringify(works, null, 2)};
    export default works;
    `;

    const fileName = `works.js`;

    fs.writeFile(fileName, fileContent, 'utf-8', error => {

        if (error) {
            console.error(`Error creating file: ${error}`);
        } else {
            console.log(`${fileName} created successfuly!!`);
        }

    });

});