import { useState } from 'react';

// dependencies
import { v4 as uuidv4 } from 'uuid';

// styles
import '../../styles/style.css';

const KanbanBoard = () => {
	const backlogListArray = JSON.parse(localStorage.getItem('backlogItems')) || ['Release the course', 'Sit back and relax'];
	const progressListArray = JSON.parse(localStorage.getItem('progressItems')) || ['Work on projects', 'Listen to music'];
	const completeListArray = JSON.parse(localStorage.getItem('completeItems')) || ['Being cool', 'Getting stuff done'];
	const onHoldListArray = JSON.parse(localStorage.getItem('onHoldItems')) || ['Being uncool'];

	const [backlogDragItemList, setBacklogDragItemList] =
		useState(backlogListArray);
	const [progressDragItemList, setProgressDragItemList] =
		useState(progressListArray);
	const [completeDragItemList, setCompleteDragItemList] =
		useState(completeListArray);
	const [onholdDragItemList, setOnholdDragItemList] = useState(onHoldListArray);

	// updated saved columns
	function updatedSavedColumns() {
		const listArrays = [backlogListArray, progressListArray, completeListArray, onHoldListArray];
		const arrayNames = ['backlog', 'progress', 'complete', 'onHold'];

		arrayNames.forEach((arrayName, index) => {
			localStorage.setItem(`${arrayName}Items`, JSON.stringify(listArrays[index]))
		});
	}

	updatedSavedColumns();

	const dataWithDragItemList = [
		{
			title: 'Backlog',
			class: 'backlog',
			id: 'backlog',
			dragItemList: backlogDragItemList,
		},
		{
			title: 'Progress',
			class: 'progress',
			id: 'progress',
			dragItemList: progressDragItemList,
		},
		{
			title: 'Complete',
			class: 'complete',
			id: 'complete',
			dragItemList: completeDragItemList,
		},
		{
			title: 'On Hold',
			class: 'on-hold',
			id: 'on-hold',
			dragItemList: onholdDragItemList,
		},
	];

  return (
		<div>
			<h1 className='main-title'>Kanban Board</h1>
			{/* Drag and drop container */}
			
			<div className='drag-container'>
				<ul className='drag-list'>
					{dataWithDragItemList.map((data) => (
						// column
						<li key={uuidv4()} className={`drag-column ${data.class}-column`}>
							<span className='header'>
								<h1>{data.title}</h1>
							</span>
							{/* content */}
							<div id={`${data.class}-content`} className='custom-scroll'>
								<ul className='drag-item-list' id={`${data.class}-list`}>
									{data.dragItemList.map((item) => (
										<li key={uuidv4()} className='drag-item'>{item}</li>
									))}
								</ul>
							</div>
							{/* Add Button Group */}
							<div  className='add-btn-group'>
								<div className='add-btn'>
									<span className='plus-sign'>+</span>
									<span>Add Item</span>
								</div>
								<div className="add-btn solid">
									<span>Save Item</span>
								</div>
								<div className='add-container'>
									<div className='add-item'></div>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default KanbanBoard;