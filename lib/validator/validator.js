const validators = {};

validators.required = (fieldVal, fieldName) => {
    if(fieldVal) {
        return {pass: true};
    }
    return {pass: false, err: `${fieldName} is required.`};
};

validators.email = (fieldVal, fieldName) => {
    const re = /^([a-z\d-._]+)@([a-z\d-]+)(\.[a-z]{2,6})(\.[a-z]{2,6})?$/i;
    if(re.test(fieldVal)) {
        return {pass: true};
    }
    return {pass: false, err: `${fieldName} is not a valid email.`};
};

validators.isArray = (fieldVal, fieldName) => {
    if(fieldVal instanceof Array && fieldVal.length > 0) {
        return {pass: true};
    }
    return {pass: false, err: `${fieldName} should be an array.`};
};

export default validators;