import styled from "styled-components";
import Head from "next/head";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <div>
      <Container>
        <Head>
          <title>Login</title>
        </Head>
        <LoginContainer>
          <Logo
            src="https://pngimg.com/uploads/whatsapp/whatsapp_PNG95150.png"
            alt="whatsapp"
          />
          <Button variant="outlined" onClick={signIn}>
            SIGN IN WITH GOOGLE
          </Button>
        </LoginContainer>
      </Container>
    </div>
  );
}

export default Login;
const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: "whitesmoke";
`;
const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  background-color: "white";
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;
const Logo = styled.img`
  height: 150px;
  width: 200px;
  margin-bottom: 50px;
`;
