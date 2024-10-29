import pdfModel from './src/pdf/pdf-model.js'
import testPlanCommandLine from './src/command-line/test-plan-commandline.js'
import { getPDFContent } from './src/pdf/models/template.js'

/*
this will return the object:
{
  answerPdfGeneration:  answerPdfGeneration,
  projectName: projectName,
  components: components,
  browsers: browsers
}
*/
let answer = await testPlanCommandLine()

if(answer.answerPdfGeneration === true){
    let pdfContent = getPDFContent(answer.projectName, answer.components, answer.browsers)
    pdfModel(pdfContent)
}