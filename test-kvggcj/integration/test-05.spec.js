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
    
    it('17. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger--htx').click();
        cy.get('body .menu__hamburger--htx.is-active span')
            .before('transform')
            .should('eq', 'matrix(1, 0, 0, 1, 0, 0)');
    });
    
    it('18. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger--htx').click();
        cy.get('body .menu__hamburger--htx.is-active span')
            .after('transform')
            .should('eq', 'matrix(1, 0, 0, 1, 0, 0)');
    });
    
    it('19. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger--htx').click();
        cy.get('body .menu__hamburger--htx.is-active span')
            .before('transition-delay')
            .should('eq', '0s, 0.3s');
        cy.get('body .menu__hamburger--htx.is-active span')
            .after('transition-delay')
            .should('eq', '0s, 0.3s');
    });
})