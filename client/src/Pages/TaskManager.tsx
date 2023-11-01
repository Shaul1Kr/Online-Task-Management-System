import styled from "styled-components";

export default function TaskManager() {
  return (
    <TaskDiv>
      <Title>Task Manager</Title>
      <TasksDiv>
        <TaskTitlesWrapper>
          <TaskTitleDiv>
            <TaskTitle>asdada</TaskTitle>
          </TaskTitleDiv>
        </TaskTitlesWrapper>
        <TaskDetailDiv></TaskDetailDiv>
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

const TaskDetailDiv = styled.div``;

const TaskTitle = styled.p`
  margin: 0;
`;
