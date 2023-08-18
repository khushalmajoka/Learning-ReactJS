const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

// EL2 2

// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// let word1 = text.slice(0, text.indexOf('HTML')-1).split(' ')
// console.log(word1)
// let word2 = text.slice(text.indexOf('HTML'), text.length).split(',')
// words = word1.concat(word2)
// console.log(words)
// console.log(words.length)

// EL2 3

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// if(shoppingCart[0] != 'Meat'){
//     shoppingCart.unshift('Meat')
// }
// if(shoppingCart[shoppingCart.length-1] != 'Sugar'){
//     shoppingCart.push('Sugar')
// }
// shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
// shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
// console.log(shoppingCart)

// EL2 4

// if(countries.includes('Ethiopia')){
//     console.log('ETHIOPIA')
// }else{
//     countries.push('Ethiopia')
// }

// EL2 5

// if(webTechs.includes('Sass')){
//     console.log('Sass is a CSS preprocess')
// }else{
//     webTechs.push('Sass')
//     console.log(webTechs)
// }

// EL2 6

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']

// const fullStack = frontEnd.concat(backEnd)
// console.log(fullStack)

// EL3

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 
// ages.sort()
// console.log('min age:', ages[0])
// console.log('max age:', ages[ages.length-1])
// if(ages.length%2 == 0){
//     console.log('median age:', (ages[Math.floor(ages.length/2)]+ages[Math.ceil(ages.length/2)])/2)
// }else{
//     console.log(ages[Math.floor(ages.length/2)])
// }
// let sum = 0;
// ages.forEach(e => {
//     sum += e;
// })
// console.log('average age;', sum/ages.length)
// console.log('range:', ages[ages.length-1]-ages[0])
// console.log('min-average:', Math.abs(ages[0]-sum/ages.length))
// console.log('max-average:', ages[ages.length-1]-sum/ages.length)

// console.log(countries.slice(0, 10))
// console.log(countries[Math.floor(countries.length/2)])

// if(countries.length%2 == 0){
//     const countries1 = countries.slice(0, countries.length/2)
//     const countries2 = countries.slice(countries.length/2, countries.length)
//     console.log(countries1, countries2)
// }else{
//     const countries1 = countries.slice(0, Math.ceil(countries.length/2))
//     const countries2 = countries.slice(Math.ceil(countries.length/2), countries.length)
//     console.log(countries1, countries2)
// }