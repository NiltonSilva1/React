const key = "661fe3793b034e3188410909220305";

const fetchData = async (city: any) => {
	const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;

	const fetchResponse = await fetch(url);
	const data = await fetchResponse.json();

	return data;
};

export default fetchData;
