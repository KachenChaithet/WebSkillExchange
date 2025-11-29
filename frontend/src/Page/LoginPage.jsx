import { SignIn } from "@clerk/clerk-react"

const LoginPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <SignIn signUpUrl="/signup" forceRedirectUrl={'/'}/>
        </div>
    )
}
export default LoginPage