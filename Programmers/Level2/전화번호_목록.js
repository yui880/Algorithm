function solution(phone_book) {
    phone_book.sort();

    for (let i = 1; i < phone_book.length; i++) {
        if (phone_book[i].indexOf(phone_book[i - 1]) === 0) return false;
    }

    return true;
}

function solution(phone_book) {
    const table = {};

    phone_book.forEach((num) => (table[num] = true));

    for (const num of phone_book) {
        for (let i = 1; i < num.length; i++) {
            const prefix = num.slice(0, i);
            if (table[prefix]) return false;
        }
    }
    return true;
}
