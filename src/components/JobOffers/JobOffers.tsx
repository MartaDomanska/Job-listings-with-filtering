export interface Jobs {
  id: number;
  logo: string;
  company: string;
  new: boolean;
  featured: boolean;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  role: string;
  level: string;
  languages: string[];
  tools: string[];
}

export const JobOffers = ({
  jobs,
  onClick,
}: {
  jobs: Jobs[];
  onClick: (keyword: string) => void;
}) => {
  return (
    <div className="section-job-offers container">
      {jobs.map((job) => (
        <div className="job-offers-container" key={job.id}>
          <div className="job-offers-content">
            <div className="job-offers-logo">
              <img src={job.logo} alt={job.company} />
            </div>
            <div>
              <div className="job-offers-company">
                <h2>{job.company}</h2>
                {job.new && <span>NEW!</span>}
                {job.featured && <span>FEATURED</span>}
              </div>
              <div className="job-offers-details">
                <h3>{job.position}</h3>
                {job.postedAt} • {job.contract} • {job.location}
              </div>
            </div>
          </div>
          <div className="job-offers-filters">
            <button onClick={() => onClick(job.role)}>
              <span>{job.role}</span>
              <span>{job.level}</span>
              <span>{job.languages.join(", ")}</span>
              <span>{job.tools.join(", ")}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
