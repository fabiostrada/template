import { HttpResponse } from "@angular/common/http";
import { Results } from "../models/pagination/results";

export const toResults = <T>(httpResponse: HttpResponse<Array<T>>): Results<T> => {
    if (!httpResponse || !httpResponse.body) {
        return new Results(0, []);
    }
    if (!httpResponse.headers) {
        throw new Error('Headers is undefined');
    }
    let totalCount: string | null = httpResponse.headers.get('X-Total-Count');
    if (!totalCount) {
        throw new Error('X-Total-Count is not present into headers of api');
    }
    return new Results(+totalCount, httpResponse.body);
}
