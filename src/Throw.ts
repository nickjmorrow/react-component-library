/* tslint:disable:max-classes-per-file */
/* tslint:disable:member-access */
class NotImplementedException extends Error {
    name: string;
    constructor() {
        super();
        this.name = 'NotImplementedException';
        Object.setPrototypeOf(this, NotImplementedException.prototype);
    }
}

class ShouldNeverGetHereException extends Error {
    name: string;

    constructor() {
        super();
        this.name = 'ShouldNeverGetHereException';
        Object.setPrototypeOf(this, ShouldNeverGetHereException.prototype);
    }
}

class ArgumentException extends Error {
    name: string;
    message: string;

    constructor(message?: string) {
        super(message);
        this.name = 'ArgumentException';
    }
}

export class Throw {
    static if: (condition: boolean, message?: string) => void = (condition, message) => {
        if (condition) {
            throw new ArgumentException(message);
        }
    };

    static ifNull: (obj: any, message?: string) => void = (obj, message) => {
        if (obj === null || obj === undefined) {
            throw new ArgumentException(message);
        }
    };

    static notImplementedException: () => never = () => {
        throw new NotImplementedException();
    };

    static shouldNeverGetHereException: () => never = () => {
        throw new ShouldNeverGetHereException();
    };
}
