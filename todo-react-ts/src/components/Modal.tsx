interface ModalProps {
	children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
	//Fech o modal ao clicar do lado de fora, trocando a classe para hide que está no ccs global
	const closeModal = () => {
		const modal = document.querySelector("#modal");
		modal!.classList.add("hide");
	};

	return (
		<div id="modal" className="hide">
			<div
				className="h-full w-full absolute bg-black opacity-60"
				onClick={closeModal}
			></div>
			<div className="absolute ml-[450px] mr-[450px] mt-8  w-6/12 h-[408px] z-10 bg-white flex justify-center items-center flex-col transition">
				{children}
			</div>
		</div>
	);
};
