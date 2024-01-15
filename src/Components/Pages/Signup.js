import SignupForm from "../Auth/SignupForm";

export default function Signup() {
  return (
			<div>
				<SignupForm />
				<p style={{textAlign: 'center'}}>
					Already have an account? Login <a href="/login">here</a>
				</p>
			</div>
		);
}