export default function JobSearchCard({ result }) {
    console.log(result);
    return (
        <>
            {result.title}
            &nbsp; | &nbsp;
            {result.company.display_name}
            &nbsp; - &nbsp;
            {result.location.display_name}
            <hr />
        </>
    );
}