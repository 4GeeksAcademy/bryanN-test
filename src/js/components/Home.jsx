import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [task, setTask] = useState('')
	const [list, setList] = useState([])

	const getTask = (event) => {
		setTask(event.target.value)

	}
	const add = (event) => {
	if (event.key === 'Enter') {
		if (task !== '') { // 🔹 solo agrega si el input no está vacío
			setList([...list, task]);
			setTask('');
		}
	}
};

	const delList = (key) => {
		setList(prev => prev.filter((_, i) => i !== key));
	}

	const taskCounter = (list) => {
		if (list.length === 1) {
			return ('1 Task')
		} else if (list.length > 1) {
			return (list.length + ' Tasks')
		} else return ('0 Task')
	}

	return (
		<div className="text-center mt-4">
			<div className='container' style={{ width: '30rem' }}>
				<h1 className='fw-light'>todos</h1>
				<div className="card mx-4" id="paper">
					<input type="text" className="form-control" onChange={getTask} value={task} onKeyDown={add} placeholder="What needs to be done?" />
					<ul className="list-group list-group-flush ">
						{list.map((lis, key) => (
							<li id={key} className="list-group-item text-start d-flex justify-content-between task-item">
								<span>{lis}</span>
								<button type="button" onClick={() => delList(key)} className="btn-close delete-btn" aria-label="Close"></button>
							</li>
						))}
					</ul>

					<p className="list-group-item text-start mt-1 mx-2 fw-light">{taskCounter(list)}</p>
				</div>
			</div>
		</div>
	);
};

export default Home;