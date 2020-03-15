export default{
    clickOnImg(img){
        cy.contains(img).click();
    },
    clickonimg2(){
        cy.get('div[class="fullImageLink"]').click()
    }
}