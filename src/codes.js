function array_flip( trans ) {
    var key, tmp_ar = {};

    for (key in trans )
    {
        tmp_ar[trans[key]] = key;
    }

    return tmp_ar;
}


let codes = [];
codes['A'] = '.=';
codes['B'] = '=...';
codes['C'] = '=.=.';
codes['D'] = '=..';
codes['E'] = '.';
codes['F'] = '..=.';
codes['G'] = '==.';
codes['H'] = '....';
codes['I'] = '..';
codes['J'] = '.===';
codes['K'] = '=.=';
codes['L'] = '.=..';
codes['M'] = '==';
codes['N'] = '=.';
codes['O'] = '===';
codes['P'] = '.==.';
codes['Q'] = '==.=';
codes['R'] = '.=.';
codes['S'] = '...';
codes['T'] = '=';
codes['U'] = '..=';
codes['V'] = '...=';
codes['W'] = '.==';
codes['X'] = '=..=';
codes['Y'] = '=.==';
codes['Z'] = '==..';
codes['1'] = '.====';
codes['2'] = '..===';
codes['3'] = '...==';
codes['4'] = '....=';
codes['5'] = '.....';
codes['6'] = '=....';
codes['7'] = '==...';
codes['8'] = '===..';
codes['9'] = '====.';
codes['0'] = '=====';
codes[' '] = '  ';

// let morse_code = {
//     ".=": "a",
//     "=...": "b",
//     "=.=.": "c",
//     "=..": "d",
//     ".": "e",
//     "..=.": "f",
//     "==.": "g",
//     "....": "h",
//     "..": "i",
//     ".===": "j",
//     "=.=": "k",
//     ".=..": "l",
//     "==": "m",
//     "=.": "n",
//     "===": "o",
//     ".==.": "p",
//     "==.=": "q",
//     ".=.": "r",
//     "...": "s",
//     "=": "t",
//     "..=": "u",
//     "...=": "v",
//     ".==": "w",
//     "=..=": "x",
//     "=.==": "y",
//     "==..": "z",
//     ".====": "1",
//     "..===": "2",
//     "...==": "3",
//     "....=": "4",
//     ".....": "5",
//     "=....": "6",
//     "==...": "7",
//     "===..": "8",
//     "====.": "9",
//     "=====": "0",
//     "  ": " "
// };

let morse_code = array_flip(codes);
console.log(morse_code);


export function convertFromString(input) {
    let output = '';
    console.log(input);
    for (let i = 0; i < input.length; i++) {
        let c = input.charAt(i);
        c = c.toUpperCase();
        if (codes[c]) {
            output += codes[c] + ' ';
        }
    }
    console.log(output);
    return output;
};

export function convertToString(morseCode) {
    var words = (morseCode).split("  ");
    var letters = words.map((w) => w.split(' '));
    var decoded = [];

    for (var i = 0; i < letters.length; i++) {
        decoded[i] = [];
        for (var x = 0; x < letters[i].length; x++) {
            if (morse_code[letters[i][x]]) {
                decoded[i].push(morse_code[letters[i][x]]);
            }
        }
    }

    return decoded.map(arr => arr.join('')).join(' ');
};




export default {convertFromString, convertToString};
