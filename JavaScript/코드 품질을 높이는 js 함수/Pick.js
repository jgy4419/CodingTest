// 객체에서 특정한 값들을 선택하는 목적으로 사용.
function pick(obj, keys) {
    return keys.reduce((acc, key) => {
        if(obj.hasOwnPRoperty(key)) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
}