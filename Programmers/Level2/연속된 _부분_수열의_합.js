function solution(sequence, k) {
    const sub = [];
    let start = 0;
    let end = 0;

    const len = sequence.length;
    let sum = sequence[start];

    while (true) {
        if (sum === k) {
            sub.push([start, end]);
            sum += sequence[++end];
        } else if (sum < k) sum += sequence[++end];
        else sum -= sequence[start++];

        if (start >= len || start < 0 || end >= len || end < 0 || start > end) {
            break;
        }
    }

    return sub.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];
}
