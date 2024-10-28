import { input } from '@inquirer/prompts'
import { select, confirm } from '@inquirer/prompts'
import pdfModel from './pdf/pdf-model.js'
import { getPDFContent } from './pdf/models/template.js'

const answerName = await input({ message: 'Enter your project name: ' })

const answerComponent = await select({
    message: 'Select the component you want the test plan: ',
    choices: [
      {
        name: 'backend',
        value: 'backend',
        description: 'The test plan will be generated following the component backend',
      },
      {
        name: 'frontend',
        value: 'frontend',
        description: 'The test plan will be generated following the component backend',
      },
      {
        name: 'backend + frontend',
        value: 'backend + frontend',
        description: 'The test plan will be generated following the component backend + frontend',
      }
    ],
  });

const answer = await confirm({ message: 'Should we generate the test plan for you?' });

if(answer === true){
    let pdfContent = getPDFContent(answerName, answerComponent)
    pdfModel(pdfContent)
}