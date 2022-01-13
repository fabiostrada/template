import { ErrorCode } from "../configs/error-code";
import { TypeError } from "../configs/error-type";

export class Exception extends Error {
    constructor(public type: TypeError,
                public errorCode?: string | undefined) {
        super();
        if (!!errorCode) {
            this.errorCode = ErrorCode.common.errors.undefined;
        }
    }
}

export class BadRequestException extends Exception {
    constructor(public override errorCode?: string) {
        super(TypeError.BAD_REQUEST, errorCode)
    }
}

export class NotFoundException extends Exception {
    constructor(public override errorCode?: string) {
        super(TypeError.NOT_FOUND, errorCode)
    }
}

export class NotAuthorizedException extends Exception {
    constructor(public override errorCode?: string) {
        super(TypeError.NOT_AUTHORIZED, errorCode)
    }
}

export class ForbiddenException extends Exception {
    constructor(public override errorCode?: string) {
        super(TypeError.FORBIDDEN, errorCode)
    }
}

export class InternalServerException extends Exception {
    constructor(public override errorCode?: string) {
        super(TypeError.INTERNAL_SERVER_ERROR, errorCode)
    }
}

export class ServerUnavailableException extends Exception {
    constructor(public override errorCode?: string) {
        super(TypeError.SERVER_UNAVAILABLE, errorCode)
    }
}