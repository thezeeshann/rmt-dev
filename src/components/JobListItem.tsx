import BookmarkIcon from "./BookmarkIcon";

type JobItems = {
  title: string;
  badgeLetters: string;
  company: string;
  daysAgo: number;
  relevanceScore: number;
  date: string;
};

type JobItemProps = {
  jobItem: JobItems;
};

export default function JobListItem({ jobItem }: JobItemProps) {
  return (
    <li className="job-item">
      <a className="job-item__link">
        <div className="job-item__badge">{jobItem.badgeLetters}</div>

        <div className="job-item__middle">
          <h3 className="third-heading">{jobItem.title}</h3>
          <p className="job-item__company">{jobItem.company}</p>
        </div>

        <div className="job-item__right">
          <BookmarkIcon />
          <time className="job-item__time">{jobItem.daysAgo}d</time>
        </div>
      </a>
    </li>
  );
}
