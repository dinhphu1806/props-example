// const courses = [
//     {
//         "title": "Kiến Thức Nhập Môn IT",
//         "description": "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
//         "students_count": 81388,
//         "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/7.png",
//     },
//     {
//         "title": "HTML CSS từ Zero đến Hero",
//         "description": "Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.",
//         "students_count": 125807,
//         "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/2.png",
//     },
//     {
//         "title": "Responsive Với Grid System",
//         "description": "Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.",
//         "students_count": 28731,
//         "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/3.png",
//     }
// ]

// folder components => file Header.js
function Header() {
    return(
        <header>
            <div className="Header">
                <a href="#" id="logo">Logo</a>
            </div>
            <nav className="navMenu">
                <ul className="navList">
                    <li className="nav-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
}

// folder component => tạo file Banner.js
function Banner(item) {
    return(
        <div className="banner">
            <div className="banner__content">
                <img class="banner__content-img"
                    src={item.image}
                    alt={item.titleImg}
                ></img>   
                <div className="banner__content-title">
                        <h1 className="title">{item.titleBanner}</h1>
                        <p className="desc">{item.description}</p>
                        <div className="banner__content-links">
                            <a class="links"> <i className="fa-brands fa-facebook"></i> </a>
                            <a class="links"> <i className="fa-brands fa-twitter"></i> </a>
                            <a class="links"> <i className="fa-brands fa-linkedin"></i> </a>
                        </div>
                </div>
            </div>
        </div>
    )
}

// file App.js
function App() {
    return(
        <React.Fragment>
            <Header/>
            <Banner
                image = "https://images.unsplash.com/photo-1562737794-88835094442e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zmxhc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                titleImg = "Tiêu đề ảnh" 
                titleBanner = "Đây là title banner"
                description = "Đây là những dòng mô tả"
            />
          
        </React.Fragment>
       
      
    )
}

// file index.js => render ra html

ReactDOM.render(<App />, document.getElementById("root-1"))