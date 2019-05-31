describe('my first test', () => {
	it('visits the page', () => {
		cy.visit('/');
		cy.contains('component library')
	})
})