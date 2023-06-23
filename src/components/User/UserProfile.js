import React from 'react';
import { Outlet, Link } from "react-router-dom";

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
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import UserNav from './UserNav';

export default function UserProfile() {
  const [user, setUsers] = useState([]);
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    getUser();
    getContracts();
  }, []);

  function getUser() {
    axios.get('http://localhost/api_breef6/User/user/${id}').then(function (response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }

  function getContracts() {
    axios.get('http://localhost/api_breef6/Contract/contracts').then(function (response) {
      console.log(response.data);
      setContracts(response.data);
    });
  }
    return (
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
            {user.map((user, key) => (
              <React.Fragment key={key}>
                <p className="text-muted mb-1">{user.name}</p>
                {/* <p className="text-muted mb-4">Bay Area, San Francisco, CA</p> */}
              </React.Fragment>
            ))}
            <div className="d-flex justify-content-center mb-2">
              <MDBBtn> 
                  <Link to="/User/UserUpdate" className="nav-item nav-link">Edit</Link>
              </MDBBtn>
             
            </div>
          </MDBCardBody>
        </MDBCard>

     
      </MDBCol>
      <MDBCol lg="8">
        <MDBCard className="mb-4">
          <MDBCardBody>
            {user.map((user, index) => (
              <div key={index}>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user.name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user.phone_number}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
              
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user.address}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </div>
            ))}
          </MDBCardBody>
        </MDBCard>

        
      </MDBCol>
    </MDBRow>






    <MDBRow>
  <MDBCol lg="12">
    <MDBCard className="mb-4">
      <MDBCardBody>
      <table className="table table-striped">
  <thead>
    <tr>
      <th>Contract </th>
      <th>Employee Name</th>
      <th>Company Name</th>
      <th>Description</th>
      <th>Signing Date</th>
      <th>Expiration Date</th>
      <th>Total Cost</th>
      <th>Legal Officer</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {contracts.map((contract, index) => (
      <tr key={index}>
        <td>{contract.name}</td>
        <td>{contract.user_id}</td>
        <td>{contract.employee_id}</td>
        <td>{contract.company_id}</td>
        <td>{contract.description}</td>
        <td>{contract.Signing_Date}</td>
        <td>{contract.Expiration_Date}</td>
        <td>{contract.Total_Cost}</td>
        <td>{contract.Legal_Officer}</td>
        <td>{contract.status}</td>
      </tr>
    ))}
  </tbody>
</table>

      </MDBCardBody>
    </MDBCard>
  </MDBCol>
</MDBRow>

  </MDBContainer>
</section>


    );
  }