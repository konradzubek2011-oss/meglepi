document.addEventListener('DOMContentLoaded', () => {
	const nem = document.getElementById('nem');
	if (!nem) return;

	nem.addEventListener('click', () => {
		const rect = nem.getBoundingClientRect();
		const maxLeft = Math.max(0, window.innerWidth - rect.width);
		const maxTop = Math.max(0, window.innerHeight - rect.height);
		const left = Math.floor(Math.random() * (maxLeft + 1));
		const top = Math.floor(Math.random() * (maxTop + 1));

		nem.style.position = 'fixed';
		nem.style.left = left + 'px';
		nem.style.top = top + 'px';
	});
});
