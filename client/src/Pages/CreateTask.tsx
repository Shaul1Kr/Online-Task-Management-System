import { styled } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateTask() {
  const navigate = useNavigate();
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    //Get all target and convert then in an object
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    axios
      .post("http://localhost:3000/api/task/createTask", data, {
        withCredentials: true,
      })
      .then(() => navigate("/TaskManager"));
  };

  return (
    <Contanier>
      <CreateDiv onSubmit={handleSubmit}>
        <Title>Create New Task</Title>
        <InputDiv>
          <InputContainer>
            <p>Title</p>
            <Input type="text" name="title" />
          </InputContainer>
          <InputContainer>
            <p>Description</p>
            <Input type="text" name="description" />
          </InputContainer>
          <CreateButton type="submit" value="Submit">
            Create
          </CreateButton>
          <CancelButton>Cancel</CancelButton>
        </InputDiv>
      </CreateDiv>
    </Contanier>
  );
}

const Contanier = styled.div`
  display: flex;
  align-items: center;
  min-height: 100dvh;
  width: 100vw;
  justify-content: center;
`;

const CreateDiv = styled.form`
  display: grid;
  background-color: #ffffff;
  border-radius: 10px;
  min-height: 40dvh;
  padding: 3rem;
  justify-items: center;
`;

const Title = styled.p`
  margin-bottom: 0px;
  color: #07c7a4;
`;

const InputDiv = styled.div`
  display: grid;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  padding: 0.5rem;
  border-radius: 7px;
  background-color: #f2f2f2;
  width: -webkit-fill-available;
`;

const CreateButton = styled.button`
  background-color: #07c7a4;
  color: #ffffff;
  border-radius: 7px;
`;

const CancelButton = styled.button`
  color: #07c7a4;
  background-color: #ffffff;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
