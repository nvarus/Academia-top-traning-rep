const isFeatcing: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2

const message: string = 'Hello Typescript'

const numArray: number[] = [1, 1, 2, 3, 5, 8]
const numberArray: Array<number> = [1, 1, 2, 3, 5, 8]

const words: string[] = ['Hello', 'Typescript']

// Tuple
const contact: [string, number] = ['Alex', 123456789]

//Any
let variable: any = 42

variable = 'Ha-ha'

function sayMyMane (name: string): void {
    console.log(name)
}
sayMyMane('Хайзенберг')

// Never

// function throwError(massage: string): never {
//     for(let i = 0; i < 10; i++) {
//         if (i === 5) {
//             throw new Error(message)
//         }
//     }
// }

// Type
type Login = string

const login: Login = 'admin'

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'
const id3: ID = true