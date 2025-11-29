import { SignUp } from "@clerk/clerk-react"

const SignUpPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <SignUp signInUrl="/login" forceRedirectUrl={'/'}/>
        </div>
    )
}
export default SignUpPage