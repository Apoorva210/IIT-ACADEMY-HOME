import React from 'react';
import "../AlumniNetwork/AlumniNetwork.css";

const AlumniNetwork = () => {
    return (
        <section id="alumni-network">
            <h2>Alumni Network at IIT Delhi</h2>

            <p>
                The IIT Delhi alumni network spans across various prominent recruiters, showcasing the extensive reach and influence of our graduates. Here is a snapshot of the number of alumni working with some of the leading companies:
            </p>

            <table style={{ width: '50%' }}>
                <thead>
                    <tr>
                        <th>Recruiter</th>
                        <th>No. of Alumni</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Amazon</td>
                        <td>378</td>
                    </tr>
                    <tr>
                        <td>Google</td>
                        <td>338</td>
                    </tr>
                    <tr>
                        <td>Microsoft</td>
                        <td>332</td>
                    </tr>
                    <tr>
                        <td>IBM</td>
                        <td>317</td>
                    </tr>
                    <tr>
                        <td>TCS</td>
                        <td>312</td>
                    </tr>
                    <tr>
                        <td>Accenture</td>
                        <td>195</td>
                    </tr>
                    <tr>
                        <td>Goldman Sachs</td>
                        <td>164</td>
                    </tr>
                    <tr>
                        <td>McKinsey &amp; Co.</td>
                        <td>138</td>
                    </tr>
                    <tr>
                        <td>Facebook</td>
                        <td>124</td>
                    </tr>
                    <tr>
                        <td>BCG</td>
                        <td>120</td>
                    </tr>
                    <tr>
                        <td>Flipkart</td>
                        <td>108</td>
                    </tr>
                    <tr>
                        <td>AWS</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td>Bain &amp; Co.</td>
                        <td>66</td>
                    </tr>
                    <tr>
                        <td>Uber</td>
                        <td>5</td>
                    </tr>
                </tbody>
            </table>
            <br />

            <p>
                IITD Alumni Association is dedicated to bringing together the alumni community on a common platform to build another channel of personal and professional support to members through ‘self-help’ within the community. IIT Delhi Alumni Association today has a membership of over 43,000 graduates from our alma mater and is growing at about 1,700 members a year. It is one of the most active alumni associations and operates through a network of national and international chapters. Our alumni are spread worldwide and figure amongst who’s who worldwide.
            </p>
        </section>
    );
};

export default AlumniNetwork;
