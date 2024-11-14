import { input } from '@inquirer/prompts'
import { select } from '@inquirer/prompts'

export async function performanceGuilineCommandLine(){

    const projectName = await input({ message: 'Enter your project name: ' })

    const components = await select({
        message: 'Select the components you want us to generate your performance guideline?: ',
        choices: [
        {
            name: 'backend',
            value: 'backend',
            description: 'The test plan will be generated following the component backend'
        },
        {
            name: 'frontend',
            value: 'frontend',
            description: 'The test plan will be generated following the component backend'
        },
        {
            name: 'backend + frontend',
            value: 'backend + frontend',
            description: 'The test plan will be generated following the component backend + frontend'
        }
        ],
    });

    const responseTime = await input({ message: 'Add an average of response time to be achived in milliseconds: ' })

    const userPerMinute = await input({ message: 'Users per minute you want to be peforming the requests: ' })

    return {
        projectName: projectName,
        components: components,
        responseTime: responseTime,
        userPerMinute: userPerMinute
    }
}