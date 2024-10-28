import pdfModel from './pdf/pdf-model.js'
import { getPDFContent } from './pdf/models/template.js'

let pdfContent = getPDFContent('My project', 'backend')
pdfModel(pdfContent)