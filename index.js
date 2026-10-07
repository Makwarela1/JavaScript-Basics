
let africa = ['cape town', 'PTA', 'JHB','angola'];
africa.shift ('cape town'); 
africa.unshift('addis and ababa');

if(africa.includes('cape town')) {
    console.log('This is a city in Africa')
} else {
    console.log('This city was not found!!')
}

if(africa.includes('addis and ababa')){
    console.log('This city is found in Ethiopia')
} else {
    console.log('City was not found!!')
}

