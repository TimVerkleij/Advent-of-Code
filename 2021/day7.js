let input = `1101,1,29,67,1102,0,1,65,1008,65,35,66,1005,66,28,1,67,65,20,4,0,1001,65,1,65,1106,0,8,99,35,67,101,99,105,32,110,39,101,115,116,32,112,97,115,32,117,110,101,32,105,110,116,99,111,100,101,32,112,114,111,103,114,97,109,10,0,300,57,112,318,46,306,343,452,129,184,1407,1206,447,50,9,522,166,475,80,275,1022,228,5,178,885,420,244,799,603,1267,598,12,1549,313,899,207,307,85,541,102,13,481,126,1566,148,190,806,1244,314,933,31,452,1048,179,456,907,26,1028,1520,353,589,1121,213,455,1199,251,240,1274,705,736,1119,962,286,407,425,332,132,561,467,209,1358,196,514,36,29,1116,659,720,236,292,404,208,270,132,75,221,0,168,688,1210,400,783,478,113,170,261,290,522,116,65,1417,775,16,418,1407,2,5,5,72,24,523,1253,1448,298,468,626,66,131,123,165,805,436,62,398,653,55,71,261,1177,343,405,27,30,1026,549,64,794,248,18,68,431,872,1154,360,145,206,74,1114,788,89,328,168,219,5,1126,1420,171,23,77,1395,171,462,84,807,25,1087,584,189,1594,1067,370,279,1341,422,21,359,693,20,943,1189,640,1086,291,32,1240,359,322,704,449,222,46,579,1656,1057,20,52,50,45,312,330,1258,306,232,108,406,657,37,9,228,757,1673,1597,450,1515,380,261,1277,11,698,63,1126,1098,528,690,364,392,311,448,928,144,1275,33,101,515,14,1252,483,631,331,744,62,10,1203,395,28,29,2,132,17,703,654,192,144,30,158,10,174,106,478,19,1635,359,1327,309,145,304,126,1012,521,687,279,7,589,1053,189,45,30,129,397,449,284,30,635,561,151,487,120,210,154,290,60,117,158,902,27,283,337,62,1127,5,697,835,454,526,1153,783,378,770,75,144,641,1152,0,230,1829,119,742,43,305,167,81,1002,106,251,346,64,934,90,1279,40,399,557,743,13,38,231,243,505,549,130,294,570,638,183,9,604,704,466,1506,930,32,964,73,269,606,1231,1238,428,639,1699,446,225,71,34,996,1101,179,826,32,304,343,718,119,253,366,292,52,195,2,752,603,454,247,216,72,307,816,530,329,669,395,257,451,430,415,977,424,852,544,161,234,1305,10,29,280,470,31,672,333,154,990,1429,451,316,287,1825,995,440,535,157,521,569,71,466,116,415,132,557,236,569,230,982,20,876,235,53,34,1453,539,88,349,248,72,21,1526,28,518,441,932,610,1058,1037,707,639,248,661,1142,60,684,68,93,1589,186,980,307,405,354,756,135,454,7,1242,183,1084,131,364,120,407,981,769,400,492,558,326,134,219,128,103,5,938,153,574,228,174,1181,527,506,382,359,3,316,1253,2,265,58,720,947,317,792,66,52,1868,1590,399,385,235,420,592,84,218,1685,254,283,445,179,694,1280,68,1169,297,766,1394,954,6,417,1654,255,399,1043,110,808,29,892,657,30,891,993,661,70,1176,289,126,38,1285,144,708,413,176,28,496,179,379,161,727,500,1215,941,1690,299,555,398,320,279,188,22,1098,187,114,173,1025,918,555,472,1285,210,1242,405,310,153,372,75,275,268,1059,387,65,423,215,92,1421,352,65,573,406,202,13,1054,1780,3,281,28,1246,298,535,417,189,1181,1565,990,1169,244,122,153,693,862,107,1185,13,4,1930,508,72,822,440,361,1617,24,1033,249,193,299,479,269,1082,1472,52,400,1706,1019,588,759,1256,185,377,55,825,468,189,94,15,74,446,23,370,1654,151,529,1126,306,114,455,288,412,349,440,158,726,127,1247,780,117,1039,68,26,147,793,88,670,992,215,285,528,736,501,70,805,890,802,495,416,1018,128,57,67,28,445,855,327,1,4,291,277,50,947,1096,408,843,237,755,110,628,1019,1059,1207,225,335,275,1431,397,632,346,576,292,49,65,161,287,481,352,56,118,232,630,1518,326,241,216,95,493,387,431,533,29,1196,433,19,15,759,227,927,40,652,1441,1046,1005,19,338,669,359,28,360,651,262,551,174,263,62,166,25,39,2,406,342,227,425,238,995,31,121,120,1047,1498,952,954,291,512,311,125,380,11,55,37,89,203,308,1631,299,182,1777,968,128,1279,305,167,290,43,1032,193,8,1783,636,331,239,16,62,432,1068,1421,639,10,693,118,851,1623,1198,1315,802,1042,657,574,726,510,161,178,456,263,361,498,902,927,975,335,955,98,1302,73,374,633,8,3,42,20,406,407,258,181,531,89,345,184,180,730,18,771,205,203,385,237,776,17,530,318,12,205,301,736,342,26,1008,111,1107,22,1044,870,200,428,378,0,718,534,28,513,399,57,1439,450,782,1183,805,43,604,710,310,950,282,1475,1233,75,501,446,439,12,739,151`
// input = `16,1,2,0,4,2,7,1,2,14`
input = input.split(",").map(num => { return parseInt(num) }).sort((a, b) => a - b)

const {PerformanceObserver, performance} = require('perf_hooks');

let t0 = performance.now()

let highestNumber = Math.max.apply(null, input)

let outcomes = []

for (let i = 0; i <= highestNumber; i++) {
    calculateDistances(i)
}

function calculateDistances(alignmentPoint) {
    let totalFuel = 0

    for (let i = 0; i < input.length; i++) {
        const crabPosition = input[i];
        totalFuel += Math.abs(crabPosition - alignmentPoint)
    }

    outcomes.push({alignmentPoint, totalFuel})
}

outcomes.sort((a, b) => a.totalFuel - b.totalFuel)

let t1 = performance.now()


console.log(outcomes[0])

console.log(t1 - t0 + " ms")
