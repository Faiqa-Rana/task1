import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form } from "react-bootstrap"; // Importing necessary Bootstrap components
import { FaNewspaper, FaEye, FaPencilAlt, FaCaretDown, FaUserPlus,  FaShareAlt, FaCalendarAlt, FaMapMarkerAlt, FaBusinessTime, FaSuitcase } from "react-icons/fa"; // Importing React Icons
import Signup from "./Signup";



const App = () => {
  const [activeLink] = useState("All Posts");
  const [showSignUp, setShowSignUp] = useState(false); 
  const handleLinkClick = () => {
    setShowSignUp(true); // Show the SignUp block when link is clicked
  };

  // const closeSignUp = () => {
  //   setShowSignUp(false); // Close the SignUp block
  // };

  return (
 
    <div>
      {/* Header Section */}
      <header className="d-flex justify-content-between align-items-center py-3 border-bottom bg-white px-4">
        <img src="/images/logo2.svg" alt="ATG World Logo" height="40" />
        <div className="position-relative w-50">
          <input
            type="text"
            className="form-control rounded-pill ps-5"
            placeholder="Search for your favorite groups in ATG"
          />
          <img
            src="/images/search.png"
            alt="Search"
            className="position-absolute"
            style={{
              width: "20px",
              height: "20px",
              top: "50%",
              left: "15px",
              transform: "translateY(-50%)",
            }}
          />
        </div>
      
         <button 
          onClick={handleLinkClick} 
          className="btn text-primary text-decoration-none"
        >
          Create account.<span className="text-dark" style={{ color: "#3f0505" }}>
            It's free!
          </span>
        </button>
      </header>

      {showSignUp && (
        <div
          className="signup-block position-fixed top-50 start-50 translate-middle bg-light p-4 rounded shadow-lg"
          style={{ maxWidth: "700px", zIndex: 999 , width:"80%"}}
        >
          {/* <button 
            className="btn btn-danger position-absolute top-0 end-0 m-2" 
            onClick={closeSignUp}
          >
            &times;
          </button> */}
          <Signup/>
        </div>
      )}
      
      {/* Main Banner Section */}
      <div className="position-relative d-flex align-items-center text-white">
        <img
          src="/images/bg.jpg"
          alt="Banner"
          className="img-fluid w-100"
          style={{ objectFit: "cover", height: "70vh" }}
        />
        <div className="position-absolute text-left ms-3">
        <h1 className="display-6 fw-bold">Computer Engineering</h1>

          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
      <div className="container d-flex justify-content-between align-items-center p-3">
        <div className="posts d-flex">
          <a
            href="# "
            className={`me-3 ${activeLink === "All Posts" ? "fw-bold position-relative" : ""}`}
            onClick={() => handleLinkClick("All Posts")}
          >
            All Posts (32)
            {activeLink === "All Posts" && (
              <span className="position-absolute bottom-0 start-0 w-100 h-1 bg-dark"></span>
            )}
          </a>
          <a
            href="# "
            className={`me-3 ${activeLink === "Article" ? "fw-bold position-relative" : ""}`}
            onClick={() => handleLinkClick("Article")}
          >
            Article
            {activeLink === "Article" && (
              <span className="position-absolute bottom-0 start-0 w-100 h-1 bg-dark"></span>
            )}
          </a>
          <a
            href="# "
            className={`me-3 ${activeLink === "Event" ? "fw-bold position-relative" : ""}`}
            onClick={() => handleLinkClick("Event")}
          >
            Event
            {activeLink === "Event" && (
              <span className="position-absolute bottom-0 start-0 w-100 h-1 bg-dark"></span>
            )}
          </a>
          <a
            href="# "
            className={`me-3 ${activeLink === "Education" ? "fw-bold position-relative" : ""}`}
            onClick={() => handleLinkClick("Education")}
          >
            Education
            {activeLink === "Education" && (
              <span className="position-absolute bottom-0 start-0 w-100 h-1 bg-dark"></span>
            )}
          </a>
          <a
            href="# "
            className={`me-3 ${activeLink === "Job" ? "fw-bold position-relative" : ""}`}
            onClick={() => handleLinkClick("Job")}
          >
            Job
            {activeLink === "Job" && (
              <span className="position-absolute bottom-0 start-0 w-100 h-1 bg-dark"></span>
            )}
          </a>
        </div>
        <div className="buttons d-flex">
          <button className="btn btn-light me-2">
            Write Post <FaCaretDown />
          </button>
          <button className="btn btn-primary">
            <FaUserPlus className="me-2" />
            Join Group
          </button>
        </div>
      </div>

      {/* Post Section */}
      <Container fluid className="p-4" style={{ backgroundColor: "#f5f5f5" , maxWidth: "1000px", margin: "0 auto"  }}>
        <Row>
          <Col lg={8} md={12} className="mb-4">
            <div className="post mb-4" style={{ backgroundColor: "white", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
              <img
                src="/images/fontss.jpg"
                alt="A scenic view of a forest with mist covering the treetops"
                className="img-fluid rounded-top"
                style={{ width: "100%", height: "300px" }}
              />
              <div className="post-content p-3">
                <h2>
                  <FaNewspaper /> Article
                </h2>
                <h3>What if famous brands had regular fonts? Meet RegulaBrands!</h3>
                <p>I’ve worked in UX for the better part of a decade. From now on, I plan to rei...</p>
              </div>
              <div className="post-footer d-flex justify-content-between align-items-center p-3">
                <div className="author d-flex align-items-center">
                  <img src="/images/pic.jpg" alt="profile" className="rounded-circle" style={{ width: "40px", height: "40px" }} />
                  <span className="ms-2">Siddharth Goyal</span>
                </div>
                <div className="views d-flex align-items-center">
                  <FaEye className="me-2" /> 1.4k view  
                  <FaShareAlt className="ms-3" />
                </div>
                
              
              </div>
            </div>
          </Col>
          

          <Col lg={4} md={12}>
            <div className="location d-flex align-items-center mb-4">
              <Form.Control type="text" placeholder="Enter Your Location" className="me-2" />
              <FaPencilAlt />
            </div>
            <p>Your location will help us serve better and extend a personalized experience.</p>

            <div className="recommended-groups p-3 mb-4" style={{ backgroundColor: "white", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
              <h3>Recommended Groups</h3>
              <ul className="list-unstyled">
                {["Leisure", "Activism", "MBA", "Philosophy"].map((group, index) => (
                  <li key={index} className="d-flex justify-content-between align-items-center mb-3">
                    <div className="group d-flex align-items-center">
                      <img
                        src={`/images/grp.jpg`}
                        alt={`Group icon for ${group}`}
                        className="rounded-circle"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <span className="ms-2">{group}</span>
                    </div>
                    <a href="# " className="text-primary">
                      Follow
                    </a>
                  </li>
                ))}
              </ul>
              <div className="see-more text-end">
                <a href="# " className="text-primary">
                  See More...
                </a>
              </div>
            </div>
          </Col>
          <Col lg={8} md={12} className="mb-4">
            <div className="post mb-4" style={{ backgroundColor: "white", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
              <img
                src="/images/education.jpg"
                alt="A scenic view of a forest with mist covering the treetops"
                className="img-fluid rounded-top"
                style={{ width: "100%", height: "300px" }}
              />
              <div className="post-content p-3">
                <h2>
                  <FaPencilAlt /> Education
                </h2>
                <h3>What if famous brands had regular fonts? Meet RegulaBrands!</h3>
                <p>I’ve worked in UX for the better part of a decade. From now on, I plan to rei...</p>
              </div>
              <div className="post-footer d-flex justify-content-between align-items-center p-3">
                <div className="author d-flex align-items-center">
                  <img src="/images/girl.jpg" alt="profile" className="rounded-circle" style={{ width: "40px", height: "40px" }} />
                  <span className="ms-2">Priya</span>
                </div>
                <div className="views d-flex align-items-center">
                  <FaEye className="me-2" /> 1.4k view  
                  <FaShareAlt className="ms-3" />
                </div>
                
              
              </div>
            </div>
          </Col>
          <Col lg={8} md={12} className="mb-4">
            <div className="post mb-4" style={{ backgroundColor: "white", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
              <img
                src="/images/car.jpg"
                alt="A scenic view of a forest with mist covering the treetops"
                className="img-fluid rounded-top"
                style={{ width: "100%", height: "300px" }}
              />
              <div className="post-content p-3">
                <h2>
                  <FaCalendarAlt /> Meetup
                </h2>
                <h3>Finance & Investment Elite Social Mixer @Lujiazui</h3>
              </div>
              <div className="d-inline-block me-5" style={{ marginRight: '20px' }}>
        <FaCalendarAlt className="me-1"/> Fri, 12 Oct, 2018
        </div>

        {/* Location Section */}
        <div className="d-inline-block ms-5" style={{ marginLeft: '20px' }}>
        <FaMapMarkerAlt className="me-1" /> Ahmedabad, India
        
        </div>
        <div className="text-center">
          <button
            className="apply-button w-100 border border-danger rounded-pill py-2 text-danger fw-bold bg-white"
          
          >
            View Website
          </button>
        </div>

      
              <div className="post-footer d-flex justify-content-between align-items-center p-3">
                <div className="author d-flex align-items-center">
                  <img src="/images/girl2.jpg" alt="profile" className="rounded-circle" style={{ width: "40px", height: "40px" }} />
                  <span className="ms-2">Ananya </span>
                </div>
                <div className="views d-flex align-items-center">
                  <FaEye className="me-2" /> 1.4k view  
                  <FaShareAlt className="ms-3" />
                </div>
                
              
              </div>
            </div>
          </Col>
          <Col lg={8} md={12} className="mb-4">
            
              <div className="post-content p-3">
                <h2>
                  <FaBusinessTime /> Job 
                </h2>
                <h3>Software Developer</h3>
                <p>I’ve worked in UX for the better part of a decade. From now on, I plan to rei...</p>
              </div>
              <div className="d-inline-block me-5" style={{ marginRight: '20px' }}>
        <FaSuitcase className="me-1"/> Innovaccer Analytics Private Ltd.
        </div>

        {/* Location Section */}
        <div className="d-inline-block ms-5" style={{ marginLeft: '20px' }}>
        <FaMapMarkerAlt className="me-1" /> Ahmedabad, India
      
        </div>
        <div className="text-center">
          <button
            className="apply-button w-100 border border-success rounded-pill py-2 text-success fw-bold bg-white"
          
          >
            Apply on Timesjobs
          </button>
        </div>

              <div className="post-footer d-flex justify-content-between align-items-center p-3">
                <div className="author d-flex align-items-center">
                  <img src="/images/girl.jpg" alt="profile" className="rounded-circle" style={{ width: "40px", height: "40px" }} />
                  <span className="ms-2">Priya</span>
                </div>
                <div className="views d-flex align-items-center">
                  <FaEye className="me-2" /> 1.4k view  
                  <FaShareAlt className="ms-3" />
                </div>
                
              
              </div>
           
          </Col>
        </Row>
      </Container>
    </div>
   
   
  );
};

export default App;

