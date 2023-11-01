import { styled } from "styled-components";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  //   const navigate = useNavigate();

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    //Get all target and convert then in an object
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    if (data.password !== data.repassword)
      alert("Password does not match the Re-Password try again");
    console.log({ data });

    // axios
    //   .post("http://localhost:3000/api/auth/register", data, {
    //     withCredentials: true,
    //   })
    //   .then(() => {
    //     navigate("/login");
    //   })
    //   .catch(() => alert("Authentication failed"));
  };
  return (
    <PageContainer>
      <RegisterDiv>
        <RegisterTitle>Register</RegisterTitle>
        <StyledForm onSubmit={handleSubmit}>
          <InputsContainer>
            <StyledInput type="text" label="Username" name="username" />
            <PasswordContainer>
              <StyledInput
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword((show) => !show)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      }
                    </InputAdornment>
                  ),
                }}
                label="Password"
                name="password"
              />
            </PasswordContainer>
            <PasswordContainer>
              <StyledInput
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword((show) => !show)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      }
                    </InputAdornment>
                  ),
                }}
                label="Re-Password"
                name="repassword"
              />
            </PasswordContainer>
          </InputsContainer>
          <StyledButton type="submit" value="Submit">
            Sign Up
          </StyledButton>
        </StyledForm>
      </RegisterDiv>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: inherit;
  width: 100vw;
  min-height: 100dvh;
  justify-content: center;
`;

const RegisterDiv = styled.div`
  width: 50%;
`;

const InputsContainer = styled.div`
  display: grid;
  gap: 3rem;
  padding-bottom: 5rem;
`;

const PasswordContainer = styled.div`
  display: grid;
`;

const StyledForm = styled.form`
  display: grid;
`;

const StyledInput = styled(TextField)`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const RegisterTitle = styled.h1`
  color: blue;
  font-weight: 300;
  font-size: 2rem;
  line-height: 3.2;
`;

const StyledButton = styled.button`
  background-color: #0d5285;
  color: #fff7ed;
`;
