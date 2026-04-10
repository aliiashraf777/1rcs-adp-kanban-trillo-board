import css from './Sidebar.module.css';
import { kanbanImgs } from '../../../utils/images'; 
import { NavLink, useNavigate } from 'react-router-dom';
 
import { MdSpaceDashboard } from 'react-icons/md';
import { AiFillCalendar, AiOutlineTable } from 'react-icons/ai';
import { FaTasks } from 'react-icons/fa';


const Sidebar = () => {

    const navigate = useNavigate();

    return (
        <div className={css.container}>
            <img
                src={kanbanImgs.Logo}
                alt="logo"
                className={css.logo}
                onClick={() => navigate('/')}
            />

            <div className={css.menu}>
                <NavLink
                    to='dashboard'
                    className={css.menu__item}
                    title='Dashboard'
                >
                    <MdSpaceDashboard size={30} />
                </NavLink>

                <NavLink
                    to='calendar'
                    className={css.menu__item}
                    title='Calendar'
                >
                    <AiFillCalendar size={30} />
                </NavLink>

                <NavLink
                    to='kanban-board'
                    className={css.menu__item}
                    title='Trello Kanban Board'
                >
                    <FaTasks size={30} />
                </NavLink>

                <NavLink
                    to='users'
                    className={css.menu__item}
                    title='Users Data'
                >
                    <AiOutlineTable size={30} />
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar
