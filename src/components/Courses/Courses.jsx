import React from 'react';
import "../Courses/Courses.css";

const Courses = () => {
  return (
    <section id="courses">
      <h2>Course Fees and Structure</h2>
      <p>The fee structure at IIT Delhi is composed of various components such as tuition fees, hostel fees, library fees, canteen fees, etc. Some components are charged only once, while others, like the tuition fee, are paid semester-wise or annually. The total cost of fees depends on the chosen course. The table below shows the fee breakdown for various courses:</p>
      
      <h3 className="th3">Fee Breakdown</h3>
      <div className="table-wrapper">
        <table className="table-container">
          <thead>
            <tr>
              <th>Course</th>
              <th>Tuition Fee</th>
              <th>Hostel Fee</th>
              <th>One-time Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B.Tech</td>
              <td>INR 8-10L</td>
              <td>INR 4.58L</td>
              <td>INR 16,000</td>
            </tr>
            <tr>
              <td>M.Tech</td>
              <td>INR 3L</td>
              <td>INR 2.29L</td>
              <td>INR 16,000</td>
            </tr>
            <tr>
              <td>MA</td>
              <td>INR 3L</td>
              <td>INR 2.29L</td>
              <td>INR 16,000</td>
            </tr>
            <tr>
              <td>B.Des</td>
              <td>INR 8L</td>
              <td>INR 4.32L</td>
              <td>INR 16,000</td>
            </tr>
            <tr>
              <td>M.Des</td>
              <td>INR 3L</td>
              <td>INR 2.29L</td>
              <td>INR 16,000</td>
            </tr>
            <tr>
              <td>MBA</td>
              <td>INR 11.20L</td>
              <td>INR 2.29L</td>
              <td>INR 16,000</td>
            </tr>
            <tr>
              <td>MSc</td>
              <td>INR 30,000-3L</td>
              <td>INR 2.29L</td>
              <td>INR 16,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h3>One-Time Charges (For Every Fresh Allotment)</h3>
      <ul>
        <li><strong>Seat Allotment Charges (Non-refundable):</strong> INR 7,000</li>
        <li><strong>Security Deposit (Refundable):</strong> INR 15,000</li>
      </ul>
      
      <h3>Per-Semester Charges</h3>
      <p>Note: No pro-rata is applicable due to hostel operations being fully cooperative in nature.</p>
      <ul>
        <li><strong>Hostel Mess Charges (Include food, kitchen consumables, human resources, IGL, and associated costs):</strong></li>
        <ul>
          <li>Old Hostel (Non-A/C): INR 35,000</li>
          <li>New Hostels (Centralized A/C, only for non-MSc PG students): INR 35,000</li>
        </ul>
        <li><strong>Additional Charges:</strong></li>
        <ul>
          <li>All students in old hostels: INR 8,600</li>
          <li>All students in new hostels: INR 23,600 (Break-up: INR 8,600 + INR 15,000)</li>
        </ul>
      </ul>
    </section>
  );
};

export default Courses;
