const defAction = (payload = {}) => payload;
export default (type, action = defAction) => {
    if(typeof action !== 'function') {
        throw new Error('action must be function');
    }
    if(typeof type !== 'string') {
        throw new Error('type must be string');
    }
    const func = (...args) => ({type, ...action(...args)});
    func.type = type;
    return func;
}
