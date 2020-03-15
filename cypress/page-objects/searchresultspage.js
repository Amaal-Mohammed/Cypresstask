export default{

    getResultsfromUrlInsert(i){
        cy.get('a[href*="homepages.cae.wisc.edu/~ece533/images"]').each(($el, index, $list) => {
            cy.log(`index: ` + index);
            if (index === i) {
              cy.wrap($el)
                .click({ force: true });
            }
          });
          cy.wait(1000);
    },
    getResultsfromImageUpload(i){
     let urll=""
        cy.get('div[class="chip_text"]').contains("download.jpg");
        cy.get('a[href*="https://commons.wikimedia.org/"]').each(($el, index, $list) => {
          cy.log(`index: ` + index);
          if (index === i) {
            urll = $el.attr('href');
            cy.writeFile('url.txt', urll)
          }
        });
    },
    checkChip(img){
        cy.get('div[class="chip_text"]').contains(img);

    },
    checkInvalidUrlMeg(meg){
      cy.contains(meg)
    },
    checkInvalidUplMeg(meg){
      cy.contains(meg);

    }


}