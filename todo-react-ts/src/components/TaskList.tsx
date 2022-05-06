import { FiEdit, FiTrash2 } from "react-icons/fi";
import { ITask } from "../interfaces/Tasks";

interface TaskListProps {
	taskList: ITask[];
	deleteTask: (id: number) => void;
	editTask(task: ITask): void;
}

export const TaskList = ({ taskList, deleteTask, editTask }: TaskListProps) => {
	return (
		<>
			{taskList.length > 0 ? (
				taskList.map((task) => (
					<div
						key={task.id}
						className="column w-full flex justify-center flex-col items-center border-b-2"
					>
						<h1 className="bd-notification is-danger text-center text-2xl font-bold mt-2 mb-5 ">
							Suas Tarefas:
						</h1>
						<div className="columns is-mobile">
							<div className="column is-half">
								<h4 className="bd-notification is-danger font-bold flex justify-between items-center w-[370px]">
									{task.title}
								</h4>
							</div>
							<div className="w-full justify-end flex items-center ">
								<button onClick={() => editTask(task)}>
									<FiEdit />
								</button>
							</div>
						</div>
						<div className="flex justify-between items-center w-[410px] mb-4">
							<p className="font-semibold ml-3">Difficult: {task.difficult}</p>
							<button onClick={() => deleteTask(task.id)}>
								<FiTrash2 />
							</button>
						</div>
					</div>
				))
			) : (
				<p className="column w-full flex justify-center flex-col items-center border-b-2 font-semibold">
					There is no tasks at the moment!
				</p>
			)}
		</>
	);
};
