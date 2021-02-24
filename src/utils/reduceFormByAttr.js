export const reduceFormByAttr = (attr, form) => Object.values(form).reduce((acc, current) => {
    const key = current[attr];
    if (key) {
        return {
            ...acc,
            [key]: current.value
        };
    }
    return acc;
}, {});