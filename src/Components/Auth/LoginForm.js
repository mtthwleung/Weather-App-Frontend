import "./Auth.css";
import EyeImage from "../../assets/images/eye.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const navigate = useNavigate();

	const handleClick = () => {
		setShowPassword(!showPassword);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const form = e.target;
		const formData = new FormData(form);
		const requestBody = Object.fromEntries(formData);

		fetch("http://localhost:8000/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				// "Accept": 'application/json',
				// "Access-Control-Allow-Origin": 'http://localhost:3000/'
			},
			body: JSON.stringify(requestBody),
		})
			.then((response) => {
				if (response.ok) {
					navigate("/");
				} else {
					response.json().then((data) => {
						setErrorMessage(data.message);
					});
				}
			})
			.catch((err) => {
				console.log("Error: ", err);
				setErrorMessage("Internal server error");
			});
	};
	
	return (
		<div>
			<form onSubmit={handleSubmit} id="login-form">
				<div className="form-field">
					<div>
						<label for="email" className="input-label">
							Email
						</label>
					</div>
					<input type="text" id="email" name="email" size="30" required />
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

				<div className="error-message">
					{errorMessage && <p style={{ textAlign: "center" }}>{errorMessage}</p>}
				</div>

				<div className="submit-button">
					<button type="submit">Login</button>
				</div>
			</form>
		</div>
	);
}
