import Toggle from '@renderer/components/atoms/Toggle/Toggle'
import './TaskView.scss'

const TaskView = () => {
    const info = [
        {
            id: '1',
            title: 'Esta es una tarea',
            date: '01/07/2024',
            description:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto non eaque magnam fugit voluptates molestiae.',
            is_active: true
        }
    ]

    return (
        <div className="TaskView">
            {info.map((_, idx) => (
                <div className="t-cnt-task" key={idx}>
                    <div className='t-cnt-up'>
                        <div className='t-header'>
                            <h3 className='t-tile'>{_.title}</h3>
                            <span className='t-date'>{_.date}</span>
                        </div>
                        <div className='t-cnt-body'>
                            <p className='t-description'>{_.description}</p>
                        </div>
                    </div>

                    <div>
                        <Toggle />
                    </div>

                    <button className='t-btn-close'>✖️</button>
                </div>
            ))}

        </div>
    )
}

export default TaskView
