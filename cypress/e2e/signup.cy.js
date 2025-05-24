
describe('Sign-up',()=>{
it ('positive test case',()=>{
cy.visit('https://pdf-qa.valortech.co.mz');
//cy.visit('https://pdf-qa.valortech.co.mz/auth/sign-up', { failOnStatusCode: false });// //here we have to figure out why we are not diretly redirecting to sign up page 
 
cy.get('.loginLink').click();
cy.url().should('include', '/auth/sign-up'); 
 cy.get('#email').type('muqadasjaved101+testno2@gmail.com');
 cy.get('#password').type('Qaaa@2222');
 cy.get('#c_password').type('Qaaa@2222');
 cy.get("input[type='checkbox']").check(); //check box 
 cy.contains('Sign Up').click();
  cy.get('#company-type').click()
  cy.get('li').contains('Corporate').click();      //dropdown with select option 
  // cy.get('#company-type').should('contain', 'Corporate');//
 cy.get('input[name="Company Name"]').type('mine company');
 cy.get('input[name="NUIT Number"]').type('239812095');
 cy.get('input[name="Commercial Registration Number"]').type('23941209523');
 cy.get('input[name="Company Address"]').type('lahoree street 11');
 cy.contains('Submit').click();
 

 
})
})


