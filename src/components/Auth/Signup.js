
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../landing/Navbar';
import Landing from '../landing/Landing';

export default function SignUp() {
    const navigate = useNavigate(); 
    const [name, setName] = useState('');
    const [password, setpassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhonenumber] = useState('');
    const [address, setAddress] = useState('');
    const role_id = 2;



    const handleSubmit = () => {
        if (name.length === 0) {
            alert("Name has left Blank!");
        }
        else if (password.length === 0) {
            alert("password has left Blank!");
        }
        else if (email.length === 0) {
            alert("Email has left Blank!");
        }
        else {
            const url = 'http://localhost/api_breef6/enquiry.php';
            let fData = new FormData();

            fData.append('name', name);
            fData.append('password', password);
            fData.append('email', email);
            fData.append('phone_number', phone_number);
            fData.append('address', address);

            axios
                .post(url, fData)
                .then((response) => {
                    alert(response.data);
                    // Redirect to the Landing page
                    navigate('/home');
                })
                .catch((error) => {
                    console.log(error); // Log the full error object
                    alert('An error occurred. Please check the console for more details.');
                });
        }
    }
    return (
        <div>
            <Navbar />

            <div class="container-fluid">
                <div class="row">
                    <div class="authfy-container col-xs-12 col-sm-10 col-md-8 col-lg-6 col-sm-offset-1 col-md-offset-2 col-lg-offset-3">

                        <div class="col-sm-7 authfy-panel-center">

                            <div class="authfy-login">

                                <div class="authfy-panel panel-login text-center active">
                                    <div class="authfy-heading">
                                        <h3 class="auth-title">Signup Employee</h3>
                                        <p>Don’t have an account? <a class="lnk-toggler" data-panel=".panel-signup" href="#">Sign Up Free!</a></p>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-12">

                                            <div class="form-group">
                                                <input type="text" name="name" class="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder=" Enter Name" />
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control" name="mobile" id="mobile" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Enter Password" />
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
                                            </div>
                                            <div class="form-group">
                                                <input type="number" class="form-control" name="phone_number" id="phone_number" value={phone_number} onChange={(e) => setPhonenumber(e.target.value)} placeholder="Enter phone number" />
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control" name="address" id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter address" />
                                            </div>
                                            <div class="form-group">
                                                <input type="button" class="btn btn-lg btn-primary btn-block" name="submit" id="submit" value="SEND" onClick={handleSubmit} />
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}