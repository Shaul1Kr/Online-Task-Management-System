import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export async function loader() {
  const response = await axios.get("http://localhost:3000/api/task/getTask", {
    withCredentials: true,
  });

  return response.data;
}

export default function TaskManager() {
  const navigate = useNavigate();
  const { tasks } = useLoaderData() as Tasks;
  const [desc, setDesc] = useState<string>("");

  return (
    <TaskDiv>
      <Title>Task Manager</Title>
      <StyledButton onClick={() => navigate("/NewTask")}>
        Create Task
      </StyledButton>
      <TasksDiv>
        <TaskTitlesWrapper>
          {tasks.map((task) => (
            <TaskTitleDiv onClick={() => setDesc(task.description)}>
              <TaskTitle>{task.title}</TaskTitle>
            </TaskTitleDiv>
          ))}
        </TaskTitlesWrapper>
        <TaskDetailDiv>{desc}</TaskDetailDiv>
      </TasksDiv>
    </TaskDiv>
  );
}

const TaskDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: inherit;
  width: 100vw;
  min-height: 100dvh;
  align-items: center;
`;

const Title = styled.p``;

const TasksDiv = styled.div`
  display: flex;
  border: 1px solid grey;
  width: 80%;
  height: 80dvh;
  margin: auto;
`;

const TaskTitlesWrapper = styled.div`
  width: 30%;
  border-right: 1px solid grey;
  height: 80dvh;
`;

const TaskTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid grey;
  cursor: pointer;
  background-color: white;
`;

const TaskDetailDiv = styled.div`
  padding: 1rem;
`;

const TaskTitle = styled.p`
  margin: 0;
`;

const StyledButton = styled.button`
  background-color: #0d5285;
  color: #fff7ed;
`;
