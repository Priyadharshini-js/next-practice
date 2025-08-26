//SSG page
export function getStaticProps() {
    return { props: { note: "This is Static Page" } }
}

const SSG = ({ note }: { note: string }) => {
    return (
        <>
            <h1>{note}</h1>
        </>
    )
}
export default SSG