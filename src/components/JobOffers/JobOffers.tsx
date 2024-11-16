import { useState, useEffect } from "react";

export interface Job {
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

interface Props {
  filterKeywords: string[];
  onClick: (keyword: string) => void;
}

export const JobOffers = ({ filterKeywords, onClick }: Props) => {
  const [jobsList, setJobsList] = useState<Job[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        setJobsList(jsonData);
      } catch (error) {
        console.log(error, "error");
      }
    };
    fetchData();
  }, []);

  const filteredJobs = jobsList.filter((job) => {
    const categories = [
      job.role,
      job.level,
      ...job.languages,
      ...job.tools,
    ];
    return filterKeywords.every((filter) => categories.includes(filter));
  });

  return (
    <div className="section-job-offers container">
      {filteredJobs.map((job) => (
        <div className="job-offers-container" key={job.id}>
          <div className="job-offers-content">
            <span className="job-offers-logo">
              <img src={job.logo} alt={job.company} />
            </span>
            <div>
              <div className="job-offers-company">
                <h2>{job.company}</h2>
                {job.new && <span>NEW!</span>}
                {job.featured && <span>FEATURED</span>}
              </div>
              <div className="job-offers-details">
                <h3>{job.position}</h3>
                <span>
                  {job.postedAt} • {job.contract} • {job.location}
                </span>
              </div>
            </div>
          </div>
          <div className="job-offers-filters">
            {[job.role, job.level, ...job.languages, ...job.tools].map(
              (key, index) => (
                <button onClick={() => onClick(key)} key={key + index}>
                  {key}
                </button>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
