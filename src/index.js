module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 === 1) return false;
    let inputStr = String(str);
    while (inputStr.length > 0) {
        let isInConfig = false;
        for (let j = 0; j < bracketsConfig.length; j++) {
            let config = bracketsConfig[j];
            let param = String(config[0]) + String(config[1]);
            let ind = inputStr.indexOf(param);
            if (ind !== -1) {
                inputStr = inputStr.replace(param, '');
                isInConfig = true;
            }

        }
        if (!isInConfig) return isInConfig;
    }
    return inputStr.length === 0;
}
