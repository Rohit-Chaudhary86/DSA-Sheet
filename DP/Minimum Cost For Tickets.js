// Q  983. Minimum Cost For Tickets

let d;
let c;
let s;
let memo;

function f(day){
    if(day > d[d.length - 1]) return 0;
    if(memo[day] !== undefined) return memo[day];

    if(!s.has(day)) return memo[day] = f(day+1);

    let ans = Math.min(
        c[0] + f(day+1),   // 1-day pass
        c[1] + f(day+7),   // 7-day pass
        c[2] + f(day+30)   // 30-day pass
    );

    return memo[day] = ans;
}

var mincostTickets = function(days, costs) {
    d = days;
    c = costs;
    s = new Set(days);
    memo = {};
    return f(1);
};
