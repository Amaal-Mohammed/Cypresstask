export default {

    eyesOpen(apname, bname) {
        cy.eyesOpen({
            appName: apname,
            batchName: bname,
            browser: [

                { name: 'chrome', width: 1024, height: 798 },


            ]
        })
    },

    eyesClose() {
        cy.eyesClose()
    },

    eyesCheck(text) {
        cy.eyesCheckWindow(text);
    }
}