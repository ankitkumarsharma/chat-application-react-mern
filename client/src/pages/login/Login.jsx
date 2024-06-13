import Button from "../../layout/Button";
import HeaderTitle from "../../layout/HeaderTitle";
import Input from "../../layout/Input";
import LoginOrSignupHint from "../../layout/LoginOrSignupHint";
import ContentBlock from "../../layout/ContentBlock";
import { useState } from "react";
import { CONSTANTS } from "../../utils/app.constant";
import useLogin from "../../hooks/useLogin";

const Login = () => {
    const [input, setInput] = useState(CONSTANTS.USER_LOGIN);
    const { loading, login } = useLogin();
    const onLogin = async (e) => {
        e.preventDefault();
        await login(input); 
    };

    return (
        <ContentBlock>
            <HeaderTitle title="Login" span="Chat App" />
            <form>
                <Input
                    isLabel={true} type="text"
                    onChange={(e) => setInput({ ...input, username: e.target.value })} name="username" label="Username"
                />
                <Input
                    isLabel={true} type="password"
                    onChange={(e) => setInput({ ...input, password: e.target.value })} name="password" label="Password"
                />
                <Button name={loading ? 'Loading' : 'Login'} onClick={onLogin} />
                <LoginOrSignupHint isLogin={false} />
            </form>
        </ContentBlock>
    );
}

export default Login;