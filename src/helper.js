const paramFilter = (param, expected = ['string', 'function'], minParams = 1) => {
    /* eslint-disable valid-typeof */
    // Punchy stuff. Result would be array of one or two elements with expected types of false
    const result = 
        (       // param IS array, param IS at least required length, param entries matching corresponds expected types
            (   // if false - fall down to singular check; if true - return trimmed array of params
                Array.isArray(param) &&
                param.length > minParams - 1 &&
                param.map((v, i) => i >= expected.length || typeof v === expected[i]).reduce((a, v) => a && v)
            ) ? param.slice(0, expected.length) : false
        )
        ||
        (       // param IS NOT array, param could be singular, param matching expected type
            (   // if false - result false; if true - return array with param in it
                !Array.isArray(param) &&
                minParams <= 1 &&
                typeof param === expected[0]
            ) ? [param] : false
        )
    /* eslint-enable valid-typeof */ 
    if(result === false) {
        // if false throw exception
        const pType = (Array.isArray(param) && `[${param.map(p => typeof p).join(', ')}]`) || typeof param;
        throw new Error(`Param should be ${expected[0]} or array of [${expected.join(', ')}], got ${param} (${pType})`);
    }
    return result.filter(v => v !== undefined);
};

export {paramFilter};
