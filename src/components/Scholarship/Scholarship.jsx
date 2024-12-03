import React from "react";
import "../Scholarship/Scholarship.css"; 

const Scholarship = () => {
  return (
    <section id="scholarship">
      <h2>Scholarship</h2>
      <p>
        Indian Institute of Technology Delhi also provides financial aid to students who need financial assistance. Apart from the ST/SC/PWD students, scholarships are also provided to brilliant students. The institution offers merit prizes to deserving students like toppers of departments. IIT Delhi offers scholarships for students of UG, PG, and Ph.D. programs. The Ph.D. students are offered financial assistance through Teaching/Research Assistantships.
      </p>

      <h3 className="th3">IIT Delhi UG Scholarships, Eligibility Criteria, and Amount</h3>
      <div className="table-wrapper">
        <table className="table-container">
          <thead>
            <tr>
              <th>Name of the Scholarship</th>
              <th>Eligibility Criteria</th>
              <th>Scholarship Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                name: "Merit-cum-Means (MCM) Scholarships",
                eligibility: "For the General/OBC/EWS students of engineering and technology.",
                amount: "The MCM scholarship grants a scholarship of Rs. 1000 per month.",
              },
              {
                name: "Institute Merit Prizes and Certificates",
                eligibility:
                  "The eligible students are top 7% of the 4-year B.Tech programme and 5-year Dual-Degree Programme, of each semester till the 8th/10th semester.",
                amount: "The Merit Prize offers a prize value of Rs. 2500.",
              },
              {
                name: "Donor Scholarships",
                eligibility: "These scholarships are offered by organizations, individuals, and trusts.",
                amount: "Varies based on the donor.",
              },
            ].map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.eligibility}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="th3">IIT Delhi Scholarship for PG Programmes</h3>
      <div className="table-wrapper">
        <table className="table-container">
          <thead>
            <tr>
              <th>Degree</th>
              <th>Scholarship Details</th>
              <th>Scholarship Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                degree: "M.Sc. Programmes",
                details:
                  "As per the government rules, this scholarship is offered only to those students whose parents' gross income is less than ₹4.5 lac per annum.",
                amount:
                  "A tuition fee exemption and Merit-cum-Means scholarship of Rs. 1000 per month is offered to the eligible 25% of the total strength of M.Sc. students.",
              },
              {
                degree: "M.Tech., M.S. (Research), and M.Des.",
                details: "No scholarship is available for the students in this category.",
                amount: "-",
              },
            ].map((item, index) => (
              <tr key={index}>
                <td>{item.degree}</td>
                <td>{item.details}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>Research Assistance</h3>
      <ul>
        {[
          "Research Assistance is provided to the students who are enrolled in the Ph.D. or research programs at IIT Delhi and are willing to work for the department.",
          "Any student enrolled in the research-based programs on a full-time basis at IIT Delhi.",
          "A minimum of INR 15,000 is awarded per month to students who can work about 20 hours a week.",
          "For the students enrolled in the MS Research Programme, a sum of INR 24,000 is awarded per month to work 8 hours a week.",
        ].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Loan Scholarships</h3>
      <p>
        Besides, most of the students are able to get scholarships on the basis of merits and academic qualifications at IIT Delhi. Many alumni have contributed and instituted scholarships that repay the interest on loans students have taken. Some of the loan scholarships are mentioned below:
      </p>
      <ul>
        {[
          "Ved & Prem Lata Gulati Loan Scholarship",
          "Smt. Sushma Lal Loan Scholarship",
          "Smt. Sarada Warrior Loan Scholarship",
          "Shrimati Dharam Devi Bhatia Loan Scholarship",
          "Shri Motiram Bulchand Shivdasani Scholarship",
          "Samir Anand and Batch of 88 Loan Scholarship",
        ].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Scholarship;
