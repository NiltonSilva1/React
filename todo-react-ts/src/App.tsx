import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Modal } from "./components/Modal";
import { TaskList } from "./components/TaskList";
import { ITask } from "./interfaces/Tasks";

function App() {
	const [tasklist, setTasklist] = useState<ITask[]>([]);
	const [taskUpdate, settaskUpdate] = useState<ITask | null>(null);

	// função criada para remover items da lista, removendo items com id diferente dos que quero manter
	const deleteTask = (id: number) => {
		setTasklist(
			tasklist.filter((task) => {
				return task.id !== id;
			})
		);
	};

	const hideOrShowModal = (display: boolean) => {
		const modal = document.querySelector("#modal");
		if (display) {
			modal!.classList.remove("hide");
		} else {
			modal!.classList.add("hide");
		}
	};

	const editTask = (task: ITask) => {
		hideOrShowModal(true);
		settaskUpdate(task);
	};

	//realiza o editar, fazendo um map da tasks que se atualizadas mudam se não mantém a mesma task

	const updateTask = (id: number, title: string, difficult: number) => {
		const updatedTask: ITask = { id, title, difficult };

		const updatedItems = tasklist.map((task) => {
			return task.id === updatedTask.id ? updatedTask : task;
		});

		setTasklist(updatedItems);
		hideOrShowModal(false);
	};

	return (
		<div className="flex flex-col h-screen justify-between">
			<header>
				<Header />
			</header>
			<>
				<Modal
					children={
						<Main
							taskList={tasklist}
							task={taskUpdate}
							handleUpdate={updateTask}
						/>
					}
				/>
			</>
			<div className="flex  justify-start flex-col items-center flex-grow">
				<Main taskList={tasklist} setTasklist={setTasklist} />
				<span>
					<TaskList
						taskList={tasklist}
						deleteTask={deleteTask}
						editTask={editTask}
					/>
				</span>
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
