import Action from './Action';

const defError = (error) => error !== undefined ? {error} : {};
export default (type, error = defError) => {
    if(typeof error !== 'function') {
        throw new Error('error must be function');
    }
    return Action(type, error);
}
