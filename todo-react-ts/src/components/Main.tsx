import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { ITask } from "../interfaces/Tasks";

interface MainProps {
	taskList: ITask[];
	setTasklist?: (taskList: ITask[]) => void;
	task?: ITask | null;
	taskUpdate?: null;
	handleUpdate?(id: number, title: string, difficult: number): void;
}

export const Main = ({
	taskList,
	setTasklist,
	task,
	taskUpdate,
	handleUpdate,
}: MainProps) => {
	const [id, setId] = useState<number>(1);
	const [title, setTitle] = useState<string>("");
	const [difficult, setDifficult] = useState<number | any>("");

	useEffect(() => {
		if (task) {
			setId(task.id);
			setTitle(task.title);
			setDifficult(task.difficult);
		}
	}, [task]);

	const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};
	const handleChangeDifficulty = (e: ChangeEvent<HTMLInputElement>) => {
		setDifficult(e.target.value);
	};

	const addTaskListHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (handleUpdate) {
			handleUpdate(id, title, difficult);
		} else {
			const id = Math.floor(Math.random() * 1000);

			const newTask: ITask = { id, title, difficult };

			setTasklist!([...taskList, newTask]);

			setTitle("");
			setDifficult("");
		}
	};

	return (
		<div>
			<h1 className="text-3xl font-bold mt-5 mb-5">What you going to do?</h1>
			<form onSubmit={addTaskListHandler} id="myForm">
				<div className="field w-96">
					<label className="label text-xl">Title:</label>
					<div className="control">
						<input
							className="input border-2 border-black"
							type="text"
							placeholder="Title of the task"
							onChange={(e) => handleChangeTitle(e)}
							value={title}
						/>
					</div>
				</div>
				<div className="field w-96">
					<label className="label text-xl">Difficult:</label>
					<div className="control">
						<input
							className="input border-2 border-black"
							type="number"
							placeholder="0 to 10"
							onChange={handleChangeDifficulty}
							value={difficult}
							min={0}
						/>
					</div>
				</div>
				<div className="field is-grouped w-96 ">
					<div className="control w-full ">
						<button
							type="submit"
							className="bg-cyan-400 hover:bg-cyan-500 transition-colors h-9 font-semibold mt-2 w-full"
						>
							Cadastrar
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};
