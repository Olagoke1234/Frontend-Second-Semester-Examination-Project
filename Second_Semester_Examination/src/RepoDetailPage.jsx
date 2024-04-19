import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RepoDetailPage.css"; // Import CSS file for styling

const RepoDetailPage = () => {
  const { repoId } = useParams(); // Extract the repository ID from URL params
  const [repoDetails, setRepoDetails] = useState(null);

  useEffect(() => {
    const fetchRepoDetails = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repositories/${repoId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repository details");
        }
        const data = await response.json();
        setRepoDetails(data);
      } catch (error) {
        console.error("Error fetching repository details:", error.message);
      }
    };

    fetchRepoDetails();
  }, [repoId]);

  return (
    <div className="repo-detail-container">
      <h2 className="repo-detail-heading">Repository Detail Page</h2>
      {repoDetails ? (
        <div className="repo-detail-content">
          <p>
            <strong>Repository Name:</strong> {repoDetails.name}
          </p>
          <p>
            <strong>Description:</strong> {repoDetails.description}
          </p>
          <p>
            <strong>URL:</strong>{" "}
            <a
              href={repoDetails.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {repoDetails.html_url}
            </a>
          </p>
          <p>
            <strong>Stars:</strong> {repoDetails.stargazers_count}
          </p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading repository details...</p>
      )}
    </div>
  );
};

export default RepoDetailPage;