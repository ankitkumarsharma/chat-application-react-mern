import Button from "../../layout/Button";
import HeaderTitle from "../../layout/HeaderTitle";
import Input from "../../layout/Input";
import LoginOrSignupHint from "../../layout/LoginOrSignupHint";
import LoginSignupBlock from "../../layout/LoginSignupBlock";

const Login = () => {
    const onChangeUsername = (e) => {
        // TODO:
    }
    const onChangePassword = (e) => {
        // TODO:
    }
    const onLogin = (e) => {
        // TODO:
    };

    return (
        <LoginSignupBlock>
            <HeaderTitle title="Login" span="Chat App" />
            <form>
                <Input isLabel={true} type="text" onChange={onChangeUsername} name="Username" />

                <Input isLabel={true} type="password" onChange={onChangePassword} name="Password" />

                <Button name="Login" onClick={onLogin} />
                <LoginOrSignupHint isLogin={false} />
            </form>
        </LoginSignupBlock>
    );
}

export default Login;