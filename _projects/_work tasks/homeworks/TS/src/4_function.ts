function add(a: number, b:number): number {
	return a + b
}

function  toUpperCase(str: string): string {
	return str.trim().toUpperCase()
}

interface MyPosition {
	x: number | undefined
	Y: number | undefined
}


function position(): MyPosition
function position(a: number):