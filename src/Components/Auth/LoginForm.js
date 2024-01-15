import "./Auth.css";
import EyeImage from "../../assets/images/eye.png";
import { useState } from "react";

export default function LoginForm() {
	const [showPassword, setShowPassword] = useState(false);

	const handleClick = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div>
			<form action="/auth/login" method="POST" id="login-form">
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

				<div className="submit-button">
					<button type="submit">Login</button>
				</div>
			</form>
		</div>
	);
}
