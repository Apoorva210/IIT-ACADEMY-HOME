import React from "react";
import "../Ranking/Ranking.css"; 

const Ranking = () => {
  return (
    <section id="ranking">
      <h2>Ranking</h2>
      <p>
        IIT Delhi is one of Asia's top engineering institutes and consistently ranks among the best in both national and international rankings. As per the NIRF rankings, IIT Delhi has consistently stayed in the top 3 engineering colleges in India. In the QS World University Rankings 2025, IIT Delhi ranks among the top 150 universities globally.
      </p>

      <h3 className="th3">IIT Delhi International Ranking 2025</h3>
      <div className="table-wrapper">
        <table className="table-container">
          <tbody>
            <tr>
              <th>Ranking Body</th>
              <th>Category</th>
              <th>Rank</th>
            </tr>
            {[
              { body: "QS World Ranking 2025", category: "World University", rank: "150" },
              { body: "QS World Ranking 2024", category: "World University", rank: "197" },
              { body: "US News Ranking 2024", category: "Best Global Universities", rank: "689" },
              { body: "QS World Ranking 2023", category: "World University", rank: "174+" },
            ].map((item, index) => (
              <tr key={index}>
                <td>{item.body}</td>
                <td>{item.category}</td>
                <td>{item.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="th3">IIT Delhi National Ranking 2024</h3>
      <div className="table-wrapper">
        <table className="table-container">
          <tbody>
            <tr>
              <th>Ranking Body</th>
              <th>Category</th>
              <th>Rank</th>
            </tr>
            {[
              { body: "India Today 2024", category: "Engineering", rank: "1" },
              { body: "The Week 2024", category: "Technical Universities", rank: "2" },
              { body: "NIRF 2023", category: "Engineering", rank: "2" },
            ].map((item, index) => (
              <tr key={index}>
                <td>{item.body}</td>
                <td>{item.category}</td>
                <td>{item.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Ranking;
