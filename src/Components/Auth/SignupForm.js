import "./Auth.css";
import EyeImage from '../../assets/images/eye.png';
import { useState } from "react";

export default function SignupForm() {

  const [showPassword, setShowPassword] = useState(false);
  
  const handleClick = () => {    
    setShowPassword(!showPassword);
  }

  return (
			<div>
				<form action="/auth/signup" method="POST" id="signup-form">
					<div className="form-field">
						<div>
							<label for="username" className="input-label">
								Username
							</label>
						</div>
						<input type="text" id="username" name="username" size="30" required />
					</div>

					<div className="form-field">
						<div className="password-label">
							<label for="password" className="input-label">
								Password
							</label>
							<div onClick={handleClick}>
								<img src={EyeImage} alt="toggle show password" />
							</div>
						</div>
						<input
							type={showPassword ? "text" : "password"}
							id="password"
							name="password"
							size="30"
							required
						/>
					</div>

					<div className="form-field">
						<div>
							<label for="email" className="input-label">
								Email
							</label>
						</div>
						<input type="text" id="email" name="email" size="30" required />
					</div>

					<div className="submit-button">
						<button type="submit">Create User</button>
					</div>
				</form>
			</div>
		);
}