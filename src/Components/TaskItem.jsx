import styles from './TaskItem.module.css';
import { CheckIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';
import { Pencil } from 'heroicons-react';
import { TrashIcon } from '@heroicons/react/24/outline';

const TaskItem= ({task}) =>
{

const [isChecked, setIsChecked] =useState(task.checked);

const handleCheckboxChange= (e) =>{
        setIsChecked(!isChecked);
}
return ( 
<li className={styles.task}>
<div className="task-group">
<input type ="checkbox" className={styles.checkbox}
checked={task.checked}
name={task.name}
id={task.id}
onChange={handleCheckboxChange}
/>
<label 
htmlFor={task.id}
className={styles.label}
>
{task.name}
<p className={styles.checkmark}>
<CheckIcon strokeWidth={2} width={24} height={24}/>

</p>
</label>


</div>
<div className="task-group">
<button className='btn'
aria-label={`Update ${task.name} Task`}
//onClick={}

>
<PencilIcon width={24} height={24}/>
</button>

<button className={`btn ${styles.delete}`}
aria-label={`Delete ${task.name} Task`}
//onClick={}

>
<TrashIcon width={24} height={24}/>
</button>

</div>
</li>
        
)
}



export default TaskItem