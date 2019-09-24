import {paramFilter} from './helper';
import Action from './Action';
import ActionError from './ActionError';

export default (type, responseType, errorType) => {
    const typeFiltered = paramFilter(type);
    const defaultResponseType = `${typeFiltered[0]}_RESPONSE`;
    const defaultErrorType = `${typeFiltered[0]}_ERROR`;
    const rt = (typeof responseType === 'function' ? [defaultResponseType, responseType] : responseType) || defaultResponseType;
    const et = (typeof errorType === 'function' ? [defaultErrorType, errorType] : errorType) || defaultErrorType;
    const action = Action(...typeFiltered);
    const response = Action(...paramFilter(rt));
    const error = ActionError(...paramFilter(et));
    return {
        action,
        response,
        error
    };
};