import './PageHeaderLeft.css';

import {Icon} from '../../uikit';

export function PageHeaderLeft(){
    return (<div className='PageHeaderLeft'>
        <span className='page-header-left__star'>
            <Icon.Star />
            <strong>
                4.87
            </strong>
            <a href="#">
                (36 reviews)
            </a>
        </span>
        <span className='page-header-left__superhost '>
            <Icon.Medal />
            <div>
                Superhost
            </div>
        </span>
        <span className='page-header-left__location'>
            <a href="#">
                Great Barrier Island, New Zealand
            </a>
        </span>
    </div>)
}
