import ora from 'ora';
import chalk from 'chalk';
import readline from 'node:readline';
import pdfModel from './pdf/pdf-model.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const text1 = 'Add your project name: ';
rl.question(`${chalk.red(text1)}`, projectName => {

	let docDefinition = {
        content: [
        `Test Plan for ${projectName}`,
        '',
        'Browsers to be supported: CHROME || FIREFOX || SAFARI',
        '',
        'Resolutions options: Iphone16 || Ipad || Laptop',
        '',
        'Acessibility requirements: (WCAG) 2.1',
        '',
        'Security options: Guarantee users can access their own information'
    ]};

  pdfModel(docDefinition)

  const spinner =  ora(chalk.red('PDF is being created in the root of this project!!!')).start();

   setTimeout(() => {
		spinner.color = 'green';
		spinner.text = 'PDF has been created successfully!!';
	}, 1000);

  rl.close();
});








