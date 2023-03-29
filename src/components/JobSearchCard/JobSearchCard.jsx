export default function JobSearchCard({ result }) {
    console.log(result);
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