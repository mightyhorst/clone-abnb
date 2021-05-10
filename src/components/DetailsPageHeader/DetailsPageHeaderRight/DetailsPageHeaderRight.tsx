import './DetailsPageHeaderRight.css';

import {Icon} from '../../../uikit';

export function PageHeaderRight(){
    return (<div className='PageHeaderRight'>
        <Icon.Share />
        <a href="#">
            Share
        </a>
        <Icon.Love isLoved />
        <a href="#">
            Saved
        </a>
    </div>)
}
