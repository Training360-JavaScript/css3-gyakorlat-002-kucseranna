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
    
    it('5. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__item')
            .should('have.css', 'list-style', 'outside none none');
    });
    
    it('6. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__item-link')
            .should('have.css', 'text-decoration', 'none solid rgb(85, 85, 85)');
    });
    
    it('7. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger')
            .should('have.css', 'cursor', 'pointer');
        cy.get('body .menu__hamburger')
            .should('have.css', 'appearance', 'none');
    });
    
    it('8. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger span')
            .should('have.css', 'position', 'absolute');
        cy.get('body .menu__hamburger span')
            .should('have.css', 'height', '5px');
    });
    
})