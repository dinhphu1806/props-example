function PostItem() {
    return(
        <div className="post-item">
            <img src="https://images.unsplash.com/file-1662566326028-7013d2f857a6image" alt=""></img>
            <h2 className="post-title">C#(.NET) - Tương tác với F8 fullstack</h2>
            <p className="post-description">Bạn có kiến thức</p>
            <p className="post-published">Một ngày trước</p>
        </div>   
    )
}



const app = (
    <div className="posts-list">
        <PostItem />
        <PostItem />
        <PostItem />
    </div>
)


ReactDOM.render(app, document.getElementById("root"))