import { Base } from "../models/base";
import { Hash } from "../models/hash";

export const isNotEmpty = <T>(array: Array<T>): boolean => {
    return !!array && array.length > 0;
}

export const isNullOrEmpty = <T>(array: Array<T>): boolean => {
    return !array || array.length == 0;
}

export const getOrEmptyArray = <T>(array: Array<T>): Array<T> => {
    return isNotEmpty(array) ? array:[];
}

export const arrayToHash = <T extends Base>(array: Array<T>): Hash<T> => {
    if (isNullOrEmpty(array)) {
        return {};
    }
    let hash: Hash<T> = {};
    array.forEach(item => {
        if (!!item.id) {
            hash[item.id] = item;
        }
        
    })
    return hash;
}
