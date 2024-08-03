//Styles
import './ReportCard.scss'

//Assets
import Success from '../../../assets/icons/success.svg'
import Disabled from '../../../assets/icons/disabled.svg'
import Pending from '../../../assets/icons/pending.svg'
import All from '../../../assets/icons/all.svg'
import { useStoreTask } from '@renderer/zustan/ZustanContext'

const ReportCard = () => {
    const earrings = { id: 1, earring: 40, finish: 20, disabled: 11 }

    const cardInfo = [
        {
            id: 1,
            title: 'Todas las tareas',
            number: 43,
            img: All,
            class: 'r-all'
        },
        {
            id: 2,
            title: 'Tareas concluidas',
            number: 35,
            img: Success,
            class: 'r-con'
        },
        {
            id: 3,
            title: 'Tareas en progreso',
            number: 15,
            img: Pending,
            class: 'r-pen'
        },
        {
            id: 4,
            title: 'Tareas inhabilitadas',
            number: 3,
            img: Disabled,
            class: 'r-des'
        }
    ]

    const { selectedCard } = useStoreTask()

    return (
        <div className="ReportCard">
            {cardInfo.map((_, idx) => (
                <div key={idx} className={`r-card ${_.class}`} onClick={() => selectedCard(_.id)}>
                    <h3 className="r-title">{_.title}</h3>
                    <div className="r-cnt-number">
                        <span className="r-number">{_.number}</span>
                    </div>
                    <div className="r-cntbg im-pe">
                        <img src={_.img} alt="" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ReportCard
