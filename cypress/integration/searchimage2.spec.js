/// <reference types="cypress" />
import apiKey from '../applitools/applitools.config'
import eyes from '../helpers/eyes'
import redirect from '../page-objects/redirectpage1'
import 'cypress-file-upload';

context('searchimage2', () => {
  beforeEach(() => {

    cy.readFile('url.txt').then((text) => {
      cy.visit(text)
    })
    cy.fixture("eye.json", "binary").then(data => {

      eyes.eyesOpen(data.appname, data.batchname)
    })

  })


  it('Verify image is Uploaded', () => {
    redirect.clickonimg2()

    cy.fixture("eye.json", "binary").then(data => {
      eyes.eyesCheck(data.verifyimageupload)
    })

    eyes.eyesClose()

  });
})