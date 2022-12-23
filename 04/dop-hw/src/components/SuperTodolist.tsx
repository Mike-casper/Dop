import React from "react";

type TasksPropsType = {
    id:number,
    title:string,
    isDone:boolean
}
type PropsType={
    tasks:Array<TasksPropsType>
    children:React.ReactNode
}
export const SuperTodolist:React.FC<PropsType> = (props) => {
    const {tasks, children} = props
    const mappedTasks = tasks.map(el=>{
        return(
            <li key={el.id}>
                <span>{el.id}</span>
                <span>{el.title}</span>
                <input type="checkbox" checked={el.isDone}/>
            </li>
        )
    })
    return (
        <div>
            <ul>
                {mappedTasks}
            </ul>
            {children}
            <div>-------------------------------</div>
        </div>
    );
};

