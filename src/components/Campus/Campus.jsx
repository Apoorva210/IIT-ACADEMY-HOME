import React from 'react';
import "../Campus/Campus.css";

const Campus = () => {
  return (
    <section id="campus">
      <h2>Campus Facilities at IIT Delhi</h2>
      <p>
        The campus of IIT Delhi is spread across an area of 320 acres, located in the Hauz Khas area of South Delhi. The campus is in close proximity to notable landmarks such as the Qutub Minar and Lotus Temple, and is near other educational institutions like JNU and IIFT. The IIT Delhi campus features a range of facilities including an amphitheatre, a swimming pool, a music room, a robotics room, a club building, a gymnasium hall, and a fully functional central library that is accessible 24/7. These amenities contribute to a vibrant and well-equipped campus environment.
      </p>
      <p>
        The campus is organized into several distinct areas for administrative and logistical functions. The <strong>West Campus</strong> serves as the hostel area, while the <strong>East Campus</strong> is designated for residential purposes. The <strong>Main Administrative Building</strong> handles administrative functions, and the <strong>Academic Area</strong> is dedicated to academic activities. This organization helps streamline operations and supports the various needs of students and staff.
      </p>
      <div className="image-container" style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
       <img src= "#"></img>
        <img src="#"></img>
      </div>
      <h3>Hostel Facilities</h3>
      <p>The IIT Delhi hostels are well-equipped with a variety of amenities to ensure a comfortable and supportive living environment for students. There are 13 boys hostels and 5 girls hostels on campus. Each hostel features a dining hall with a mess facility, a lounge for relaxation, an indoor games room for recreational activities, and a reading room for quiet study. These facilities are designed to provide students with a balanced and enjoyable hostel experience. IIT Delhi has boys' hostels inside the campus premises.it s hostel
            runs in cooperative mode which means the operation is handled by
            elected student leadership under the guidance of designated
            faculty. 
            The girls' hostels offer similar facilities, including recreational amenities such as indoor games, a common room with TV, a reading room, and a dining hall. All rooms have internet connectivity.
            </p>

        

        <h3>Campus Facilities</h3>
        <ul>
            <li><strong>IT Infrastructure:</strong> 
                <ul>
                    <li><strong>Network Type:</strong> State-of-the-art LAN with Fiber Optics and enhanced CAT5/CAT6 UTP backbone</li>
                    <li><strong>Network Access Points:</strong> Over 9000 across the campus</li>
                    <li><strong>Cisco Switches:</strong> About 265</li>
                    <li><strong>Virtual LANs:</strong> Approximately 75</li>
                </ul>
            </li>
            <li><strong>Wi-Fi:</strong> Secure Wi-Fi available in the academic area, main guest house, faculty guest house, RCA, and hospital</li>
            <li><strong>Cafeteria:</strong> Several canteens located opposite Aravali Hostel, in Himadri Hostel, and adjacent to Kumaon Hostel; serves healthy and hygienic food; additional coffee and cold drinks kiosks available</li>
            <li><strong>Auditorium:</strong> Seating capacity of over 120; hosts guest lectures, seminars, and other programs</li>
            <li><strong>Alumni Associations:</strong> IITD Alumni Association connects over 43,000 members worldwide through a network of national and international chapters; one of the most active alumni associations globally</li>
            <li><strong>Classrooms:</strong> Fully air-conditioned; equipped with LCD projectors</li>
            <li><strong>Laboratories:</strong> Well-equipped laboratories, workshops, and library facilities across departments</li>
            <li><strong>Convenience Store:</strong> Stationery shop in the academic area; Xeroxing and STD/ISD/PCO facilities available in all hostels</li>
            <li><strong>Banks/ATMs:</strong> On-campus bank available for faculty and student convenience</li>
            <li><strong>Guest Room/Waiting Room:</strong> Guest house and waiting room facilities for visiting faculty and family members of students</li>
        </ul>
        
    </section>
  );
};

export default Campus;
