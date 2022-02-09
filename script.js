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

rollDice.addEventListener('click', function(){
    let rolledValue1 = Math.round(Math.random() * 6)
    let rolledValue2 = Math.round(Math.random() * 6)
    dice1Image = document.querySelector('#dice-image')
    dice2Image = document.querySelector('#dice-image2')
    console.log(rolledValue1)
    console.log(rolledValue2)

    if (rolledValue1 == 0 || rolledValue2 == 0){
        console.log('Please roll again.')
    }
    
//Changing image tag for dice 1
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
    } else if (rolledValue1 == 6){
        dice1Image.src = "C:/Users/carol/InClassAct/FSI-Implement-Coin-Flipper/assets/images/dice/dice6.png"
    }


//Changing image tag for dice 2
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
    } else if (rolledValue2 == 6){
        dice2Image.src = "C:/Users/carol/InClassAct/FSI-Implement-Coin-Flipper/assets/images/dice/dice6.png"
    }


    let totalRolledValue = rolledValue1 + rolledValue2
    console.log(totalRolledValue)
})

