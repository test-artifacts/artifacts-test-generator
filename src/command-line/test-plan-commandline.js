import { input } from '@inquirer/prompts'
import { select, confirm } from '@inquirer/prompts'

export async function testPlanCommandLine(){

    const projectName = await input({ message: 'Enter your project name: ' })

    const components = await select({
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

    let browsers = 'none';
    if (components != 'backend'){
         browsers = await select({
            message: 'Select the browsers you need to test: ',
            choices: [
            {
                name: 'chrome',
                value: 'chrome'
            },
            {
                name: 'firefox',
                value: 'firefox'
            },
            {
                name: 'safari',
                value: 'safari',
            },
            {
                name: 'chrome + firefox + safari',
                value: 'chrome + firefox + safari',
            }
            ],
        });
    }

    const answerPdfGeneration = await confirm({ message: 'Should we generate the test plan for you?' });

    return {
        answerPdfGeneration:  answerPdfGeneration,
        projectName: projectName,
        components: components,
        browsers: browsers
    }
}