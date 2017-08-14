// get unique array
function uniq(a) {
    return Array.from(new Set(a));
};

console.log(uniq(['1','2','3','4','5','5','5','3','7']));

// add method tests for promises