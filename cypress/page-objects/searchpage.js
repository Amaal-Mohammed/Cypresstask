import 'cypress-file-upload';
export default{
  clickCamerabutton(){
    cy.get('span[class="BwoPOe"]').click({ force: true });
  } ,
  insertUrl(myurl){
    cy.get('input[name="image_url"]').type(myurl)
  
  },

  clickSearchByImage(){
    cy.get('input[type="submit"]').click({ force: true })
    cy.wait(1000);
  },
  clickUploadImage(){
    cy.contains("Upload an image").click({ force: true });
  },
  uploadimg(file){
    const fileName = file;
    cy.fixture(fileName).then(fileContent => {
        cy.get('input[type="file"]').upload({ fileContent, fileName, mimeType: 'application/json' });
      });
  },
  clickGoogleSearch(){
    cy.get('button[aria-label="Google Search"]').click({force:true})
  },
  typeSearch(text){
    cy.get('input[type="text"]').type(text)
  }

}