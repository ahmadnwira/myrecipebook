import validators from './validator';

const validate = (data, rules) => {
    const errors = [];

    Object.keys(rules).forEach(fieldName => {

        const fieldVal = data[fieldName];
        const checks = rules[fieldName].split('|');

        checks.forEach( check => {
            const result = validators[check](fieldVal, fieldName);

            if(!result.pass) {
                errors.push(result.err);
            }
        } );
    });
    return errors;
};

console.log(validate({title: 'title'}, {title: 'required'}));

export default validate;