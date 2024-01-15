import LoginForm from "../Auth/LoginForm";

export default function Login() {
	return (
		<div>
			<LoginForm />
			<p style={{textAlign: 'center'}}>Don't have an account yet? Signup <a href="/signup">here</a></p>
		</div>
	);
}
