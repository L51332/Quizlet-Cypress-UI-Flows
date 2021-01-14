describe('Test Mode', () => {
    it('should visit Quizlet Test mode', () => {
        cy.visit('https://www.quizlet.com/415/test');
    });

    it('should show Test mode content', () => {
        cy.visit('https://www.quizlet.com/415/test');
        
    });

});

