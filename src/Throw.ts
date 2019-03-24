/* tslint:disable:max-classes-per-file */
/* tslint:disable:member-access */
class NotImplementedException extends Error {
  constructor() {
    super();
    Object.setPrototypeOf(this, NotImplementedException.prototype);
  }
}

class ShouldNeverGetHereException extends Error {
  constructor() {
    super();
    Object.setPrototypeOf(this, ShouldNeverGetHereException.prototype);
  }
}

export class Throw {
  static If: (condition: boolean, message?: string) => void = (
    condition,
    message
  ) => {
    if (condition) {
      throw new Error(message);
    }
  };

  static IfNull: (obj: any, message?: string) => void = (obj, message) => {
    if (obj === null || obj === undefined) {
      throw new Error(message);
    }
  };

  static NotImplementedException: () => void = () => {
    throw new NotImplementedException();
  };

  static ShouldNeverGetHereException: () => void = () => {
    throw new ShouldNeverGetHereException();
  };
}
