export const isNotEmpty = <T>(array: Array<T>): boolean => {
    return !!array && array.length > 0;
}

export const isNullOrEmpty = <T>(array: Array<T>): boolean => {
    return !array || array.length == 0;
}