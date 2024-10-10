
//finding the even number and sum up all the numbers

function evenNumber(number){

    let sum = 0;

    for(let i = 0; i < number.length; i++){
        if(number[i] % 2 === 0){

            sum = sum + number[i];

            
        }

    }

    return sum;
}

let index = [0, 2, 4, 6, 5, 3];

console.log(evenNumber(index));




// Finding the longest string

let longest;

function longestString(str){
    let string = '';
    for(let i = 0; i < str.length; i++){
       if(str[i].length > string){
         string = str[i].length;
          longest = str[i];
          console.log(longest)
       }
    }

    return string;
}


const strings = ['Maureen', 'Elvis', 'John', 'Aminkeng', 'Nunti'];
console.log(longestString(strings));


// Function of an object


let customer = [

    {
        name: 'Alice',
        age: 19,
        is_subscribed: true
    }
]

function cust_one(cust){

    if(cust.is_subscribed ===true && cust.age >= 18){
        return true;
        
    }else{
        return false
    }
}


console.log(cust_one(customer[0]));