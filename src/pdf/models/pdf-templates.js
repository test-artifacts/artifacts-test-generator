import { createCommonPDFContentTestPlan } from './test-plan-template.js'
import { createCommonPDFContentPerformanceGuideline } from './performance-guideline-template.js'

function createPDFStyles() {
    return {
        header: {
            fontSize: 24,
            bold: true,
            color: '#1c324a',
            margin: [0, 20, 0, 10],
            alignment: 'center'
        },
        subheader: {
            fontSize: 19,
            italics: true,
            color: '#1c324a',
            margin: [0, 20, 0, 20]
        },
        sectionTitle: {
            fontSize: 16,
            bold: true,
            color: '#1c324a',
            margin: [0, 4, 0, 5]
        },
        listItem: {
            fontSize: 12,
            color: '#333',
            margin: [0, 0, 0, 5]
        },
        tableExample: {
            margin: [20, 20, 20, 20]
        }
    };
}

export function getPDFContentForServerTestPlan(projectName, component, browsers) {
    let pdfContent = {
        content: createCommonPDFContentTestPlan(projectName, component, browsers),
        styles: createPDFStyles(),
        defaultStyle: {
            font: 'Helvetica'
        }
    };

    return pdfContent;
}

export function getPDFContentForServerPeformanceGuideline(projectName, component, responseTime, userPerMinute) {
    let pdfContent = {
        content: createCommonPDFContentPerformanceGuideline(projectName, component, responseTime, userPerMinute),
        styles: createPDFStyles(),
        defaultStyle: {
            font: 'Helvetica'
        }
    };

    return pdfContent;
}

export function getPDFContentForServerTestPlanForClient(projectName, component, browsers) {
    let pdfContent = {
        content: createCommonPDFContentTestPlan(projectName, component, browsers),
        styles: createPDFStyles()
    };

    return pdfContent;
}

export function getPDFContentForServerPeformanceGuidelineForClient(projectName, component, responseTime, userPerMinute) {
    let pdfContent = {
        content: createCommonPDFContentPerformanceGuideline(projectName, component, responseTime, userPerMinute),
        styles: createPDFStyles()
    };

    return pdfContent;
}