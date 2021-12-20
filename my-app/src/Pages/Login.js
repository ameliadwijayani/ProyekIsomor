import React from 'react'
import { loginUser, useAuthState, useAuthDispatch } from '../Context';
export default function Login(props) {
    
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const dispatch = useAuthDispatch();
	const { loading, errorMessage } = useAuthState();

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			let response = await loginUser(dispatch, { email, password });
			if (!response.user) return;
			// props.history.push('/fn/admin/TambahProyek');
            window.location.href = '/fn/admin/DashboardProyek'
		} catch (error) {
			console.log(error);
		}
	};
    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <a href="../../index2.html"><b>Admin</b>LTE</a>
                </div>
                {/* /.login-logo */}
                <div className="card">
                    <div className="card-body login-card-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    <form action="../../index3.html" method="post">
                        <div className="input-group mb-3">
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email" />
                        <div className="input-group-append">
                            <div className="input-group-text">
                            <span className="fas fa-envelope" />
                            </div>
                        </div>
                        </div>
                        <div className="input-group mb-3">
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password" />
                        <div className="input-group-append">
                            <div className="input-group-text">
                            <span className="fas fa-lock" />
                            </div>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <div className="icheck-primary">
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember">
                                    Remember Me
                                </label>
                                </div>
                            </div>
                            {/* /.col */}
                            <div className="col-4">
                                <button onClick={handleLogin} disabled={loading}>
                                    Login
                                </button>
                            </div>
                        {/* /.col */}
                        </div>
                        {errorMessage ? <p>{errorMessage}</p> : null}
                    </form>
                    </div>
                    {/* /.login-card-body */}
                </div>
            </div>
        </div>
    )
}
