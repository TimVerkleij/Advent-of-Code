var input = [122281, 124795, 58593, 133744, 67625, 109032, 50156, 80746, 130872, 79490, 126283, 146564, 73075, 130170, 139853, 92599, 96965, 58149, 94254, 89074, 52977, 148092, 92073, 136765, 144755, 142487, 54827, 135588, 91411, 51597, 70040, 68880, 117120, 137115, 72829, 100048, 65187, 131464, 95813, 146891, 128799, 94568, 67178, 94903, 67193, 127613, 115782, 85360, 129820, 50989, 63471, 106724, 145768, 55169, 77555, 82978, 87728, 69141, 95518, 82985, 83387, 83089, 64372, 127931, 99277, 58930, 99098, 95621, 147797, 64102, 118857, 71014, 84881, 147294, 72166, 71348, 149240, 117963, 89181, 144770, 102444, 99103, 72341, 56076, 128515, 51319, 147595, 98431, 141102, 148617, 84685, 111427, 82351, 57021, 63834, 113059, 119970, 87078, 120631, 124942];

var sum = 0;
var gewicht = 0;

input.forEach(myFunction);


function myFunction(value, index, array) {
    var getal = value; //mass
    // console.log(getal);
    getal = Math.floor(getal / 3) - 2; //required fuel for mass
    // console.log(getal);
    gewicht = gewicht + getal;
    var getal2 = getal;
    loop2();

    function loop2() {
        if (getal2 >= 9) {
            getal2 = Math.floor(getal2 / 3) - 2; //required fuel for fuel
            console.log(getal2);
            gewicht = gewicht + getal2;
            console.log(gewicht);
            loop2();
        } else {
            sum = sum + getal2;
            console.log("done");
        }
    }

    function loop() {
        loop2();
    }
}
console.log(sum);
console.log(gewicht);

// 50156
// 3296560