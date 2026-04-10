import css from './Dashboard.module.css';
import { dashCardsData, groupNumber } from '../../data';
import DashboardStatistics from '../../components/DashboardStatistics/DashboardStatistics';
import Orders from '../../components/Orders/Orders';
 
const Dashboard = () => {
    return (
        <div className={css.container}>

            {/* left side */}
            <div className={css.dashboard}>

                <div className={`${css.dashboard__top} theme-container`}>
                    <div className={css.dashboard__top_head}>
                        <span>Dashboard</span>

                        <div
                            className={css.dashboard__top_button}
                        >
                            <select name="" id="">
                                <option value="">1 week</option>
                                <option value="">1 month</option>
                                <option value="">1 year</option>
                            </select>
                        </div>
                    </div>

                    <div className={css.dashboard__top_cards}>
                        {
                            dashCardsData.map((card, idx) => (
                                <div
                                    className={css.dashCard} key={idx}
                                >
                                    <div
                                        className={css.dashCard_head}
                                    >
                                        <p>{card.title}</p>
                                        <span>+{card.change}</span>
                                    </div>

                                    <div className={css.dashCard_amount}>
                                        <span>$ </span>
                                        <span>{groupNumber(card.amount)}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* <div className={css.dashboard__stats}> */}
                <DashboardStatistics />
                {/* </div> */}
            </div>

            {/* right side */}
            {/* <div className={css.orders}> */}
                <Orders />
            {/* </div> */}

        </div>
    )
}

export default Dashboard
