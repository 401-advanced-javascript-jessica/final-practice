export default (state = [], {type, payload}) => {
    switch(type) {
        case 'PETS_CREATE':
            return payload;
        default:
            return state;
    }
};