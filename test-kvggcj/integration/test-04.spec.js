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
    
    it('13. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger--htx span')
            .before('transition-duration')
            .should('eq', '0.3s, 0.3s');
        cy.get('body .menu__hamburger--htx span')
            .after('transition-duration')
            .should('eq', '0.3s, 0.3s');
    });
    
    it('14. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger--htx span')
            .before('transition-property')
            .should('eq', 'top, transform');
    });
    
    it('15. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger--htx span')
            .after('transition-property')
            .should('eq', 'bottom, transform');
    });
    
    it('16. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger--htx').click();
        cy.get('body .menu__hamburger--htx.is-active span')
            .should('have.css', 'background', 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box');
    });
    
})