import LoginSignupBlock from "../../layout/LoginSignupBlock";
import Button from "../../layout/Button";
import HeaderTitle from "../../layout/HeaderTitle";
import Input from "../../layout/Input";
import LoginOrSignupHint from "../../layout/LoginOrSignupHint";

const SignUp = () => {
    return (
        <LoginSignupBlock>
            <HeaderTitle title="Signup" />
            <form>
                <Input isLabel={true} type="text" name="Fullname" />
                <Input isLabel={true} type="text" name="Username" />
                <Input isLabel={true} type="password" name="Password" />
                <Input isLabel={true} type="password" name="Confirm Password" />

                <Button name="Signup" />
                <LoginOrSignupHint />

            </form>
        </LoginSignupBlock>
    );
}

export default SignUp;