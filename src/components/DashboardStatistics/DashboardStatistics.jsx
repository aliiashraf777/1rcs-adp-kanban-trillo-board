import { groupNumber } from '../../data';
import StatisticsChart from '../StatisticsChart/StatisticsChart';
import css from './DashboardStatistics.module.css';
import { BsArrowUpShort } from 'react-icons/bs';

const DashboardStatistics = () => {
    return (
        <div className={`${css.container} theme-container`}>

            <span className={css.title}>Overview Statistics</span>

            <div
                className={`${css.statsCards} grey-container`}
            >
                <div>
                    <div className={css.arrowIcon}>
                        <BsArrowUpShort />
                    </div>

                    <div className={css.statsCards_box}>
                        <span>Top Item This Month</span>
                        <span>Office Comps</span>
                    </div>
                </div>

                <div className={css.statsCards_box}>
                    <span>Items</span>
                    <span>{groupNumber(455)}</span>
                </div>

                <div className={css.statsCards_box}>
                    <span>Profit</span>
                    <span>$ {groupNumber(370000)}</span>
                </div>

                <div className={css.statsCards_box}>
                    <span>Daily Average</span>
                    <span>$ {groupNumber(2000)}</span>
                </div>
            </div>

            <StatisticsChart />

        </div>
    )
}

export default DashboardStatistics
