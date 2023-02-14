function Posts ({posts}) {
    return (
        <div>
            <ul>
                {posts.map (post =>
                    <li key={post.id}
                        className="w-[300px] mx-auto flex items-center justify-between border-black border-2 py-2 px-4 mb-2">
                        <h2 className="mr-2">{post.title}</h2>
                        <img src={post.img} alt={post.title} className="w-1/4"/>
                    </li>)}
            </ul>
        </div>
    );
}

export default Posts
