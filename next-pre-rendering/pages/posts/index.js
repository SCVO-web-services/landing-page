function PostList({posts}) {
    return(
        <>
            <h1> List of Posts</h1>
            {posts.map( post => {
                return(
                    <div key={post.id}>
                        <h2>
                            {post.id} {post.title}
                        </h2>
                    </div>
                )
            } ) }

        </>
    )

}
export default PostList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await response.json()

    return {
        props: {
            posts: data.slice(0,3)
        }
    }
}