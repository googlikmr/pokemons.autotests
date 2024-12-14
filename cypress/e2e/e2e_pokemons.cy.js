describe('Проверка авторизации', function () {

 
    it('Верный пароль и верный логин', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
         cy.get('#password').type('USER_PASSWORD');
         cy.get('.auth__button').click();
         cy.get('.header__container > .header__id').click();
         cy.get('[href="/shop"]').click();
         cy.wait(2000);
         cy.get('.available > button').first().click();
         cy.wait(500);
         cy.get('.credit').type('4111111111111111');
         cy.wait(500);
         cy.get('.k_input_date').type('0925');
         cy.get('.k_input_ccv').type('125');
         cy.get('.k_input_name').type('german dolnikov');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__adv').click();
     })
     
 })