//mendeklarasikan clasn number untuk diprint kedalam clas calculator screen 
const number = document.querySelectorAll(".number");

//mengaktifkan datainput dan tampilan hasil 
//mendeklarasikan clas calculator-screen dengan DOM
const calculatorScreen = document.querySelector(".calculator-screen");

//fucntion untuk mengubah layar(clas calculator-screen) keteka angka diklik
const updateScreen = (number) => {
    calculatorScreen.value = number;
};

//menambahkan event pada setiap element saat diklik
number.forEach((number) => {
    number.addEventListener("click", (event) => {
        //
       inputNumber(event.target.value)
       updateScreen(currentNumber)
    })
});

//variabel untuk menyimpan 2 angkan dan sebuah operator hitung
let prevNumber = '';
let calculatorOperator = '';
let currentNumber = '0';

//memberikan theNumber yang di klik ke variabel currentNumber 
const inputNumber = (number) => {
    if (currentNumber ==='0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
    
}

//definisi function inputOperator untuk memeberikan nilai pad variabel baru 
const inputOperator = (operator) => {
    prevNumber = currentNumber;
    calculationOperator = operator;
    currentNumber = '';
}

//menjalankan function inputOperator saat operator diklik
const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

//mengaktifkan aplikasi calculator 
//menambahkan event pada tombol = 
const equalSign = document.querySelector(".equal-sign")

//menambahkan event pada saat = diklik
equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
    //console.log('Equal button is pressed')
});

//funstion untuk menhasilkan perhitungan yang dimasukan 
const calculate = () => {
    let result = ''
    switch(calculationOperator){
        case "+":
        result = parseFloat(prevNumber) + parseFloat(currentNumber)
        break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber) 
            break
            case "*":
                result = parseFloat(prevNumber) * parseFloat(currentNumber)
                break
                case "/":
                    result = parseFloat(prevNumber) / parseFloat(currentNumber)
                    break
                    default: 
                    return
    }
    currentNumber = result
    calculationOperator = ''
}

//mengaktifkan tommbol AC 
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

//mengkalkulasikan angka desomal 
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}
