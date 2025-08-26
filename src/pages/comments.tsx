//SSR page

type Comments = {
    id: number;
    body: string;
    postId: string;
};

export async function getServerSideProps() {
    const res = await fetch('https://dummyjson.com/comments');
    const data = await res.json();

    return {
        props: {
            comments: data.comments,
        },
    };
}

export default function SSRPage({ comments }: { comments: Comments[] }) {
    return (
        <div className="comments-card container grid sm:grid-cols-2 lg:grid-cols-3 gap-4 m-5">
            {comments.map((comment) => (
                <div className="card" key={comment.id}>
                    <div className="card-body">
                        <h6>{comment.postId}</h6>
                        <p>{comment.body}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
