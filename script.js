
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const formData = new FormData(form);
	const data = Object.fromEntries(formData.entries());

	// แปลงข้อมูลเป็น JSON
	// const jsonData = JSON.stringify(data);
	const title = data.title
	const location = data.location
	const workPlace = data.work_place
	const aboutRole = data.about_role
	const benefits = data.benefits

	console.log("jsonData", data.title)

	const promt = `Write a job posting for a "${title}" position in "${location}" with a "${workPlace}" work arrangement. The role involves "${aboutRole}" and offers "${benefits}". Please highlight the required skills and experience.`

	console.log(promt)
  
});