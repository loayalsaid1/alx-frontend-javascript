interface Teacher {
	readonly firstName: string
	readonly lastName: string
	fullTimeEmployee: boolean
	yearsOfExperience?: number
	location: string[]
	[property: string]: unknown
}

interface Directors extends Teacher {
	numberOfReports: number
}

interface PrintTeacherFunction {
    (firstName: string, lastName: string): string
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    return `${firstName.slice(0, 1)}. ${lastName}`
}
