import Task from "../models/Task.js";

export async function getTasks(req, res) {
  try {
    const { id } = req.user;
    console.info(`Retriving all tasks for user id ${id}`);
    const tasks = await Task.find({ user_id: id });
    return res.status(200).json({ tasks });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Bad request" });
  }
}

export async function createTask(req, res) {
  try {
    const { id } = req.user;
    const { title, description } = req.body;
    console.info(
      `Create new task with title ${title} and description ${description} with user id ${id}`
    );
    await Task.create({ user_id: id, title, description });
    return res.status(200).json({ message: "Created new tasks" });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Bad request" });
  }
}
