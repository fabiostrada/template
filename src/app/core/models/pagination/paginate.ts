import { Sort } from "@angular/material/sort";

export class Paginate  {

    constructor(public page: number | undefined = 0,
                public limit: number | undefined = 10,
                public sort: Sort | undefined) {        
    }

    public toString = () : string => {
        return `_page=${this.page}&_limit=${this.limit}`;
    }

}