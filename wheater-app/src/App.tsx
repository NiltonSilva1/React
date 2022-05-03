import { useState } from "react";
import { Card } from "./components/Card";
import fetchData from "./services/api";

export function App() {
	const [city, setCity] = useState("");
	const [data, setData] = useState<{} | any>({});

	const handleSubmit = (e: any) => {
		e.preventDefault();

		fetchData(city).then((response: any) => {
			setData(response);
		});
	};

	return (
		<div className="flex flex-col w-full h-screen items-center justify-center">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Cidade"
					className="p-3 rounded-lg outline-none"
					onChange={(e: any) => setCity(e.target.value)}
					value={city}
				/>
				<button
					type="submit"
					className="bg-sky-600 p-3 rounded-lg ml-2 text-white font-bold"
				>
					Pesquisar
				</button>
			</form>
			<Card props={data} />
		</div>
	);
}
