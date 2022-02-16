import { BaseApi } from './base';

export class PortfolioApi extends BaseApi {
    private itemContentType = 'portfolioItem';

    async getPortfolioItems() {
        return this.getEntries({
            content_type: this.itemContentType,
        }).then(this.getItems);
    }
}
