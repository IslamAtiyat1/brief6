
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function LogIn() {

    const naviget = useNavigate();
    const [email, setemail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    useEffect(() => {
        let login = localStorage.getItem("login");
        if(login){
            naviget("/User/UserProfile");
        }
        let loginStatus = localStorage.getItem("loginStatus");
        if(loginStatus){
            setError(loginStatus);
            setTimeout(function(){
                localStorage.clear();
                window.location.reload();
            }, 3000);
        }
        setTimeout(function(){
            setMsg("");
        }, 1000);
    }, [msg]);

    const handleInputChange = (e, type) => {
        switch(type){
            case "email":
                setError("");
                setemail(e.target.value);
                if(e.target.value === ""){
                    setError("emailname has left blank");
                }
                break;
            case "pass":
                setError("");
                setPass(e.target.value);
                if(e.target.value === ""){
                    setError("Password has left blank");
                }
                break;
            default:
        }
    }

    function loginSubmit(){
        if(email !== "" && pass != ""){
            var url = "http://localhost/api_breef6/login.php";
            var headers = {
                "Accept": "application/json",
                "Content-type": "application/json"
            };
            var Data = {
                email: email,
                pass: pass
            };
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data)
            }).then((response) => response.json())
            .then((response) => {
                if(response[0].result === "Invalid emailname!" || response[0].result === "Invalid password!"){
                    setError(response[0].result);
                }
                else{
                    setMsg(response[0].result);
                    setTimeout(function(){
                        localStorage.setItem("user_id", response[0].result);
                        localStorage.setItem("login", true);
                        localStorage.setItem("type", "user");
                        naviget("/home");
                    }, 1000);
                }
            }).catch((err) => {
                setError(err);
                console.log(err);
            })
        }
        else{
            setError("All field are required!")
        }
    }
    return (
        <div>
            <div class="dust-paarticle">

          
            </div>

            <div class="container-fluid">
                <div class="row">
                    <div class="authfy-container col-xs-12 col-sm-10 col-md-8 col-lg-6 col-sm-offset-1 col-md-offset-2 col-lg-offset-3">
                 
                        <div class="col-sm-7 authfy-panel-right">

                            <div class="authfy-login">

                                <div class="authfy-panel panel-login text-center active">
                                    <div class="authfy-heading">
                                        <h3 class="auth-title">Signup Employee</h3>
                                        <p>Don’t have an account? <a class="lnk-toggler" data-panel=".panel-signup" href="#">Sign Up Free!</a></p>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-12">
                                            <input
                                                type="text"
                                                value={email}
                                                onChange={(e) => handleInputChange(e, "email")}
                                            />
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                value={pass}
                                                onChange={(e) => handleInputChange(e, "pass")}
                                            />
                                            <label></label>
                                            <input
                                                type="submit"
                                                defaultValue="Login"
                                                className="button"
                                                onClick={loginSubmit}
                                            />
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