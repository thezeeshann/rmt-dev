import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

export function JobList({ jobItems, isLoading }) {
  return (
    <ul className="job-list">
      {isLoading && <Spinner />}
      {!isLoading && jobItems?.map((jobItem) => (
        <JobListItem jobItem={jobItem} />
      ))}
    </ul>
  );
}

export default JobList;
