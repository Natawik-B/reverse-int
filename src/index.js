module.exports = function reverse (n) {
    if (n < 0) {
        const number = n*(-1);
        let nString = number.toString();
        let numAarr = [...nString];
        let numTurn = numAarr.reverse();
        let numJoin = numTurn.join("");
        return (numJoin);
    } else {
        let nString = n.toString();
        let numAarr = [...nString];
        let numTurn = numAarr.reverse();
        let numJoin = numTurn.join("");
        return (numJoin);
    }
};