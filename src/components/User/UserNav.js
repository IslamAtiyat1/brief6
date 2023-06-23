import { Outlet, Link } from "react-router-dom";
import React from 'react';
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
function UserNav() {
    return (
         
            <>
             <MDBRow>
            <MDBCol>
                <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                    <MDBBreadcrumbItem>
                    <Link to="/home" className="nav-item nav-link">home</Link>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem>
                    <Link to="/User/UserUpdate" className="nav-item nav-link">UserUpdate</Link>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem>
                    <Link to="/User/UserProfile" className="nav-item nav-link">UserProfile</Link>
                    </MDBBreadcrumbItem>
                </MDBBreadcrumb>
            </MDBCol>
        </MDBRow>
         <Outlet />
         </>
    )
}

export default UserNav