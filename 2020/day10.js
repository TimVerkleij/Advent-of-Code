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

input = input.split("\n").sort((a, b) => b - a)

console.time("timer")

let singleJoltDifference = 1
let threeJoltDifference = 1

for (let i = 0; i < input.length; i++) {
    let jolt = input[i];
    let nextJolt = input[i + 1]
    if (jolt - nextJolt === 3) {
        threeJoltDifference++
    } else if(jolt - nextJolt === 1){
        singleJoltDifference++
    }

}

console.timeEnd("timer")
console.log(threeJoltDifference * singleJoltDifference)
