import React from 'react';
import "../Admission/Admission.css";

const Admission = () => {
  return (
    <section id="admission">
      <h2>Admission</h2>
      <p>
        Admission to IIT Delhi is based on national entrance tests. The institute offers a variety of programs at the undergraduate (UG), postgraduate (PG), and doctoral levels. Admission to the B.Tech program is determined by JEE Advanced scores, followed by JoSAA counseling. For B.Des at the UG level, students can apply through UCEED.
      </p>
      <p>
        IIT Delhi also offers M.Tech, MSc, M.Des, and MBA programs. Admission to these programs requires qualifying exams like GATE, IIT JAM, UCEED, and CAT, respectively. The institute also offers EMBA and MPP programs at the PG level, where selection is based on an interview round. For Ph.D. programs, IIT Delhi accepts GATE, CSIR, UGC NET, CEED, ICAR, and DST INSPIRE fellowship scores.
      </p>

      <h3 className="th3">Eligibility and Selection Criteria</h3>
      <div className="table-wrapper">
        <table className="table-container">
          <thead>
            <tr>
              <th>Course</th>
              <th>Eligibility Criteria</th>
              <th>Selection Criteria</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B.Tech</td>
              <td>Passed class 10+2 with PCM with a minimum of 75% from a recognized board</td>
              <td>JEE Main + JEE Advanced + JoSAA Counseling</td>
            </tr>
            <tr>
              <td>B.Des</td>
              <td>Passed class 10+2 with a minimum of 60% marks (40% for reserved categories)</td>
              <td>UCEED scores + Counseling</td>
            </tr>
            <tr>
              <td>M.Tech</td>
              <td>Minimum of 60% marks or 6.00 CGPA on a 10-point scale (5% relaxation for SC/ST/PWD)</td>
              <td>GATE score + COAP counseling + Written Test + Interview</td>
            </tr>
            <tr>
              <td>MS</td>
              <td>Minimum of 60% marks or 6.00 CGPA on a 10-point scale (5% relaxation for SC/ST/PWD)</td>
              <td>GATE</td>
            </tr>
            <tr>
              <td>M.Sc.</td>
              <td>At least 55% marks or 5.5 CGPA (5% relaxation for SC/ST/PH)</td>
              <td>IIT JAM + JOAPS Counseling</td>
            </tr>
            <tr>
              <td>MBA</td>
              <td>Bachelor's degree or its equivalent with at least 60% marks</td>
              <td>CAT scores + Group Discussion + Interview Round</td>
            </tr>
            <tr>
              <td>M.Des</td>
              <td>B.Tech/B.Des/B.Arch or equivalent with at least 60% marks</td>
              <td>CEED score + Interview</td>
            </tr>
            <tr>
              <td>Ph.D.</td>
              <td>At least 60% marks or 6.00 CGPA (5% relaxation for SC/ST/PWD) in master's degree or an equivalent</td>
              <td>GATE/CSIR/UGC NET/ICAR/ICMR/CEED/DST-INSPIRE fellowship + Written Test + Interview</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Application Process</h3>
      <p>The application process for IIT Delhi is as follows:</p>
      <ol>
        <li>First, candidates must register by visiting the official website of the Indian Institute of Technology Delhi.</li>
        <li>Then, candidates need to fill out the application form with the required information.</li>
        <li>Next, candidates must scan and upload the necessary documents.</li>
        <li>The final stage of the application procedure is to pay the fee to the Indian Institute of Technology Delhi.</li>
      </ol>
    </section>
  );
};

export default Admission;
