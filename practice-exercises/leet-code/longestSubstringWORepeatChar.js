var lengthOfLongestSubstring = function(s) {
    var lastResult = [];
    var result = [];
    var sArray = s.split('');
    sArray.forEach(function(letter, index) {
        var lastPos = result.indexOf(letter);
        if (lastPos > -1) {
            if (result.length > lastResult.length) {
                lastResult = result;
            }
            result = result.slice(lastPos+1);
        }
        result.push(letter);
        if (index === sArray.length - 1 && result.length > lastResult.length) {
            lastResult = result;
        }
    });

    return lastResult.length;

};
