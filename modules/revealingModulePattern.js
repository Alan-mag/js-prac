var accessLibrary = (function() {

    var collection = ['The Jungle Book', 'Charlotte\'s Web', 'The Mind\'s Eye'];

    var getBook = function(bookName) {
        if (collection.indexOf(bookName) > -1) {
            return 'You checked out: ' + collection[collection.indexOf(bookName)];
        } else {
            return 'We don\'t have that book';
        }
    };

    var donateBook = function(book) {
        collection.push(book);
    };

    var showBooks = function() {
        return collection.join(', \n');
    };

    return {
        getBook : getBook,
        showBooks : showBooks
    }
})();

console.log(accessLibrary.showBooks());
console.log(accessLibrary.getBook('The Mind\'s Eye'));
