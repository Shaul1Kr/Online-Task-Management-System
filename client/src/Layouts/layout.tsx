import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <StyledContainer>
      <Outlet />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  background-color: #91b6f2;
`;
