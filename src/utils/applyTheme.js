const applyTheme = (theme, classNames) => {
    if (!theme) {
        return classNames;
    }
    const themed = {...classNames};
    Object.keys(classNames).forEach(className => {
        const themedClass = classNames[`${theme}_${className}`];
        if (themedClass) {
            themed[className] += ` ${themedClass}`;
        }
    });
    return themed;
};
export default applyTheme;
