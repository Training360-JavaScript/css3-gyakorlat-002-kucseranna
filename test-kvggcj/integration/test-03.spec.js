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
    
    it('9. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger span')
            .before('width')
            .should('eq', '40px');
        cy.get('body .menu__hamburger span')
            .after('width')
            .should('eq', '40px');
    });
    
    it('10. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger span')
            .before('top')
            .should('eq', '-15px');
    });
    
    it('11. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger span')
            .after('bottom')
            .should('eq', '-15px');
    });
    
    it('12. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger--htx span')
            .should('have.css', 'transition', 'background 0s ease 0.3s');
    });

})