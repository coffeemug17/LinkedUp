export default function JobSearchCard({ result }) {
    return (
        <>
            {result.title}
            &nbsp; | &nbsp;
            {result.company}
            &nbsp; - &nbsp;
            {result.location}
            <hr />
        </>
    );
}