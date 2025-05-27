
describe('Sign-up',()=>{
it ('sign Up as main positive test case',()=>{
cy.visit('https://pdf-qa.valortech.co.mz');
//cy.visit('https://pdf-qa.valortech.co.mz/auth/sign-up', { failOnStatusCode: false });// //here we have to figure out why we are not diretly redirecting to sign up page 
 
cy.get('.loginLink').click();
cy.url().should('include', '/auth/sign-up'); 
 cy.get('#email').type('muqadasjaved101+test23@gmail.com');
 cy.get('#password').type('Qaaa@2222');
 cy.get('#c_password').type('Qaaa@2222');
 cy.get("input[type='checkbox']").check(); //check box 
 cy.contains('Sign Up').click();
  cy.get('#company-type').click()
  cy.get('li').contains('Corporate').click();      //dropdown with select option 
  // cy.get('#company-type').should('contain', 'Corporate');//
 cy.get('input[name="Company Name"]').type('dm1 company');
 cy.get('input[name="NUIT Number"]').type('254822035');
 cy.get('input[name="Commercial Registration Number"]').type('32593239523');
 cy.get('input[name="Company Address"]').type('lahoree street 11');
 cy.contains('Submit').click();
 cy.get('.logout-btn').click();
 


 
})
it('visit to admin and accept company',()=>{

    cy.visit('https://pdf-qa-admin.valortech.co.mz/');
  cy.get('#email').type('admin@volartech.co');
 cy.get('#password').type('Test@1234');
 cy.contains('Login').click();
})
})


