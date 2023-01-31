const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'hello Typescript'

const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const numberArray2: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const words: string[] = ['Hello', 'Typescript']

//Tuple
const contact: [string, number] = ['Alexey', 1234567]

//Any
let variable: any = 42
// ...
variable = 'New String'
variable = []

//====
function sayMyName(name: string): void {
	console.log(name)
}

sayMyName('Гейзенберг')

//Never

function throwError(message: string) {
	for (let i = 0; i < 10; i++) {
		if (i === 5) {
			throw new Error(message)
		}
	}
	
}