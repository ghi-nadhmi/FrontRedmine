import { Injectable } from '@angular/core';

import { SearchObject, Sort, Pagination } from '../entites';

@Injectable({ providedIn: 'root' })
export class SearchObjectTreatment {

    constructor() {
    }

    public treatementSearchObject(limit: Number, offSet: Number, nameCol: String, direction: String): SearchObject {
        let searchObject;
        searchObject  = new SearchObject();
        if (limit !== null) {
            let pagination: Pagination = new Pagination();
            pagination.limit = limit;
            pagination.offSet = offSet;
            searchObject.pagination = pagination;
        }

        if (nameCol !== null && direction !== null) {
            /*var sort: Sort = new Sort(null, null);
            sort.direction = direction;
            sort.nameCol = nameCol;*/
            searchObject.sort = new Sort(nameCol, direction);
        }

        return searchObject;
    }
}
