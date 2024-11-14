export function createCommonPDFContentPerformanceGuideline(projectName, component, responseTime, userPerMinute) {
    return [
        { 
            text: `Performance Guideline for ${projectName}`, 
            style: 'header'
        },
        { 
            canvas: [
                { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2, lineColor: '#1c324a' }
            ], 
            margin: [0, 0, 0, 10]
        },
        { 
            text: 'This Performance Guideline defines the performance standards and guide the team towards the metrics of the application\n', 
            style: 'subheader',
        },
        {text: '\n\nTable of Content', style: 'header'},
        { 
            canvas: [
                { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2, lineColor: '#1c324a' }
            ], 
            margin: [0, 0, 0, 10]
        },
        {
			ol: [
			    'Components from this Peformance Guideline: ',
			        {ul: [`Components: ${component}`, `Response time per request: ${responseTime}`,  `Users per minute: ${userPerMinute}`], margin: [0, 5]}
			],
			style: 'sectionTitle'
		}
    ];
}