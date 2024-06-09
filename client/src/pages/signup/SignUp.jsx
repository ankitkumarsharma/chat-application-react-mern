import ContentBlock from "../../layout/ContentBlock";
import Button from "../../layout/Button";
import HeaderTitle from "../../layout/HeaderTitle";
import Input from "../../layout/Input";
import LoginOrSignupHint from "../../layout/LoginOrSignupHint";

const SignUp = () => {
    return (
        <ContentBlock>
            <HeaderTitle title="Signup" />
            <form>
                <Input isLabel={true} type="text" name="Fullname" />
                <Input isLabel={true} type="text" name="Username" />
                <Input isLabel={true} type="password" name="Password" />
                <Input isLabel={true} type="password" name="Confirm Password" />
                <Input isLabel={true} type="radio" name="Gender" radioList={['Male','Female','Other']} />

                <Button name="Signup" />
                <LoginOrSignupHint />
            </form>
        </ContentBlock>
    );
}

export default SignUp;