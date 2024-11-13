import { select, confirm } from '@inquirer/prompts'
import { pdfModelServer } from '../pdf/pdf-model-server.js'
import { getPDFContentForServerTestPlan, getPDFContentForServerPeformanceGuideline } from '../pdf/models/pdf-templates.js'
import { performanceGuilineCommandLine } from './test-performance-commandline.js'
import { testPlanCommandLine } from './test-plan-commandline.js'

export async function entryCommandLine(){

    const testArtifacts = await select({
        message: 'Select the Test Artifact you want to generate: ',
        choices: [
        {
            name: 'Test Plan',
            value: 'test-plan',
            description: 'You will be redirected to the Test Plan Artifact'
        },
        {
            name: 'Peformance Guideline',
            value: 'performance-guideline',
            description: 'You will be redirected to the Performance Guideline Artifact'
        }
        ],
    });

    let answer
    if (testArtifacts == 'test-plan'){
        answer = await testPlanCommandLine()

        const answerPdfGeneration = await confirm({ message: 'Should we generate the test plan for you?' });

        if(answerPdfGeneration === true){
            let pdfContent = getPDFContentForServerTestPlan(answer.projectName, answer.components, answer.typeOfInterfaceApplication)
            pdfModelServer(pdfContent, testArtifacts)
        }
    }

    if (testArtifacts == 'performance-guideline'){

        answer = await performanceGuilineCommandLine()

        const answerPdfGeneration = await confirm({ message: 'Should we generate the performance guideline for you?' });

        if(answerPdfGeneration === true){
            let pdfContent = getPDFContentForServerPeformanceGuideline(answer.projectName, answer.components, answer.responseTime, answer.userPerMinute)
            pdfModelServer(pdfContent, testArtifacts)
        }
    }
}