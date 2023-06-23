import React, { useEffect, useState } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import axios from 'axios';
import Navbar from '../landing/Navbar';
import UserNav from './UserNav';

export default function UserUpdate() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone_number: '',
    address: '',
  });

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    axios.get('http://localhost/api_breef6/users/').then(function (response) {
      console.log(response.data);
      setUser(response.data);
    });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Perform the update request using Axios
    // You can use user.name, user.email, user.phone_number, user.address to get the updated values
    // Example:
    // axios.put('http://localhost/api_breef6/users/', {
    //   name: user.name,
    //   email: user.email,
    //   phone_number: user.phone_number,
    //   address: user.address,
    // }).then(function (response) {
    //   console.log(response.data);
    //   // Handle success or error
    // }).catch(function (error) {
    //   console.log(error);
    //   // Handle error
    // });
  }

  return (
    <>
   
    <html>
      <head>

        <title>User Update</title>
        {/* Add any additional CSS or external libraries */}
      </head>
      <body>
        <section style={{ backgroundColor: '#eee' }}>
          <MDBContainer className="py-5">
         <UserNav/>

            <MDBRow>
              <MDBCol lg="4">
                <MDBCard className="mb-4">
                  <MDBCardBody className="text-center">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: '150px' }}
                      fluid
                    />
                    <p className="text-muted mb-1">{user.name}</p>
                    {/* <p className="text-muted mb-4">Bay Area, San Francisco, CA</p> */}
                    <div className="d-flex justify-content-center mb-2">
                      <MDBBtn>Edit Profile</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="8">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <form onSubmit={handleSubmit}>
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Full Name</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={user.name}
                            onChange={handleInputChange}
                          />
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Email</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}
                          />
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Phone</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <input
                            type="text"
                            className="form-control"
                            name="phone_number"
                            value={user.phone_number}
                            onChange={handleInputChange}
                          />
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Address</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <input
                            type="text"
                            className="form-control"
                            name="address"
                            value={user.address}
                            onChange={handleInputChange}
                          />
                        </MDBCol>
                      </MDBRow>
                      <div className="text-end mt-4">
                        <MDBBtn type="submit">Update</MDBBtn>
                      </div>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </body>
    </html>
    </>
  );
}
