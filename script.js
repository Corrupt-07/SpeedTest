// console.log("script.js");

const actual_content = document.getElementById('actual_content').textContent;
const user_text = document.getElementById('user-text');
const check_btn = document.getElementById('check_btn');
const error_content = document.querySelector('.error-content');

var str1,str2;
var arrStr1,arrStr2;
var count=0;

var StartTime,endTime,speed,correctWord,min=0;
// var mainArr1 = []
// var mainArr2 = []
// console.log(mainArr1);
// console.log(mainArr2);

// console.log(actual_content);
 str1 = actual_content;
 arrStr1 = str1.split(" ");
//  mainArr1.push(arrStr1)

// console.log(mainArr1);

function updateTime(){
    var d = new Date();
     StartTime = d.getTime();
    console.log(StartTime);
    console.log(StartTime/1000);
}

user_text.addEventListener('keydown',updateTime,{ once: true })

user_text.addEventListener('input', ()=>{
    // console.log(user_text.value);
     str2 = user_text.value;
     arrStr2 = str2.split(" ");
    // console.log(arrStr2);
})

check_btn.addEventListener('click', ()=>{
    // console.log(arrStr2);
    var d = new Date();
     endTime = d.getTime();
    //  console.log(Math.floor((endTime-StartTime)/1000));
     speed = Math.floor((endTime-StartTime)/1000);
    // console.log(arrStr1.length - parseInt(count));
    // error_content.innerHTML = Math.floor((endTime-StartTime)/1000);
    //   updateTime()
    // console.log(arr);
    // console.log(count);
    arrStr1.forEach((item,index,arr) =>{
        if (arr[index] ===arrStr2[index]) {
            // console.log("matchig");
            count++;
            console.log(count);
            if (count === arr.length) {
                // if (speed > 60) {
                //     speed = 0; 
                //     min +=1;
                // }
                error_content.innerHTML = `All character matching With words ${count} And With speed ${speed}` 
                console.log("all chacterr matching");
            }else{
                correctWord = arr.length - parseInt(count)
                error_content.innerHTML = `Correct word ${count} and the error words are ${correctWord} With speed ${speed}`;
                console.log(`Correct word ${count} and error is ${correctWord}`);
            }
        }
        if (arr[index] !=arrStr2[index] && count === 0) {
            error_content.innerHTML = `None of your words are correct`
        }
    
})
        count = 0;
})

