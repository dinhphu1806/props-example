/*
// 1. document.createElement()
// 2. document.body.appendChild()
// 3. console.dir()
// 4. innerText, id, className, style

const h1 = document.createElement('h1');
const root = document.getElementById('root');

h1.innerText = "Hellow "; // or textConetent
h1.id = "heading"; // thêm id vào thẻ h1
h1.className = "Holo"; // thêm class thẻ h1   trùng với class ES6
h1.className = "test class-2";
// h1.style.color = "red"; // thêm color text red
h1.style = "color: blue; font-size: 25px";
Object.assign(h1.style, {
    color: "blue",
    backgroundColor: '#333'
})
// render h1 vào body
document.body.appendChild(h1);  // render ra html
//appendChild: thêm thằng con vào

root.appendChild(h1) // thêm con h1 vào trong id="root"

// tạo thẻ h1 có nội dung là hellow gắn vào trong thẻ id = "root"

*/