import Task from "../models/Task.js";

export async function getTasks(res, req) {
  try {
    console.info(`Retriving all tasks`);
    const tasks = await Task.find();
    return res.status(200).json({ tasks });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Bad request" });
  }
}
