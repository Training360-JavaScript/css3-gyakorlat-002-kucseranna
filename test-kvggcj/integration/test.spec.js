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
    
    /* it('8. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger').focus();
        cy.get('body .menu__hamburger:focus')
            .should('have.css', 'outline', 'none');
    }); */
    
    it('9. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger span')
            .should('have.css', 'position', 'absolute');
        cy.get('body .menu__hamburger span')
            .should('have.css', 'height', '5px');
    });
    
    it('10. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger span')
            .before('width')
            .should('eq', '40px');
        cy.get('body .menu__hamburger span')
            .after('width')
            .should('eq', '40px');
    });
    
    it('11. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger span')
            .before('top')
            .should('eq', '-15px');
    });
    
    it('12. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger span')
            .after('bottom')
            .should('eq', '-15px');
    });
    
    it('13. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger--htx span')
            .should('have.css', 'transition', 'background 0s ease 0.3s');
    });
    
    it('14. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger--htx span')
            .before('transition-duration')
            .should('eq', '0.3s, 0.3s');
        cy.get('body .menu__hamburger--htx span')
            .after('transition-duration')
            .should('eq', '0.3s, 0.3s');
    });
    
    it('15. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger--htx span')
            .before('transition-property')
            .should('eq', 'top, transform');
    });
    
    it('16. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger--htx span')
            .after('transition-property')
            .should('eq', 'bottom, transform');
    });
    
    it('17. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger--htx').click();
        cy.get('body .menu__hamburger--htx.is-active span')
            .should('have.css', 'background', 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box');
    });
    
    it('18. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger--htx').click();
        cy.get('body .menu__hamburger--htx.is-active span')
            .before('transform')
            .should('eq', 'matrix(1, 0, 0, 1, 0, 0)');
    });
    
    it('19. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger--htx').click();
        cy.get('body .menu__hamburger--htx.is-active span')
            .after('transform')
            .should('eq', 'matrix(1, 0, 0, 1, 0, 0)');
    });
    
    it('20. szelektor', () => {
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