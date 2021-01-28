input = `70
102
148
9
99
63
40
52
91
39
55
28
54
22
95
61
118
35
14
21
129
82
137
45
7
87
81
25
3
108
41
11
145
18
65
80
115
29
136
42
97
104
117
141
62
121
23
96
24
128
48
1
112
8
34
144
134
116
58
147
51
84
17
126
64
68
135
10
77
105
127
73
111
90
16
103
109
98
146
123
130
69
133
110
30
122
15
74
33
38
83
92
2
53
140
4`

// input = `28
// 33
// 18
// 42
// 31
// 14
// 46
// 20
// 48
// 47
// 24
// 23
// 49
// 45
// 19
// 38
// 39
// 11
// 1
// 32
// 25
// 35
// 8
// 17
// 7
// 9
// 4
// 2
// 34
// 10
// 3`

// input = `16
// 10
// 15
// 5
// 1
// 11
// 7
// 19
// 6
// 12
// 4`

// input = input.split("\n").sort((a, b) => a - b).map(x => {
//     return Number(x)
// })
// // input.push(input[input.length - 1] + 3)
// input.unshift(0)

// console.log(input)
input = input.split("\n");

// sort adapters
input = input.sort((a, b) => a - b).map((x) => Number(x));

// put 0 at beginning of array
input.unshift(0);

console.time("timer")

// let possibleCombinations = new Set()
// possibleCombinations.add(input)

// let gap1 = 0
// let gap2 = 0
// let gap3 = 0

// for (let i = 0; i < input.length; i++) {
//     current = input[i]
//     next = input[i + 1]
//     // secondNext = input[i + 2]
//     // thirdNext = input[i + 3]
//     if(current - next === 1){
//        gap1++
//     }else 
//     if(current - next === 2){
//         gap2++
//     } else if(current -next === 3){
//         gap3++
//     }

// }

// console.log(gap1, gap2, gap3)
// console.log(possibleCombinations.size)



ways = input.map((x, i) => (i == 0 ? 1 : 0));

for (let i = 0; i < ways.length; i++) {
  for (let j = i - 3; j < i; j++) {
    // add ways using previous 3 numbers
    if (input[i] <= input[j] + 3) {
      ways[i] += ways[j];
    //   console.log(ways[i], ways[j], ways[i] += ways[j])
    }
  }
}

console.log("Ways to arrange adapters:", ways[ways.length - 1]);
//https://www.reddit.com/r/adventofcode/comments/ka8z8x/2020_day_10_solutions/

console.timeEnd("timer")