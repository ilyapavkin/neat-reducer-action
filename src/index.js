import Action from './Action';
import ActionError from './ActionError';
import Request from './Request';

export default class ActionBuilder {
    constructor(options = {}) {
        this.options = options;
        this.Action = Action;
        this.ActionError = ActionError;
        this.Request = Request;
    }

    action(type, defAction = this.options.defaultAction) {
        return {action: Action(type, defAction)};
    }

    error(type, defError = this.options.defaultError) {
        return {error: ActionError(type, defError)}
    }

    request(type, onResponse = this.options.defAction, onError = this.options.defError) {
        return Request(type, onResponse, onError);
    }
}
