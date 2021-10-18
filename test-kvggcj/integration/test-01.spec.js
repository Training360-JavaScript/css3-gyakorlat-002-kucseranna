function unquote(str) {
    return str.replace(/(^")|("$)/g, '');
}

Cypress.Commands.add(
    'before',
    {
        prevSubject: 'element',
    },
    (el, property) => {
        const win = el[0].ownerDocument.defaultView;
        const before = win.getComputedStyle(el[0], 'before');
        return unquote(before.getPropertyValue(property));
    },
);

Cypress.Commands.add(
    'after',
    {
        prevSubject: 'element',
    },
    (el, property) => {
        const win = el[0].ownerDocument.defaultView;
        const after = win.getComputedStyle(el[0], 'after');
        return unquote(after.getPropertyValue(property));
    },
);

describe('Ellenőrzések', () => {
    it('1. szelektor', () => {
        cy.visit('');
        cy.get('body').should('have.css', 'font-family', 'Poppins, sans-serif');
    });
    
    it('2. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__sidebar')
            .should('have.css', 'position', 'fixed');
        cy.get('body .menu__sidebar')
            .should('have.css', 'display', 'flex');
    });
    
    it('3. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__content')
            .should('have.css', 'position', 'fixed');
        cy.get('body .menu__content')
            .should('have.css', 'z-index', '9');
    });
    
    it('4. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__items')
            .should('have.css', 'font-size', '32px');
    });
    
})