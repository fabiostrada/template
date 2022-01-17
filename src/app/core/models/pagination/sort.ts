import { SortDirection } from "@angular/material/sort";

export class Sort {

    constructor(public sort: string,
                public order: SortDirection) {
    }

}