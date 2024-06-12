import ContentBlock from "../../layout/ContentBlock";
import Button from "../../layout/Button";
import HeaderTitle from "../../layout/HeaderTitle";
import Input from "../../layout/Input";
import LoginOrSignupHint from "../../layout/LoginOrSignupHint";
import { useState } from "react";
import { CONSTANTS } from "../../utils/app.constant";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
    const [input, setInput] = useState(CONSTANTS.USER_SIGN_UP);
    const { loading, signup } = useSignup();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(input)
    }
    const handleRadioChange = (e) => {
        setInput({ ...input, gender: e.target.value });
    }
    return (
        <ContentBlock>
            <HeaderTitle title="Signup" />
            <form>
                <Input
                    isLabel={true} onChange={(e) => setInput({ ...input, fullName: e.target.value })}
                    type="text" label="Fullname" name="fullName"
                />
                <Input
                    isLabel={true} onChange={(e) => setInput({ ...input, username: e.target.value })}
                    type="text" label="Username" name="username"
                />
                <Input
                    isLabel={true} onChange={(e) => setInput({ ...input, password: e.target.value })}
                    type="password" label="Password" name="password"
                />
                <Input
                    isLabel={true} onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
                    type="password" label="Confirm Password" name="confirmPassword"
                />
                <Input
                    isLabel={true} onChange={(e) => handleRadioChange(e)}
                    type="radio" label="Gender" name="gender" radioList={CONSTANTS.GENDER}
                />
                <Button onClick={handleSubmit} name={loading ? 'Loading' : 'Signup'} />
                <LoginOrSignupHint />
            </form>
        </ContentBlock>
    );
}

export default SignUp;