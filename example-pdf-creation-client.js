import { pdfModelClient } from './src/pdf/pdf-model-client.js'
import { getPDFContentForServerTestPlanForClient } from './src/pdf/models/pdf-templates.js'

let pdfContent = getPDFContentForServerTestPlanForClient('Google', 'frontend', 'web')
pdfModelClient(pdfContent, 'test-plan')