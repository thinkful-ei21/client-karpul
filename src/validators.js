export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';
export const isTrimmed = value =>
    value.trim() === value ? undefined : 'Cannot start or end with whitespace';
export const length = length => value => {
    if (length.min && value.length < length.min) {
        return `Must be at least ${length.min} characters long`;
    }
    if (length.max && value.length > length.max) {
        return `Must be at most ${length.max} characters long`;
    }
};
export const phoneNumber = value => {
    value = value.replace(/-/g, "")
    value = value.trim()
    if(value.length !== 10){
        return "invalid phone number"
    }
    for ( let x = 0; x < value.length; x++){
        if(value.charCodeAt(x) < 48 || value.charCodeAt(x) > 57){
            return "invalid phone number"
        }
    }
    
}
export const matches = field => (value, allValues) =>
    field in allValues && value.trim() === allValues[field].trim()
        ? undefined
        : 'Does not match';
