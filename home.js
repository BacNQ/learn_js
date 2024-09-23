// //Tham so trong ham
// function writeLog(message, message2){
//     console.log(message);

//     if(message2){
//         console.log(message2);
//     }
// }

// writeLog('test', 'test2');

// //For of
// function argLog(){
//     var myString = '';
//     for(var param of arguments){
//         myString += `${param} - `;
//     }
//     console.log(myString);
// }

// argLog('log 1', 'log 2', 'log 3');

// //Return trong ham 
// function cong(a, b){
//     return a+b;
// }

// var result = cong(2, 8);
// console.log(result);

// //Cac loai function
// function showMessage(){
//     console.log('Declaration function');
// }//Declaration function
// showMessage();

// var showMessage2 = function(){
//     console.log('Expression function');
// }//Expression function
// showMessage2();

// //Kiểu dữ liệu chuỗi
// var fullName = 'Nguyen Qui Bac \"21 tuoi \"';
// console.log(fullName.length);

// //Lam viec voi chuoi
// var myname = 'Nguyen Qui Bac Qui Qui';
// console.log(myname.length); //Length
// console.log(myname.indexOf('Qui')); //Tim index
// console.log(myname.lastIndexOf('Qui')); //Tim index cuoi cung
// console.log(myname.slice(6, 10)); //Cat chuoi
// console.log(myname.replace(/Qui/g, 'Van')); //Replace chuoi
// console.log(myname.trim()); 
// console.log(myname.toUpperCase()); //Chu thuowng thanh chu hoa
// console.log(myname.toLowerCase()); //Chu hoa thanh chu thuong
// //Split chuoi
// var subject = 'JS, PHP, Java';
// console.log(subject.split(', '));
// //Get a character by Index
// const myString2 = 'Bac NQ';
// console.log(myString2.charAt(5));

// //Example split
// var coursesStr = 'HTML & CSS, JavaScript, ReactJS';
// function strToArray(str) {
//     return str.split(', ');
// }
// console.log(strToArray(coursesStr)) // Expected results

// //Lam viec voi number
// var age = 18;
// var PI = 3.14;
// var ketqua = 20 / "abc";
// console.log(isNaN(ketqua)); //Kiểm tra xem có phải số không hợp lệ không

// console.log(age.toString()); //Chuyển số thành chuỗi
// console.log(PI.toFixed(1)); //Làm tròn số thập phân

// //Làm việc với mảng
// var languages = [
//     'PHP',
//     'Ruby',
//     'Java',
// ];
// console.log(languages);
// console.log(Array.isArray(languages)); //Kiểm tra xem có phải mảng hay không
// console.log(languages.length); //Kiểm tra độ dài mảng
// console.log(languages[0]); //Lấy phân tử theo index
// console.log(languages.toString()); //Chuyển kiểu dữ liệu sang String
// console.log(languages.join(', ')); //gộp mảng thành một chuỗi 
// console.log(languages.pop()); //Xóa phần tử cuối mảng và trả về phần tử đã xóa
// console.log(languages.push('Dart')); //Thêm một hoặc nhiều phần tử vào cuối mảng trả về độ dài mảng
// console.log(languages.shift()); //Xóa đi phần tử ở đầu mảng và trả về phần tử đã xóa
// console.log(languages.unshift()); //Thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài mảng
// languages.splice(1, 0, 'Swing'); 
// console.log(languages);

// var languages2 = [
//     'Mongo',
//     'SQL'
// ];
// console.log(languages.concat(languages2)); //merge 2 mảng
// console.log(languages.slice(1, 2));

// //Làm việc với Object
// var info = {
//     name: 'Bac NQ',
//     age: 21,
//     address: 'Ha Noi',
// };

//Đệ quy 
// var array = ['a', 'b', 'c', 'c', 'c'];
// console.log([...(new Set(array))]);

// //Đệ quy đếm ngược
// function countDown(num) {
//     if (num > 0) {
//         console.log(num);
//         return countDown(num - 1);
//     }

//     return num;

// }

// countDown(10);

// //Array methods
// //forEach
// var courses = [
//     {
//         id: 1,
//         name: 'java',
//         coin: 0
//     },
//     {
//         id: 2,
//         name: 'css',
//         coin: 100
//     },
//     {
//         id: 3,
//         name: 'html',
//         coin: 230
//     },
//     {
//         id: 4,
//         name: 'java',
//         coin: 6
//     },
// ]
// courses.forEach(function (course, index) {
//     console.log(course, index);
// });

// //every()
// //Kiểm tra tất cả phần tử trong mảng phải cùng thỏa mãn 1 điều kiện gì đó
// //Trả về kiểu dữ liệu boolean
// var isFree = courses.every(function (course, index) {
//     return course.coin === 0;
// });
// console.log(isFree);

// //some()
// //Kiểm tra 1 phần tử thỏa mãn 1 điều kiện nào đó
// var isFree = courses.some(function (course, index) {
//     return course.coin === 0;
// });
// console.log(isFree);

// //find()
// //Chỉ trả về 1 phần tử cần tìm kiếm
// var course = courses.find(function (course, index) {
//     return course.name === 'java';
// });
// console.log(course);

// //filter()
// //Chỉ trả về 1 phần tử cần tìm kiếm
// var listCourse = courses.filter(function (course, index) {
//     return course.name === 'java';
// });
// console.log(listCourse);

// //map()
// //Khi muốn chỉnh sửa, thay đổi element của 1 array
// var newCourses = courses.map(function (course, index) {
//     return {
//         id: course.id,
//         name: `Khóa học: ${course.name}`,
//         coin: course.coin,
//         index: index,
//     }
// });
// console.log(newCourses);

// //reduce()
// //Khi muốn nhận về 1 giá trị duy nhất sau khi tính toán và xử lý trên các phần tử của array
// var totalCoin = courses.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue.coin;
// }, 0);
// console.log(totalCoin);

// //Ví dụ 2 của reduce()
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
//     return flatOutput.concat(depthItem);
// }, []);
// console.log(flatArray);

// //Includes()
// //Chỉ có trong String và Mảng dùng để tìm xem có phần tử đó trong mảng hay string không, kiểu dữ liệu boolean
// var courseTest = ['java', 'php', 'css'];
// console.log(courseTest.includes('php'));

//Callback
// var courses = [
//     'java',
//     'php',
//     'html',
//     'java'
//  ];

//  var courses_1 = [
//         {
//             id: 1,
//             name: 'java',
//             coin: 90
//         },
//         {
//             id: 2,
//             name: 'css',
//             coin: 100
//         },
//         {
//             id: 3,
//             name: 'html',
//             coin: 230
//         },
//         {
//             id: 4,
//             name: 'java',
//             coin: 6
//         },
//         {
//             id: 4,
//             name: 'java',
//             coin: 9
//         },
//     ]

// var numberSum = [1, 2, 3, 4, 5, 6];

// Array.prototype.map2 = function(callback){
//     var output = [];
//     for(var i=0; i<this.length;++i){
//         var result = callback(this[i], i);
//         output.push(result);
//     }

//     return output;
// }

//  var htmls = courses.map2(function (course, index){
//     return `<h2>${course}</h2>`;
//  })

//  console.log(htmls.join(''));


// Array.prototype.filter2 = function (callback){
//     var output = [];
//     for(var i=0; i<this.length; i++){
//         var result = callback(this[i]);
//         if(result == true){
//             output.push(this[i]);
//         }
//     }

//     return output;

// }

// var list = courses_1.filter2(function (a){
//     return a.name === 'java';
// })

// console.log(list);

//Empty elements of array

//HTML DOM
// var note = document.getElementsByClassName('button');
// console.log(note);

// var cssSec = document.querySelector('.button');
// console.log(cssSec);

//DOM Attributes
// var headingElement = document.querySelector('h1');
// headingElement.className = 'head';
// headingElement.setAttribute('class', 'heading');
// console.log(headingElement.getAttribute('class'));
// console.log(headingElement);

//InnerText, TextContent
// var headingElement = document.querySelector('h1');
// console.log(headingElement.innerText); //Hiển thị text note
// headingElement.innerText = 'new head'; //Đặt text note

//InnerHTML, OuterHTML Property
// var boxElement = document.querySelector('.box');
// boxElement.innerHTML = '<h1 title = "bacnq">Headinggg</h1>'
// console.log(boxElement.innerHTML);
// console.log(document.querySelector('h1').innerText);

//DOM CSS
// var boxElement = document.querySelector('.box');
// Object.assign(boxElement.style, {
//     width: '100px',
//     height: '200px',
//     backgroundColor: 'red',
// })
// console.log(boxElement.style.width);

//ClassList Property
//add: thêm vào 1 class
//contains: kiểm tra xem có chứa class hay không
//remove: xóa 1 class
//toggle: kiểm tra nếu tồn tại class thì sẽ xóa, nếu không sẽ thêm vào
// var boxElement = document.querySelector('.box');
// console.log(boxElement.classList.length);
// boxElement.classList.add('red');
// console.log(boxElement.classList.contains('red'));
// boxElement.classList.remove('box-2');
// boxElement.classList.toggle('box');

//DOM EVENTS
// var h1Element = document.querySelector('h1')
// h1Element.onclick = function(e){
//     console.log(e.target)
// }

// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onchange = function(e){
//     console.log(e.target.value);
// }

// var inputElement = document.querySelector('input[type="checkbox"]');
// inputElement.onchange = function(e){
//     console.log(e.target.checked);
// }

// var inputElement = document.querySelector('select');
// inputElement.onchange = function(e){
//     console.log(e.target.value);
// }

// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onkeypress = function(e){
//     console.log(e.which);

//     switch(e.which) {
//         case 13:
//             console.log('exit');
//             break;
//     }
// }

// //PreventDefault 
// var aElements = document.links;
// for(var i=0;i<aElements.length;i++){
//     aElements[i].onclick = function(e){
//         if(!e.target.href.startsWith('https://f8.edu.vn')){
//             e.preventDefault();
//         }
//     }
// }

// var ulElement = document.querySelector('ul');
// ulElement.onmousedown = function(e) {
//     e.preventDefault();
// }
// ulElement.onclick = function(e){
//     console.log(e.target);
// }

// //StopPropagation
// document.querySelector('div').onclick = function(){
//     console.log('DIV')
// }

// document.querySelector('button').onclick = function(e){
//     e.stopPropagation();
//     console.log('Click!')
// }

// //Event listener
// var btn = document.querySelector('button');
// btn.addEventListener('click', function(e){
//     console.log('click me!');
// })

//Promise
// var promise = new Promise(
//     function (resolve, reject) {
//         resolve();
//     }
// );

// Promise
//     .then(function () {
//         return 1;
//     })
//     .then(function (data) {
//         console.log(data);
//         return 2;
//     })
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function () {

//     })
//     .finally(function () {

//     });

// function sleep(ms) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, ms);
//     })
// }

// sleep(1000)
//     .then(function () {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(function () {
//         console.log(2);
//         return sleep(1000);
//     })

// var pro = Promise.resolve('thanh cong!');
// pro.then(function (result) {
//     console.log(result);
// })

// var pro1 = new Promise(function (resolve) {
//     setTimeout(function () {
//         resolve([1]);
//     }, 1000)
// })

// var pro2 = new Promise(function (resolve) {
//     setTimeout(function () {
//         resolve([2, 3]);
//     }, 3000)
// })

// Promise.all([pro1, pro2])
//     .then(function (result) {
//         var re1 = result[0];
//         var re2 = result[1];
//         console.log(re1.concat(re2));
//     })

//Promise Example
// var users = [
//     {
//         id: 1,
//         name: 'Bac NQ'
//     },
//     {
//         id: 2,
//         name: 'Son Dang'
//     },
//     {
//         id: 3,
//         name: 'Anh Duc'
//     },
// ];

// var comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content: 'Bao gio ra video'
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: 'Vua ra xong!'
//     }
// ];

// function getComments() {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve(comments);
//         }, 1000);
//     });
// }
// getComments()
//     .then(function (comments) {
//         var userIds = comments.map(function (comment) {
//             return comment.user_id;
//         })

//         return getUsersByIds(userIds)
//             .then(function (users) {
//                 return {
//                     users: users,
//                     comments: comments,
//                 };
//             })
//     })
//     .then(function (data) {
//         var commmentBlock = document.getElementById('comment-block')
//         var html = '';
//         data.comments.forEach(function (comment) {
//             var user = data.users.find(function (user) {
//                 return user.id === comment.user_id;
//             });

//             html += `<li>${user.name}: ${comment.content}</li>`;
//         });

//         commmentBlock.innerHTML = html;
//     });

// function getUsersByIds(userIds) {
//     return new Promise(function (resolve) {
//         var result = users.filter(function (user) {
//             return userIds.includes(user.id);
//         })

//         setTimeout(function () {
//             resolve(result);
//         }, 1000)
//     });
// }

//Fetch
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (users) {
//         var htmls = users.map(function (user) {
//             return `<li>
//             <h3>Ten nguoi dung: ${user.name}</h3>
//             <p>Email: ${user.email}</p>
//         </li>`;
//         })
//         var html = htmls.join('');
//         document.getElementById('comment-block').innerHTML = html;
//     })
//Json-Server
// var getAPIposts = 'http://localhost:3000/posts'
// fetch(getAPIposts)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (post) {
//         console.log(post);
//     });

var coursesApi = 'http://localhost:3000/courses'

function start() {
    // getCourses(function(courses){
    //     renderCourses(courses);
    // });
    getCourses(renderCourses);
    handleCreateForm();

}
start();

function getCourses(callback) {
    fetch(coursesApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function (course) {
        return `<li class="course-item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick="handleDeleteCourse(${course.id})">Delete</button>
        </li>`;

    });
    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function () {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var formData = {
            name: name,
            description: description
        }
        createCourse(formData, function () {
            getCourses(renderCourses);
        });
    }
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }
    fetch(coursesApi, options)
        .then(function (response) {
            response.json();
        })
        .then(callback);
}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
    }
    fetch(coursesApi + '/' + id, options)
        .then(function (response) {
            response.json();
        })
        .then(function () {
            var courseItem = document.querySelector('.course-item-' + id);
            if (courseItem) {
                courseItem.remove();
            }
        });
}

// //Destructuring, rest
// var array = ['Jan', 'Feb', 'Mar', 'Apr'];
// var [a,...rest] = array;
// console.log(rest);

//Spread
// var obj1 = {
//     name: 'John',
//     age: 30,
//     job: 'Developer'
// }

// var obj2 = {
//     job: 'Designer',
//     city: 'New York'
// }

// var mergedObj = {...obj1,...obj2 };
// console.log(mergedObj);

//Tagged template literals
// function highlight([first, ...string], ...values) {
//     return values.reduce(function (acc, curr){
//         return [...acc, `<span>${curr}</span>`, string.shift()]
//     }, [first]).join('');
// }

// var name1 = 'John';
// var job = 'Designer';

// const html = highlight`Ten toi la ${name1} dang lam ${job}`;
// console.log(html);

//Module 
import logger from './logger.js';
import { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from './constants.js';
import * as constants from './constants.js';
console.log(constants);
logger('test...', TYPE_ERROR);

//Optional chaining
const user = {
    name: 'John',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

console.log(user.address?.city); // Optional chaining