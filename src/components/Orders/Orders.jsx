import { kanbanImgs } from '../../../utils/images';
import { groupNumber, ordersDetailsData } from '../../data';
import OrdersPieChart from '../OrdersPieChart/OrdersPieChart'; 
import css from './Orders.module.css';

const Orders = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <div className={css.orderHead}>
                <img src={kanbanImgs.Logo} alt="logo" />
                <span>Orders Today</span>
            </div>

            <div
                className={`${css.ordersAmount} grey-container`}
            >
                <p>Amount</p>
                <span>$ {groupNumber(4560)}</span>
            </div>

            <div className={css.ordersDetail}>
                {
                    ordersDetailsData.map((orders, idx) => (
                        <div className={css.order} key={idx}>
                            <div>
                                <span>{orders.name}</span>
                                <span>+{orders.change}</span>
                            </div>
                            <div>
                                <span>{orders.type}</span>
                                <span>Items: {orders.items}</span>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className={css.ordersChart}>
                <p>Split by orders</p>

                <OrdersPieChart />
            </div>
        </div >
    )
}

export default Orders
