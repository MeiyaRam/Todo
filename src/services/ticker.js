const ticker = (context) => {
	const { config: { intervalValue }, actions } = context;

	const interval = setInterval(() => {
		actions.setTasks(context);
	}, intervalValue);

	return () => clearInterval(interval);
};

export default ticker;
