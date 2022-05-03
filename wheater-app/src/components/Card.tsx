export const Card = ({ props }): any => {
	console.log(props.current?.temp_c);
	return (
		<>
			{props.current?.temp_c === undefined ? (
				""
			) : (
				<div className="bg-white p-6 mt-10 rounded-lg shadow-xl">
					<div>
						<span className="block text-xl font-bold text-slate-700">
							{props.location?.name}
						</span>

						<span className="text-slate-500 text-sm font-medium">
							{`${props.location?.region} ${props.location?.country}`}
						</span>
					</div>

					<div className="font-bold text-slate-800 flex mt-4 mb-2">
						<span className="text-8xl">{props.current?.temp_c}</span>
						<span className="text-2xl mt-3">°C</span>
					</div>

					<div className="text-center text-slate-800">
						<img src={props.current?.condition.icon}></img>
						<span>{props.current?.condition.text}</span>
					</div>
				</div>
			)}
		</>
	);
};
