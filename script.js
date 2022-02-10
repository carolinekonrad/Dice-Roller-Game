//One Dice Roll


//let rollDice = document.querySelector('#roll')
// let clearBoard = document.querySelector('#clear')
// let image = document.getElementById('dice-image')

// //tracking number of rolls
// let num1s = 0
// let num2s = 0
// let num3s = 0
// let num4s = 0
// let num5s = 0
// let num6s = 0
// let totalRolls = 0

// //accessing table to change number of rolls
// let table1 = document.querySelector('#dices-1')
// let table2 = document.querySelector('#dices-2')
// let table3 = document.querySelector('#dices-3')
// let table4 = document.querySelector('#dices-4')
// let table5 = document.querySelector('#dices-5')
// let table6 = document.querySelector('#dices-6')


// //accessing table to change percentage of tails
// let perc1s = document.getElementById('1s-perc')
// let perc2s = document.getElementById('2s-perc')
// let perc3s = document.getElementById('3s-perc')
// let perc4s = document.getElementById('4s-perc')
// let perc5s = document.getElementById('5s-perc')
// let perc6s = document.getElementById('6s-perc')


// //creating eventlisteners
// rollDice.addEventListener('click', function(){
//     let rolledValue = Math.round(Math.random() * 6)
//     console.log(rolledValue)
//     if (rolledValue == 0) {
//         console.log("Oops, roll again.")
//     } else if (rolledValue == 1){
//         num1s += 1
//         table1.textContent = num1s
//         totalRolls += 1
//         image.src = "file:///C:/Users/carol/InClassAct/FSI-Implement-Coin-Flipper/assets/images/dice/dice1.png"
//         perc1s.textContent = Math.round(num1s / totalRolls * 100) + "%"
//         if (num2s != 0){
//             perc2s.textContent = Math.round(num2s / totalRolls * 100) + "%"
//         } 
//         if (num3s != 0){
//             perc3s.textContent = Math.round(num3s / totalRolls * 100) + "%"
//         } 
//         if (num4s != 0){
//             perc4s.textContent = Math.round(num4s / totalRolls * 100) + "%"
//         }
//         if (num5s != 0){
//             perc5s.textContent = Math.round(num3s / totalRolls * 100) + "%"
//         }
//         if (num6s != 0){
//             perc6s.textContent = Math.round(num6s / totalRolls * 100) + "%"
//         }
//     } else if (rolledValue == 2){
//         num2s += 1
//         table2.textContent = num2s
//         totalRolls += 1
//         image.src = "file:///C:/Users/carol/InClassAct/FSI-Implement-Coin-Flipper/assets/images/dice/dice2.png"
//         perc2s.textContent = Math.round(num2s / totalRolls * 100) + "%"
//         if (num1s != 0){
//             perc1s.textContent = Math.round(num1s / totalRolls * 100) + "%"
//         } 
//         if (num3s != 0){
//             perc3s.textContent = Math.round(num3s / totalRolls * 100) + "%"
//         }
//         if (num4s != 0){
//             perc4s.textContent = Math.round(num4s / totalRolls * 100) + "%"
//         }
//         if (num5s != 0){
//             perc5s.textContent = Math.round(num3s / totalRolls * 100) + "%"
//         }
//         if (num6s != 0){
//             perc6s.textContent = Math.round(num6s / totalRolls * 100) + "%"
//         }
//     } else if (rolledValue == 3){
//         num3s += 1
//         table3.textContent = num3s
//         totalRolls += 1
//         image.src = "file:///C:/Users/carol/InClassAct/FSI-Implement-Coin-Flipper/assets/images/dice/dice3.png"
//         perc3s.textContent = Math.round(num3s / totalRolls * 100) + "%"
//         if (num1s != 0){
//             perc1s.textContent = Math.round(num1s / totalRolls * 100) + "%"
//         } 
//         if (num2s != 0){
//             perc2s.textContent = Math.round(num2s / totalRolls * 100) + "%"
//         } 
//         if (num4s != 0){
//             perc4s.textcontent = Math.round(num4s / totalRolls * 100) + "%"
//         }
//         if (num5s != 0){
//             perc5s.textContent = Math.round(num3s / totalRolls * 100) + "%"
//         }
//         if (num6s != 0){
//             perc6s.textContent = Math.round(num6s / totalRolls * 100) + "%"
//         }
//     } else if (rolledValue == 4){
//         num4s += 1
//         table4.textContent = num4s
//         totalRolls += 1
//         image.src = "file:///C:/Users/carol/InClassAct/FSI-Implement-Coin-Flipper/assets/images/dice/dice4.png"
//         perc4s.textContent = Math.round(num4s / totalRolls * 100) + "%"
//         if (num1s != 0){
//             perc1s.textContent = Math.round(num1s / totalRolls * 100) + "%"
//         } 
//         if (num2s != 0){
//             perc2s.textContent = Math.round(num2s / totalRolls * 100) + "%"
//         } 
//         if (num3s != 0){
//             perc3s.textContent = Math.round(num3s / totalRolls * 100) + "%"
//         } 
//         if (num5s != 0){
//             perc5s.textContent = Math.round(num3s / totalRolls * 100) + "%"
//         }
//         if (num6s != 0){
//             perc6s.textContent = Math.round(num6s / totalRolls * 100) + "%"
//         }
//     } else if (rolledValue == 5){
//         num5s += 1
//         table5.textContent = num5s
//         totalRolls += 1
//         image.src = "file:///C:/Users/carol/InClassAct/FSI-Implement-Coin-Flipper/assets/images/dice/dice5.png"
//         perc5s.textContent = Math.round(num5s / totalRolls * 100) + "%"
//         if (num1s != 0){
//             perc1s.textContent = Math.round(num1s / totalRolls * 100) + "%"
//         } 
//         if (num2s != 0){
//             perc2s.textContent = Math.round(num2s / totalRolls * 100) + "%"
//         } 
//         if (num3s != 0){
//             perc3s.textContent = Math.round(num3s / totalRolls * 100) + "%"
//         }
//         if (num4s != 0){
//             perc4s.textContent = Math.round(num4s / totalRolls * 100) + "%"
//         }
//         if (num6s != 0){
//             perc6s.textContent = Math.round(num6s / totalRolls * 100) + "%"
//         }
//     } else if (rolledValue == 6){
//         num6s += 1
//         table6.textContent = num6s
//         totalRolls += 1
//         image.src = "file:///C:/Users/carol/InClassAct/FSI-Implement-Coin-Flipper/assets/images/dice/dice6.png"
//         perc6s.textContent = Math.round(num6s / totalRolls * 100) + "%"
//         if (num1s != 0){
//             perc1s.textContent = Math.round(num1s / totalRolls * 100) + "%"
//         } 
//         if (num2s != 0){
//             perc2s.textContent = Math.round(num2s / totalRolls * 100) + "%"
//         } 
//         if (num3s != 0){
//             perc3s.textContent = Math.round(num3s / totalRolls * 100) + "%"
//         }
//         if (num4s != 0){
//             perc4s.textContent = Math.round(num4s / totalRolls * 100) + "%"
//         } 
//         if (num5s != 0){
//             perc5s.textContent = Math.round(num5s / totalRolls * 100) + "%"
//         }
//     }
// })


// clearBoard.addEventListener('click', function(){
//     num1s = 0
//     num2s = 0
//     num3s = 0
//     num4s = 0
//     num5s = 0
//     num6s = 0
//     perc1s.textContent = "0%"
//     perc2s.textContent = "0%"
//     perc3s.textContent = "0%"
//     perc4s.textContent = "0%"
//     perc5s.textContent = "0%"
//     perc6s.textContent = "0%"
//     table1.textContent = num1s
//     table2.textContent = num2s
//     table3.textContent = num3s
//     table4.textContent = num4s
//     table5.textContent = num5s
//     table6.textContent = num6s
//     totalRolls = 0
// })

//Double Dice Rolling Game

let rollDice = document.querySelector('#roll')
let clearBoard = document.querySelector('#clear')
let image = document.getElementById('dice-image')


//setting variables for counting
let num2 = 0
let num3 = 0
let num4 = 0
let num5 = 0
let num6 = 0
let num7 = 0
let num8 = 0
let num9 = 0
let num10 = 0
let num11 = 0
let num12 = 0
let totalnum = 0

//accessing table to change numbers
let tbnum2 = document.querySelector('#dices-2')
let tbnum3 = document.querySelector('#dices-3')
let tbnum4 = document.querySelector('#dices-4')
let tbnum5 = document.querySelector('#dices-5')
let tbnum6 = document.querySelector('#dices-6')
let tbnum7 = document.querySelector('#dices-7')
let tbnum8 = document.querySelector('#dices-8')
let tbnum9 = document.querySelector('#dices-9')
let tbnum10 = document.querySelector('#dices-10')
let tbnum11 = document.querySelector('#dices-11')
let tbnum12 = document.querySelector('#dices-12')

//accessing table to change percentages
let tbperc2 = document.getElementById('2s-perc')
let tbperc3 = document.getElementById('3s-perc')
let tbperc4 = document.getElementById('4s-perc')
let tbperc5 = document.getElementById('5s-perc')
let tbperc6 = document.getElementById('6s-perc')
let tbperc7 = document.getElementById('7s-perc')
let tbperc8 = document.getElementById('8s-perc')
let tbperc9 = document.getElementById('9s-perc')
let tbperc10 = document.getElementById('10s-perc')
let tbperc11 = document.getElementById('11s-perc')
let tbperc12 = document.getElementById('12s-perc')


rollDice.addEventListener('click', function(){
    let rolledValue1 = Math.round(Math.random() * 6)
    let rolledValue2 = Math.round(Math.random() * 6)
    dice1Image = document.querySelector('#dice-image')
    dice2Image = document.querySelector('#dice-image2')

    if (rolledValue1 == 0 || rolledValue2 == 0){
        console.log('Please roll again.')
    } else {
        //Changing image tag for Dice 1
        if (rolledValue1 == 1){
            dice1Image.src = "C:/Users/carol/InClassAct/FSI-Implement-Coin-Flipper/assets/images/dice/dice1.png"
        } else if (rolledValue1 == 2){
            dice1Image.src = "C:/Users/carol/InClassAct/FSI-Implement-Coin-Flipper/assets/images/dice/dice2.png"
        } else if (rolledValue1 == 3){
            dice1Image.src = "C:/Users/carol/InClassAct/FSI-Implement-Coin-Flipper/assets/images/dice/dice3.png"
        } else if (rolledValue1 == 4){
            dice1Image.src = "C:/Users/carol/InClassAct/FSI-Implement-Coin-Flipper/assets/images/dice/dice4.png"
        } else if (rolledValue1 == 5){
            dice1Image.src = "C:/Users/carol/InClassAct/FSI-Implement-Coin-Flipper/assets/images/dice/dice5.png"
        } else {
            dice1Image.src = "C:/Users/carol/InClassAct/FSI-Implement-Coin-Flipper/assets/images/dice/dice6.png"
        }
        //Changing image tag for Dice 2
        if (rolledValue2 == 1){
            dice2Image.src = "C:/Users/carol/InClassAct/FSI-Implement-Coin-Flipper/assets/images/dice/dice1.png"
        } else if (rolledValue2 == 2){
            dice2Image.src = "C:/Users/carol/InClassAct/FSI-Implement-Coin-Flipper/assets/images/dice/dice2.png"
        } else if (rolledValue2 == 3){
            dice2Image.src = "C:/Users/carol/InClassAct/FSI-Implement-Coin-Flipper/assets/images/dice/dice3.png"
        } else if (rolledValue2 == 4){
            dice2Image.src = "C:/Users/carol/InClassAct/FSI-Implement-Coin-Flipper/assets/images/dice/dice4.png"
        } else if (rolledValue2 == 5){
            dice2Image.src = "C:/Users/carol/InClassAct/FSI-Implement-Coin-Flipper/assets/images/dice/dice5.png"
        } else {
            dice2Image.src = "C:/Users/carol/InClassAct/FSI-Implement-Coin-Flipper/assets/images/dice/dice6.png"
        }
        let totalRolledValue = rolledValue1 + rolledValue2
        console.log(totalRolledValue)
        if (totalRolledValue == 2){
            num2 += 1
            tbnum2.textContent = num2
            totalnum += 1
            tbperc2.textContent = Math.round(num2 / totalnum * 100) + "%"
            if (num3 != 0){
                tbperc3.textContent = Math.round(num3 / totalnum * 100) + "%"
            }
            if (num4 != 0){
                tbperc4.textContent = Math.round(num4 / totalnum * 100) + "%"
            }
            if (num5 != 0){
                tbperc5.textContent = Math.round(num5 / totalnum * 100) + "%"
            }
            if (num6 != 0){
                tbperc6.textContent = Math.round(num6 / totalnum * 100) + "%"
            }
            if (num7 != 0){
                tbperc7.textContent = Math.round(num7 / totalnum * 100) + "%"
            }
            if (num8 != 0){
                tbperc8.textContent = Math.round(num8 / totalnum * 100) + "%"
            }
            if (num9 != 0){
                tbperc9.textContent = Math.round(num9 / totalnum * 100) + "%"
            }
            if (num10 != 0){
                tbperc10.textContent = Math.round(num10 / totalnum * 100) + "%"
            }
            if (num11 != 0){
                tbperc11.textContent = Math.round(num11 / totalnum * 100) + "%"
            }
            if (num12 != 0){
                tbperc12.textContent = Math.round(num12 / totalnum * 100) + "%"
            }
        } else if (totalRolledValue == 3){
            num3 += 1
            tbnum3.textContent = num3
            totalnum += 1
            tbperc3.textContent = Math.round(num3 / totalnum * 100) + "%"
            if (num2 != 0){
                tbperc2.textContent = Math.round(num2 / totalnum * 100) + "%"
            }
            if (num4 != 0){
                tbperc4.textContent = Math.round(num4 / totalnum * 100) + "%"
            }
            if (num5 != 0){
                tbperc5.textContent = Math.round(num5 / totalnum * 100) + "%"
            }
            if (num6 != 0){
                tbperc6.textContent = Math.round(num6 / totalnum * 100) + "%"
            }
            if (num7 != 0){
                tbperc7.textContent = Math.round(num7 / totalnum * 100) + "%"
            }
            if (num8 != 0){
                tbperc8.textContent = Math.round(num8 / totalnum * 100) + "%"
            }
            if (num9 != 0){
                tbperc9.textContent = Math.round(num9 / totalnum * 100) + "%"
            }
            if (num10 != 0){
                tbperc10.textContent = Math.round(num10 / totalnum * 100) + "%"
            }
            if (num11 != 0){
                tbperc11.textContent = Math.round(num11 / totalnum * 100) + "%"
            }
            if (num12 != 0){
                tbperc12.textContent = Math.round(num12 / totalnum * 100) + "%"
            }
        } else if (totalRolledValue == 4){
            num4 += 1
            tbnum4.textContent = num4
            totalnum += 1
            tbperc4.textContent = Math.round(num4 / totalnum * 100) + "%"
            if (num2 != 0){
                tbperc2.textContent = Math.round(num2 / totalnum * 100) + "%"
            }
            if (num3 != 0){
                tbperc3.textContent = Math.round(num3 / totalnum * 100) + "%"
            }
            if (num5 != 0){
                tbperc5.textContent = Math.round(num5 / totalnum * 100) + "%"
            }
            if (num6 != 0){
                tbperc6.textContent = Math.round(num6 / totalnum * 100) + "%"
            }
            if (num7 != 0){
                tbperc7.textContent = Math.round(num7 / totalnum * 100) + "%"
            }
            if (num8 != 0){
                tbperc8.textContent = Math.round(num8 / totalnum * 100) + "%"
            }
            if (num9 != 0){
                tbperc9.textContent = Math.round(num9 / totalnum * 100) + "%"
            }
            if (num10 != 0){
                tbperc10.textContent = Math.round(num10 / totalnum * 100) + "%"
            }
            if (num11 != 0){
                tbperc11.textContent = Math.round(num11 / totalnum * 100) + "%"
            }
            if (num12 != 0){
                tbperc12.textContent = Math.round(num12 / totalnum * 100) + "%"
            }
        } else if (totalRolledValue == 5){
            num5 += 1
            tbnum5.textContent = num5
            totalnum += 1
            tbperc5.textContent = Math.round(num5 / totalnum * 100) + "%"
            if (num2 != 0){
                tbperc2.textContent = Math.round(num2 / totalnum * 100) + "%"
            }
            if (num3 != 0){
                tbperc3.textContent = Math.round(num3 / totalnum * 100) + "%"
            }
            if (num4 != 0){
                tbperc4.textContent = Math.round(num4 / totalnum * 100) + "%"
            }
            if (num6 != 0){
                tbperc6.textContent = Math.round(num6 / totalnum * 100) + "%"
            }
            if (num7 != 0){
                tbperc7.textContent = Math.round(num7 / totalnum * 100) + "%"
            }
            if (num8 != 0){
                tbperc8.textContent = Math.round(num8 / totalnum * 100) + "%"
            }
            if (num9 != 0){
                tbperc9.textContent = Math.round(num9 / totalnum * 100) + "%"
            }
            if (num10 != 0){
                tbperc10.textContent = Math.round(num10 / totalnum * 100) + "%"
            }
            if (num11 != 0){
                tbperc11.textContent = Math.round(num11 / totalnum * 100) + "%"
            }
            if (num12 != 0){
                tbperc12.textContent = Math.round(num12 / totalnum * 100) + "%"
            }
        } else if (totalRolledValue == 6){
            num6 += 1
            tbnum6.textContent = num6
            totalnum += 1
            tbperc6.textContent = Math.round(num6 / totalnum * 100) + "%"
            if (num2 != 0){
                tbperc2.textContent = Math.round(num2 / totalnum * 100) + "%"
            }
            if (num3 != 0){
                tbperc3.textContent = Math.round(num3 / totalnum * 100) + "%"
            }
            if (num4 != 0){
                tbperc4.textContent = Math.round(num4 / totalnum * 100) + "%"
            }
            if (num5 != 0){
                tbperc5.textContent = Math.round(num5 / totalnum * 100) + "%"
            }
            if (num7 != 0){
                tbperc7.textContent = Math.round(num7 / totalnum * 100) + "%"
            }
            if (num8 != 0){
                tbperc8.textContent = Math.round(num8 / totalnum * 100) + "%"
            }
            if (num9 != 0){
                tbperc9.textContent = Math.round(num9 / totalnum * 100) + "%"
            }
            if (num10 != 0){
                tbperc10.textContent = Math.round(num10 / totalnum * 100) + "%"
            }
            if (num11 != 0){
                tbperc11.textContent = Math.round(num11 / totalnum * 100) + "%"
            }
            if (num12 != 0){
                tbperc12.textContent = Math.round(num12 / totalnum * 100) + "%"
            }
        } else if (totalRolledValue == 7){
            num7 += 1
            tbnum7.textContent = num7
            totalnum += 1
            tbperc7.textContent = Math.round(num7 / totalnum * 100) + "%"
            if (num2 != 0){
                tbperc2.textContent = Math.round(num2 / totalnum * 100) + "%"
            }
            if (num3 != 0){
                tbperc3.textContent = Math.round(num3 / totalnum * 100) + "%"
            }
            if (num4 != 0){
                tbperc4.textContent = Math.round(num4 / totalnum * 100) + "%"
            }
            if (num5 != 0){
                tbperc5.textContent = Math.round(num5 / totalnum * 100) + "%"
            }
            if (num6 != 0){
                tbperc6.textContent = Math.round(num6 / totalnum * 100) + "%"
            }
            if (num8 != 0){
                tbperc8.textContent = Math.round(num8 / totalnum * 100) + "%"
            }
            if (num9 != 0){
                tbperc9.textContent = Math.round(num9 / totalnum * 100) + "%"
            }
            if (num10 != 0){
                tbperc10.textContent = Math.round(num10 / totalnum * 100) + "%"
            }
            if (num11 != 0){
                tbperc11.textContent = Math.round(num11 / totalnum * 100) + "%"
            }
            if (num12 != 0){
                tbperc12.textContent = Math.round(num12 / totalnum * 100) + "%"
            }
        } else if (totalRolledValue == 8){
            num8 += 1
            tbnum8.textContent = num8
            totalnum += 1
            tbperc8.textContent = Math.round(num8 / totalnum * 100) + "%"
            if (num2 != 0){
                tbperc2.textContent = Math.round(num2 / totalnum * 100) + "%"
            }
            if (num3 != 0){
                tbperc3.textContent = Math.round(num3 / totalnum * 100) + "%"
            }
            if (num4 != 0){
                tbperc4.textContent = Math.round(num4 / totalnum * 100) + "%"
            }
            if (num5 != 0){
                tbperc5.textContent = Math.round(num5 / totalnum * 100) + "%"
            }
            if (num6 != 0){
                tbperc6.textContent = Math.round(num6 / totalnum * 100) + "%"
            }
            if (num7 != 0){
                tbperc7.textContent = Math.round(num7 / totalnum * 100) + "%"
            }
            if (num9 != 0){
                tbperc9.textContent = Math.round(num9 / totalnum * 100) + "%"
            }
            if (num10 != 0){
                tbperc10.textContent = Math.round(num10 / totalnum * 100) + "%"
            }
            if (num11 != 0){
                tbperc11.textContent = Math.round(num11 / totalnum * 100) + "%"
            }
            if (num12 != 0){
                tbperc12.textContent = Math.round(num12 / totalnum * 100) + "%"
            }
        } else if (totalRolledValue == 9){
            num9 += 1
            tbnum9.textContent = num9
            totalnum += 1
            tbperc9.textContent = Math.round(num9 / totalnum * 100) + "%"
            if (num2 != 0){
                tbperc2.textContent = Math.round(num2 / totalnum * 100) + "%"
            }
            if (num3 != 0){
                tbperc3.textContent = Math.round(num3 / totalnum * 100) + "%"
            }
            if (num4 != 0){
                tbperc4.textContent = Math.round(num4 / totalnum * 100) + "%"
            }
            if (num5 != 0){
                tbperc5.textContent = Math.round(num5 / totalnum * 100) + "%"
            }
            if (num6 != 0){
                tbperc6.textContent = Math.round(num6 / totalnum * 100) + "%"
            }
            if (num7 != 0){
                tbperc7.textContent = Math.round(num7 / totalnum * 100) + "%"
            }
            if (num8 != 0){
                tbperc8.textContent = Math.round(num8 / totalnum * 100) + "%"
            }
            if (num10 != 0){
                tbperc10.textContent = Math.round(num10 / totalnum * 100) + "%"
            }
            if (num11 != 0){
                tbperc11.textContent = Math.round(num11 / totalnum * 100) + "%"
            }
            if (num12 != 0){
                tbperc12.textContent = Math.round(num12 / totalnum * 100) + "%"
            }
        } else if (totalRolledValue == 10){
            num10 += 1
            tbnum10.textContent = num10
            totalnum += 1
            tbperc10.textContent = Math.round(num10 / totalnum * 100) + "%"
            if (num2 != 0){
                tbperc2.textContent = Math.round(num2 / totalnum * 100) + "%"
            }
            if (num3 != 0){
                tbperc3.textContent = Math.round(num3 / totalnum * 100) + "%"
            }
            if (num4 != 0){
                tbperc4.textContent = Math.round(num4 / totalnum * 100) + "%"
            }
            if (num5 != 0){
                tbperc5.textContent = Math.round(num5 / totalnum * 100) + "%"
            }
            if (num6 != 0){
                tbperc6.textContent = Math.round(num6 / totalnum * 100) + "%"
            }
            if (num7 != 0){
                tbperc7.textContent = Math.round(num7 / totalnum * 100) + "%"
            }
            if (num8 != 0){
                tbperc8.textContent = Math.round(num8 / totalnum * 100) + "%"
            }
            if (num9 != 0){
                tbperc9.textContent = Math.round(num9 / totalnum * 100) + "%"
            }
            if (num11 != 0){
                tbperc11.textContent = Math.round(num11 / totalnum * 100) + "%"
            }
            if (num12 != 0){
                tbperc12.textContent = Math.round(num12 / totalnum * 100) + "%"
            } 
        } else if (totalRolledValue == 11){
            num11 += 1
            tbnum11.textContent = num11
            totalnum += 1
            tbperc11.textContent = Math.round(num11 / totalnum * 100) + "%"
            if (num2 != 0){
                tbperc2.textContent = Math.round(num2 / totalnum * 100) + "%"
            }
            if (num3 != 0){
                tbperc3.textContent = Math.round(num3 / totalnum * 100) + "%"
            }
            if (num4 != 0){
                tbperc4.textContent = Math.round(num4 / totalnum * 100) + "%"
            }
            if (num5 != 0){
                tbperc5.textContent = Math.round(num5 / totalnum * 100) + "%"
            }
            if (num6 != 0){
                tbperc6.textContent = Math.round(num6 / totalnum * 100) + "%"
            }
            if (num7 != 0){
                tbperc7.textContent = Math.round(num7 / totalnum * 100) + "%"
            }
            if (num8 != 0){
                tbperc8.textContent = Math.round(num8 / totalnum * 100) + "%"
            }
            if (num9 != 0){
                tbperc9.textContent = Math.round(num9 / totalnum * 100) + "%"
            }
            if (num10 != 0){
                tbperc10.textContent = Math.round(num10 / totalnum * 100) + "%"
            }
            if (num12 != 0){
                tbperc12.textContent = Math.round(num12 / totalnum * 100) + "%"
            }
        } else if (totalRolledValue == 12){
            num12 += 1
            tbnum12.textContent = num12
            totalnum += 1
            tbperc12.textContent = Math.round(num12 / totalnum * 100) + "%"
            if (num2 != 0){
                tbperc2.textContent = Math.round(num2 / totalnum * 100) + "%"
            }
            if (num3 != 0){
                tbperc3.textContent = Math.round(num3 / totalnum * 100) + "%"
            }
            if (num4 != 0){
                tbperc4.textContent = Math.round(num4 / totalnum * 100) + "%"
            }
            if (num5 != 0){
                tbperc5.textContent = Math.round(num5 / totalnum * 100) + "%"
            }
            if (num6 != 0){
                tbperc6.textContent = Math.round(num6 / totalnum * 100) + "%"
            }
            if (num7 != 0){
                tbperc7.textContent = Math.round(num7 / totalnum * 100) + "%"
            }
            if (num8 != 0){
                tbperc8.textContent = Math.round(num8 / totalnum * 100) + "%"
            }
            if (num9 != 0){
                tbperc9.textContent = Math.round(num9 / totalnum * 100) + "%"
            }
            if (num10 != 0){
                tbperc10.textContent = Math.round(num10 / totalnum * 100) + "%"
            }
            if (num11 != 0){
                tbperc11.textContent = Math.round(num11 / totalnum * 100) + "%"
            }
        }
    }
})

clearBoard.addEventListener('click', function(){
    num2 = 0
    num3 = 0
    num4 = 0
    num5 = 0
    num6 = 0
    num7 = 0
    num8 = 0
    num9 = 0
    num10 = 0
    num11 = 0
    num12 = 0
    totalnum = 0
    tbnum2.textContent = num2
    tbnum3.textContent = num3
    tbnum4.textContent = num4
    tbnum5.textContent = num5
    tbnum6.textContent = num6
    tbnum7.textContent = num7
    tbnum8.textContent = num8
    tbnum9.textContent = num9
    tbnum10.textContent = num10
    tbnum11.textContent = num11
    tbnum12.textContent = num12
    tbperc2.textContent = "0%"
    tbperc3.textContent = "0%"
    tbperc4.textContent = "0%"
    tbperc5.textContent = "0%"
    tbperc6.textContent = "0%"
    tbperc7.textContent = "0%"
    tbperc8.textContent = "0%"
    tbperc9.textContent = "0%"
    tbperc10.textContent = "0%"
    tbperc11.textContent = "0%"
    tbperc12.textContent = "0%"
})