import React from "react";
import "../Placement/Placement.css"; 

const Placement = () => {
  return (
    <section id="placement">
      <h2>Placement</h2>
      <p>
        IIT Delhi has an outstanding placement record across all levels of students. In the latest placement drive for 2024, a total of 1,000 students were selected, with 1,050 offers made during Phase 1. More than 50 international offers, including PPOs, were secured from 20 international companies. Top recruiters include Air India, Microsoft, Bajaj Auto, and others. IIT Delhi's placement offers have seen a 20% increase from 2023, with around 400 national and international organizations offering more than 800 job profiles in various sectors.
      </p>
      <p>
        According to the NIRF 2024 report, 676 UG (4-year) students were placed with an average salary of INR 20 lakhs, 92 PG (5-year) students were placed with a median salary of INR 22 lakhs, and 432 PG students were placed with an average salary of INR 17 lakhs. Over 50 students received domestic salary packages exceeding INR 1 crore during the IIT Delhi placement program.
      </p>
      <p>
        IIT Delhi MBA Placements 2023 concluded with 100% placements. The highest package was INR 41.13 LPA, and the average package was INR 25.82 LPA. The MBA Summer Internship Placements for 2024 also concluded with 100% internship success, with the highest stipend standing at INR 4.04 lakhs per month and the average stipend at INR 2.63 lakhs per month for the MBA batch.
      </p>

      <div className="table-wrapper">
        <table className="table-container">
          <tbody>
            <tr>
              <th>Program Name</th>
              <th>Placement (%)</th>
            </tr>
            {[
              { program: "Biochemical Engineering and Biotechnology (4-Year)", rate: "82.61%" },
              { program: "Civil Engineering (4-Year)", rate: "84.13%" },
              { program: "Chemical Engineering (4-Year)", rate: "91.04%" },
              { program: "Computer Science and Engineering (4-Year)", rate: "98.95%" },
              { program: "Electrical Engineering (4-Year)", rate: "96.84%" },
              { program: "Electrical Engineering (Power and Automation) (4-Year)", rate: "95.92%" },
              { program: "Mechanical Engineering (4-Year)", rate: "82.86%" },
              { program: "Production and Industrial Engineering (4-Year)", rate: "91.18%" },
              { program: "Mathematics and Computing (4-Year)", rate: "97.01%" },
              { program: "Engineering Physics (4-Year)", rate: "82.93%" },
              { program: "Textile Technology (4-Year)", rate: "80.00%" },
              { program: "Overall B.Tech. (4-Year)", rate: "90.01%" },
              { program: "Biochemical Engineering and Biotechnology (5-Year Dual Degree)", rate: "87.50%" },
              { program: "Chemical Engineering (5-Year Dual Degree)", rate: "84.21%" },
              { program: "Computer Science and Engineering (5-Year Dual Degree)", rate: "93.10%" },
              { program: "Mathematics and Computing (5-Year Dual Degree)", rate: "95.83%" },
              { program: "Overall Dual Degree", rate: "89.90%" },
            ].map((item, index) => (
              <tr key={index}>
                <td>{item.program}</td>
                <td>{item.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="th3">Package Offered</h3>
      <div className="table-wrapper">
        <table className="table-container">
          <tbody>
            <tr>
              <th>Domestic Placements</th>
              <th>Amount (in LPA)</th>
            </tr>
            <tr>
              <td>Median Gross Salary</td>
              <td>17.40</td>
            </tr>
            <tr>
              <td>Median CTC</td>
              <td>19.50</td>
            </tr>
          </tbody>
        </table>

        <h3 className="th3">Average Package Offered</h3>
        <table>
          <tbody>
            <tr>
              <th>Domestic Placements</th>
              <th>Amount (in LPA)</th>
            </tr>
            <tr>
              <td>Average Gross Salary</td>
              <td>18.60</td>
            </tr>
            <tr>
              <td>Average CTC</td>
              <td>21.90</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Top Recruiters</h3>
      <ul>
        {[
          "Allen Career Institute",
          "American Express",
          "EXL Analytics",
          "FIITJEE",
          "HCL Technologies",
          "Intel",
          "Jio Platforms",
          "Navi Technologies",
          "Praxis Global",
          "Reliance Industries",
        ].map((recruiter, index) => (
          <li key={index}>{recruiter}</li>
        ))}
      </ul>

      <h3>IIT Delhi Placements 2024 Highlights</h3>
      <p>The key highlights of IIT Delhi placements 2024 are:</p>
      <ul>
        <li>Total offers: 1,050</li>
        <li>International offers: 50+</li>
        <li>Top recruiting sector: Core (Technical) with 42% placement distribution</li>
        <li id="2023">Top recruiters: Microsoft, Goldman Sachs, Texas Instruments</li>
      </ul>

      <h3 className="th3">IIT Delhi Placements 2023 Highlights</h3>
      <div className="table-wrapper">
        <table className="table-container">
          <tbody>
            <tr>
              <th>Particulars</th>
              <th>Placement Statistics (2022)</th>
              <th>Placement Statistics (2023)</th>
            </tr>
            <tr>
              <td>Total job offers received</td>
              <td>1,300</td>
              <td>1,300</td>
            </tr>
            <tr>
              <td>No. of unique job offers</td>
              <td>1,100</td>
              <td>1,150</td>
            </tr>
            <tr>
              <td>Total PPOs</td>
              <td>230</td>
              <td>260</td>
            </tr>
            <tr>
              <td>No. of international offers</td>
              <td>NA</td>
              <td>30</td>
            </tr>
            <tr>
              <td>No. of companies</td>
              <td>600</td>
              <td>500</td>
            </tr>
            <tr>
              <td>Placement rate</td>
              <td>82%</td>
              <td id="2024">84.94%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3">IIT Delhi MBA Placements 2024</h3>
      <p>The highlights of IIT Delhi MBA placements 2024 are as follows:</p>
      <div className="table-wrapper">
        <table className="table-container">
          <tbody>
            <tr>
              <th>Particulars</th>
              <th>Placement Statistics 2023</th>
            </tr>
            <tr>
              <td>Placement Percentage</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Highest Package</td>
              <td>INR 41.13 LPA</td>
            </tr>
            <tr>
              <td>Mean Package</td>
              <td>INR 25.82 LPA</td>
            </tr>
            <tr>
              <td>Median Package</td>
              <td>INR 24.45 LPA</td>
            </tr>
            <tr>
              <td>Mean Package of Fresher’s</td>
              <td>INR 24.01 LPA</td>
            </tr>
            <tr>
              <td>Major Domain</td>
              <td>IT & Analytics, Sales & Marketing</td>
            </tr>
            <tr>
              <td>Top Recruiters</td>
              <td>Accenture, Adani, Amazon, Barclays, Capgemini, Dell, etc.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3">IIT Delhi Average Package 2023</h3>
      <p>
        The batch of 2023 received a total of 260 pre-placement offers. A total of 1,300 job offers were made, with 1,150 students selected. Below is a trend of the median packages offered over the past three years:
      </p>
      <div className="table-wrapper">
        <table className="table-container">
          <tbody>
            <tr>
              <th>Course</th>
              <th>Median Package (2020)</th>
              <th>Median Package (2021)</th>
              <th>Median Package (2022)</th>
            </tr>
            <tr>
              <td>UG 4-year (B.Tech)</td>
              <td>INR 15.50 LPA</td>
              <td>INR 17.60 LPA</td>
              <td>INR 20.50 LPA</td>
            </tr>
            <tr>
              <td>UG 5-year (B.Tech + M.Tech)</td>
              <td>INR 18.10 LPA</td>
              <td>INR 22 LPA</td>
              <td>INR 20 LPA</td>
            </tr>
            <tr>
              <td>PG 2-year (M.Tech)</td>
              <td>INR 11 LPA</td>
              <td>INR 15 LPA</td>
              <td>INR 12.50 LPA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Placement;
