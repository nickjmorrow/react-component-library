export const validateEmail = (email: string): string[] => {
    const errors = [] as string[];
    if (email.indexOf('@') === -1) {
        errors.push('Please enter a valid email');
    }
    return errors;
};

export const isRequired = (input: string, name: string): string[] => {
    const errors = [] as string[];
    if (input.length > 0) {
        return errors;
    }
    errors.push(`Please enter a valid ${name}`);
    return errors;
};
