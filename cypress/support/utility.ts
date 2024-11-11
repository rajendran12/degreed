
class Utility {
    //Execute Your Tests on different environment using Environment Variables in Cypress
    getBaseUrl() {
        let url = Cypress.env('ENV');
        if (url == 'prod')
            return "https://www.github.com";
        else if (url == 'qa')
            return "https://qa.github.com";
        else if (url == 'stg')
            return "https://stg.github.com";
        else
            return "https://www.github.com";
    }
}

export default new Utility