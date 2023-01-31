const Lodash = require('./sync')

describe('Lodash: compact', () => {
	
	const _ = new Lodash()
	
	test('should be defined', () => {
		expect(_.compact).toBeDefined()
		expect(_.compact).not.toBeDefined()
	})
})