/// <reference types="cypress" />
import apiKey from '../applitools/applitools.config'
import searchpage from '../page-objects/searchpage'
import searchpageresult from '../page-objects/searchresultspage'
import redirect from '../page-objects/redirectpage1'
import eyes from '../helpers/eyes'
import 'cypress-file-upload';
import searchresultspage from '../page-objects/searchresultspage';
import verificationmeg from '../verificationsmessages/verifysearchresultsmessages'

context('searchimage1', () => {
  beforeEach(() => {
    cy.visit('/?hl=en')

    cy.fixture("eye.json", "binary").then(data => {

      eyes.eyesOpen(data.appname, data.batchname)
    })

  })

  it('Verify search by image url ', () => {
    searchpage.clickCamerabutton();
    cy.fixture("search.json", "binary").then(data => {

      searchpage.insertUrl(data.imgurl)
      searchpage.clickSearchByImage()
      searchpageresult.getResultsfromUrlInsert(data.index)
    })
    cy.fixture("redirect.json", "binary").then(data => {
      redirect.clickOnImg(data.revalid)
    })
    cy.fixture("eye.json", "binary").then(data => {
      eyes.eyesCheck(data.Click)
    })

    eyes.eyesClose()

  })


  it('Verify search by image url and opening wrong image', () => {

    searchpage.clickCamerabutton()

    cy.fixture("search.json", "binary").then(data => {

      searchpage.insertUrl(data.imgurl)
      searchpage.clickSearchByImage()
      searchpageresult.getResultsfromUrlInsert(data.index)
    })
    cy.fixture("redirect.json", "binary").then(data => {
      redirect.clickOnImg(data.reinvalidimg)
    })

    cy.fixture("eye.json", "binary").then(data => {
      eyes.eyesCheck(data.Myplane)
    })

    eyes.eyesClose()

  })


  it('Verify inserting url in invalid format', () => {

    searchpage.clickCamerabutton()
    cy.fixture("search.json", "binary").then(data => {

      searchpage.insertUrl(data.invalidimgurl)

    })

    searchpage.clickSearchByImage()
    searchpageresult.checkInvalidUplMeg(verificationmeg.versearchwithinvalidurl)

  })

  it('Verify images are added correctly in the chip', () => {
    searchpage.clickCamerabutton()
    searchpage.clickUploadImage

    cy.fixture("search.json", "binary").then(data => {
      searchpage.uploadimg(data.imgupload)
      searchpageresult.checkChip(data.imgupload)
    })




  })

  it('Verify upload image with invalid format', () => {

    searchpage.clickCamerabutton()
    searchpage.clickUploadImage()

    cy.fixture("search.json", "binary").then(data => {
      searchpage.uploadimg(data.invalidimgupload)
    })

    searchpageresult.checkInvalidUplMeg(verificationmeg.versearchwithinvalidupload)

  })


  it('Verify images with different formats in thei example JPG', () => {
    searchpage.clickCamerabutton()
    searchpage.clickUploadImage()
    cy.fixture("search.json", "binary").then(data => {
      searchpage.uploadimg(data.imguploadjpg)
      searchpageresult.checkChip(data.imguploadjpg)
      searchpageresult.getResultsfromImageUpload(data.index)
    })

  })

  it('Verify Images Search by inserting text', () => {
    //searchpage.clickCamerabutton()
    // cy.get('input[type="text"]').type("cars")
    cy.fixture("search.json", "binary").then(data => {
      searchpage.typeSearch(data.txtsearch)
      // cy.get('button[aria-label="Google Search"]').click({force:true})
      searchpage.clickGoogleSearch()
    })
    cy.fixture("eye.json", "binary").then(data => {

      eyes.eyesCheck(data.PlanesSerach)

    })


    eyes.eyesClose()

  })

})
