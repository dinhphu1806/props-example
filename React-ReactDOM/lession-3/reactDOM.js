/* // syntax: React.createElement(type, props, children, n)
1. React.createElement()  => React Element
2. So sánh với document.createElement()  => DOM element
3. Thay đổi: id, className, style ,..
4. Thêm: text, HTML
5. Tạo:
    <h1 title="Hello" class="heading">Hellow guys</h1>
6. Tạo:
    <ul>
        <li>Javascript</li>
        <li>ReactJS</li>
    </ul>
7. Tạo: 
    <div class="post-item">
        <h2 title="Học React tại F8">ReactJS</h2>
        <p>ReactJS từ cơ bản tới nâng cao</p>
    </div>
*/

// BÀI 5
// using DOM 
// tạo h1
// const root = document.getElementById("root");
const h1DOM = document.createElement("h1");

h1DOM.title = "Hello";
h1DOM.className = "heading";
h1DOM.innerText = "Hellow guys";  // textContent, innerHTML

document.body.appendChild(h1DOM)
// root.appendChild(h1DOM);

// using React
const h1React = React.createElement("h1", {
    title: 'helo',
    className: "heading"
}, 'Đây là content')

console.dir(h1React) // trả về 1 object

// đối số thứ 1 là thẻ
// đối số thứ 2 là 1 object truyền các property
// đối số thứ 3 là content

// lúc này chwua thể render ra ra xem được do chưa học react DOM

// syntax: React.createElement(type, props, children, n)
// đối số thứ trở đi là children
// props còn có tên gọi là object
// children cũng lafg 1 props

// node element / element trong DOM

// BÀI 6:
// DOM
const rootBody = document.getElementById("root");
const ulDOM = document.createElement("ul");

const liDOM1 = document.createElement("li");
liDOM1.textContent = "Javascript";

const  liDOM2 = document.createElement("li");
liDOM2.textContent = "ReactJS";

// add 2 li vào ul
ulDOM.appendChild(liDOM1);
ulDOM.appendChild(liDOM2);

// add ul vào the div root
rootBody.appendChild(ulDOM)

// React
const   ulReact = document.createElement(
        "ul", // type
        {
            id: "name", // thêm id cho thẻ ul
            style: "color: red; font-size: 16" // them color và font-size cho thẻ ul
        },   // props rỗng
        React.createElement('li', null, 'Javascript'),
        React.createElement('li', null, 'ReactJS'),
)
//console.log(ulReact) // khi thể hiện 2 cái trở lên trở thành array
// đã thêm script ReactDOM 
// get root element
//const container = document.getElementById("root");

// React@17
// ReactDOM ==> render UI

//ReactDOM.render(ulReact, root) // ReactDOM gọi tới phương thức render(đối soos1, dds2 trong DOM)

// React@18
//const root = ReactDOM.createRoot(container);
//root.render(ulReact)
// Tạo: 
//     <div class="post-item">
//         <h2 title="Học React tại F8">ReactJS</h2>
//         <p>ReactJS từ cơ bản tới nâng cao</p>
//     </div>

// tạo thẻ div
const divDOM = document.createElement("div");
divDOM.className = "post-item"; // tạo class cho thẻ div

const  h2DOM = document.createElement("h2"); // tạo thẻ h2
h2DOM.title = "Học React tại F8"; //tạo title cho h2
h2DOM.innerText = "ReactJS";  // tạo content cho thẻ h2

const  pDOM = document.createElement("p"); // tạo thẻ p
pDOM.innerText = "ReactJS từ cơ bản tới nâng cao"; // tạo content cho p

divDOM.appendChild(h2DOM);  // đảy thẻ h2 vào trong div
divDOM.appendChild(pDOM);   // đẩy thẻ p vào trong div

// lấy thẻ body đã có sẵn trong html or tạo thẻ đã có tỏng HTML
document.body.appendChild(divDOM);





/*
 <header class="header">
        <div class="logo" id="logo">

        </div>

        <nav class="navMenu">
            <ul class="navList-item">
                <li class="nav-item">Home</li>
                <li class="nav-item">About</li>
                <li class="nav-item">Services</li>
                <li class="nav-item">Blog</li>
                <li class="nav-item">Contact</li>
            </ul>
        </nav>
    </header>
*/

const header = document.createElement('header');
header.className = "header";

const divLogo = document.createElement('div');
divLogo.className = "logo";
divLogo.id = "logo";

const nav = document.createElement("nav");
nav.className = "navMenu";

const ul = document.createElement("ul");
ul.className = "navList-item";

const li1 = document.createElement("li");
li1.className = "nav-item";
li1.innerText = "Home";
const li2 = document.createElement("li");
li2.className = "nav-item";
li2.innerText = "About";
const li3 = document.createElement("li");
li3.className = "nav-item";
li3.innerText = "Services";
const li4 = document.createElement("li");
li4.className = "nav-item";
li4.innerText = "Blog";
const li5 = document.createElement("li");
li5.className = "nav-item";
li5.innerText = "Contact";

header.appendChild(divLogo);
header.appendChild(nav);
nav.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
header.appendChild(nav);

document.body.appendChild(header);

// React 
// const header = React.createElement(
//     "header", 
//     "header",
//     React.createElement(
//         "nav",
//         "navMenu",
//         React.createElement(
//             "ul", 
//             "nav-List-item", 
//             React.createElement("li",
//                 "navItem",
//                  "Home"
//             ),
//             React.createElement("li",
//                 "navItem", 
//                 "About"
//             ),
//             React.createElement(
//                 "li",
//                 "navItem", 
//                 "Services"
//             ),
//             React.createElement(
//                 "li",
//                 "navItem",
//                 "Blog"
//             ),
//             React.createElement(
//                 "li",
//                 "navItem", 
//                 "Contact"
//             )
//         )
//     )
// );




/* Tạo thẻ 
       <div class="react">
            <p>This my ReactJS</p>
            <span>Chăm chỉ lên</span>
       </div>
*/

const ulReact1 = React.createElement(
    "div",
    {
        className: "react",
    },
    React.createElement("p", null,"This my ReactJS"),
    React.createElement("span", null, "Chăm chỉ lên")
)

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(ulReact1);


/*
5. Tạo:
    <h1 title="Hello" class="heading" id="heading">Hellow guys</h1>
6. Tạo:
    <ul>
        <li>Javascript</li>
        <li>ReactJS</li>
    </ul>
7. Tạo: 
    <div class="post-item">
        <h2 title="Học React tại F8">ReactJS</h2>
        <p>ReactJS từ cơ bản tới nâng cao</p>
    </div>
*/

// bài 5:
const h1React5 = React.createElement(
        "h1",
        {
            title: "Hello",
            className: "heading",
            id: "heading",
            //style: "color: red;"
        },
        "Xin chào các bạn nha !"
)

const container5 = document.getElementById("root");

const root5 = ReactDOM.createRoot(container5);

root.render(h1React5);

// bài 6
const ulReact6 = React.createElement(
        "ul",
        null,
        React.createElement(
            "li",
            {},
            "Javscript"
        ),
        React.createElement(
            "li",
            null,
            "ReactJS"
        )
)

const container6 = document.getElementById("root");

const root6 = ReactDOM.createRoot(container6);

root6.render(ulReact6)

