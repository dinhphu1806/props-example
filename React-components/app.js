/*
    Hooks
    1. React element types: string, function/class
    - wrapper
    - Header  -> Header component
    - Content -> Content component
    - Footer  -> Footer component
    2. Biểu diễn đơn giản với JSX
*/
//type có thể nhận được thêm String, function/class
// class cú pphaps ES6
// component: từ 1 ứng dụng lớn có thể bóc tách ra nhiều thành phần nhỏ 
//và sau đó giáp nó lại thành 1 ứng dụng hoàn chỉnh ==> giúp code clean, 
//ngắn gọn hơn, tái sử dụng được code

// ? Tại sao phải chia component: Cấu trúc rõ ràng và tận dụng được  tính tái sửu dụng của component
// dùng component
function Header() {
    return (
        <div className="header">Header</div>
    )
}

// dùng class
class Content extends React.Component {
    render() {
        return (
            <div className="content">Content</div>
        )
    }
}

// tách ra 1 file mới rồi import nó vào
// dùng hook chủ yêu nên dùng components nhiều
const component = (
    <div className="wrapper">
        <Header /> 
        <Content />
        <div className="footer">Footer</div>
    </div>
)

console.log(component)

ReactDOM.render(component, document.getElementById("root"));