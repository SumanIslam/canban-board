import react from 'react';

// styles
import '../../styles/style.css'

const CanbanBoard = () => {
  return (
		<div>
			<h1 class='main-title'>Kanban Board</h1>
			{/* dragg container */}
			<div className='drag-container'>
				<ul className='drag-list'>
					{/* backlog column */}
					<li className='drag-column backlog-column'>
						<span className='header'>
							<h1>Backlog</h1>
						</span>
						{/* backlog content */}
						<div id='backlog-content' className='custom-scroll'>
							<ul className='drag-item-list' id='backlog-list'>
								<li className='drag-item'>Testing</li>
								<li className='drag-item'>Testing</li>
								<li className='drag-item'>Testing</li>
							</ul>
						</div>
						{/* Add button group */}
						<div className='add-btn-group'>
							<div className='add-btn'>
								<span className='plus-sign'>+</span>
								<span>Add Item</span>
							</div>
							<div className='add-btn solid'>
								<span>Save Item</span>
							</div>
							<div className='add-container'>
								<div className='add-item'></div>
							</div>
						</div>
					</li>
					{/* progress column */}
					<li className='drag-column progress-column'>
						<span className='header'>
							<h1>Progress</h1>
						</span>
						{/* progress content */}
						<div id='progress-content' className='custom-scroll'>
							<ul className='drag-item-list' id='progress-list'>
								<li className='drag-item'>Testing</li>
								<li className='drag-item'>Testing</li>
								<li className='drag-item'>Testing</li>
							</ul>
						</div>
						{/* Add button group */}
						<div className='add-btn-group'>
							<div className='add-btn'>
								<span className='plus-sign'>+</span>
								<span>Add Item</span>
							</div>
							<div className='add-btn solid'>
								<span>Save Item</span>
							</div>
							<div className='add-container'>
								<div className='add-item'></div>
							</div>
						</div>
					</li>
					{/* complete column */}
					<li className='drag-column complete-column'>
						<span className='header'>
							<h1>Complete</h1>
						</span>
						{/* complete content */}
						<div id='complete-content' className='custom-scroll'>
							<ul className='drag-item-list' id='complete-list'>
								<li className='drag-item'>Testing</li>
								<li className='drag-item'>Testing</li>
								<li className='drag-item'>Testing</li>
							</ul>
						</div>
						{/* Add button group */}
						<div className='add-btn-group'>
							<div className='add-btn'>
								<span className='plus-sign'>+</span>
								<span>Add Item</span>
							</div>
							<div className='add-btn solid'>
								<span>Save Item</span>
							</div>
							<div className='add-container'>
								<div className='add-item'></div>
							</div>
						</div>
					</li>
					{/* on hold column */}
					<li className='drag-column on-hold-column'>
						<span className='header'>
							<h1>On Hold</h1>
						</span>
						{/* on hold content */}
						<div id='on-hold-content' className='custom-scroll'>
							<ul className='drag-item-list' id='on-hold-list'>
								<li className='drag-item'>Testing</li>
								<li className='drag-item'>Testing</li>
								<li className='drag-item'>Testing</li>
							</ul>
						</div>
						{/* Add button group */}
						<div className='add-btn-group'>
							<div className='add-btn'>
								<span className='plus-sign'>+</span>
								<span>Add Item</span>
							</div>
							<div className='add-btn solid'>
								<span>Save Item</span>
							</div>
							<div className='add-container'>
								<div className='add-item'></div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default CanbanBoard;