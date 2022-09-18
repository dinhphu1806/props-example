/*
 JSX --> Javascript XML

 1. Luôn dùng React.createElement() ? vấn đề ?
 2. JSX ? Live demo: https://bit.ly/2V0IMN7
 3. JSX không phải là HTML,
    Cần có Javascript, Babel để dùng JSX
 4. JSX và React-DOM?
*/

/* JSX
const reactCourse = "ReactJS F8"

const ul = 
    <ul>
        <li style={{color: red}}>Javascript</li>
        <li>{reactCourse}</li>
    </ul>
*/

// to JS

// const reactCourse = "React F8";
// const ul = React.createElement(
//         "ul",
//         {},
//         React.createElement(
//             "li",
//              {
//                 style: {color: red}
//              },
//              "Javascript"
//         ),
//         React.createElement(
//             "li",
//             {},
//             reactCourse
//         )
// )


// setting lib babel JSX
//vào react.org -> add react to a website --> optional: try with JSX --> quickly try JSX--> copi link
// <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>


// const title = "fullstack";

// const  headingElement = 
//     <h1 className="heading" style = {{color: red}}>{title}</h1>;

// const container = document.getElementById("root");

// const root = ReactDOM.createRoot(container);

// root.render(headingElement)


// render ra các thẻ li
const courses = [
    {
        name: 'HTML, CSS'
    },
    {
        name: 'responsive'
    },
    {
        name: 'reactJS'
    }
]

const ul = (  
        <ul>
            {courses.map(item => {
                return <li>{item.name}</li>
            })}
        </ul>)
  
const container = document.getElementById("root-1");

const root = ReactDOM.createRoot(container);

root.render(ul)



