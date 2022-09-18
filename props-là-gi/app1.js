// props là 1 object chứa các thuộc tính có thể mô ta thằng React.createElement
/*
- React elements
    + Sử dụng props giống như với attribute của thẻ HTML
    + 2 props class, for => className, htmlFor
    + Phải tuân theo quy ước có sẵn
- React components
    + Sử dụng props giống như đối số cho Component  // đoạn này có thể hiểu truyền đối số vào hàm đã gọi vào file App.js trong thẻ bọc
                                                       // <PostItem 
                                                                  title=""
                                                                  image=""
                                                                  description=""
                                                          />
                                                    xong vào file tạo sẽ dùng vào nội dung {tham số.title}
    + Tự do đặt tên props
        - Bật theo cameCase  // chữ cái của từ tiếp theo viết hoa ví dụ publishAlt
        - Có thể bao gồm đấu gạch ngang
    + Chú ý:
        - Prop "key" là prop đặc biệt // dùng khi đưa vào trng mảng dùng map 
        - Props cơ bản là đối số của Component
           => Props có thể là bất cứ kiểu dữ liệu gì 
        - Sử dụng destructuring
*/


// chữa bài tập

// file PostItem.js -> tạo file
function PostItem(item) {   // đây là component
   // if (typeof item.callback === 'function')  // thường dùng callback để listen các DOM event
     //   item.callback(Math.random()) // random:  0.04933106732816639
    
    return(
       <div className="post-item">
            <h1 class="post-title">{item.title}</h1>
            <img 
                src={item.image} 
                alt={item.publishAlt}
            />
            <p className="post-description">{item.description}</p>
            {/*<label htmlFor="email">email</label>  click vô chữ email sẽ focus ào ô input */}
            {/* <input id="email"></input> */}
       </div>
    )
  
}


// file App.js file chính

function App() {   // react component 
    return(    // react element
             <div id="wrapper">   {/*thẻ bọc hoặc cho vào <React.Fragment></React.Fragment>*/}
                <div>
                    {/* react component */}
                    <PostItem 
                        title = "1 Tiêu đề là đây nhé !"
                        image = "https://images.unsplash.com/photo-1613963761543-cc92783708fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zmxhc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
                        description = "Mô tả nội dung"
                        publishAlt = "tiêu đề ảnh nha"
                        // callback = {(item) => {
                        //     console.log("random: ", item)
                        // }}
                    />  

                    <PostItem 
                        title = "2 Tiêu đề là đây nhé !"
                        image = "https://images.unsplash.com/photo-1510300101842-d7a2ed0bde3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
                        description = "Mô tả nội dung"
                        publishAlt = "tiêu đề ảnh nha"
                    />
                </div>
               
            </div>
           
    )
}

// file index.js dùng để render

// ReactDOM.render(<App />, document.getElementById("root-1"))