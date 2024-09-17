import { Link } from 'react-router-dom';
import grubhub from '../img/grubhub.svg';
import ubereats from '../img/ubereats.svg';
import postmates from '../img/postmates.svg';
import doordash from '../img/doordash.svg';
import yelp from '../img/yelp.svg';

function OrderForm(){
    return(
        <form>
            <ul className="list-unstyled mb-0 service-select">
                <li className="mb-4"><a href="https://www.grubhub.com/restaurant/new-asian-n-cajun-2-greenback-ln-8121-greenback-ln-fair-oaks/3048809" target="_blank"><img src={grubhub} className="orderService"/></a></li>
                <li className="mb-4"><a href="https://www.ubereats.com/store/asian-n-cajun-2/m7JzYDLnRESi966_6EHoSg" target="_blank"><img src={ubereats} className="orderService"/></a></li>
                <li className="mb-4"><a href="https://postmates.com/store/asian-n-cajun-2/m7JzYDLnRESi966_6EHoSg" target="_blank"><img src={postmates} className="orderService"/></a></li>
                <li className="mb-4"><a href="https://www.doordash.com/store/asian-n-cajun-2-fair-oaks-2500327" target="_blank"><img src={doordash} className="orderService"/></a></li>
                <li className="mb-0"><a href="https://www.yelp.com/biz/asian-n-cajun-2-fair-oaks-2" target="_blank"><img src={yelp} className="orderService"/></a></li>
            </ul>
            <hr></hr>
            <div>
                <p className="text-center">You can also check out our menu <Link to="/menu" className="hypertext">here</Link> and place a pickup order through the phone!</p>
            </div>
        </form>
    );

}
export default OrderForm;