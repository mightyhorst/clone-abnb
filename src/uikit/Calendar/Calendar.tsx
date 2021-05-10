import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './Calendar.css';
import './Calendar.responsive.css';

/**
 * @requires Components
 */

/**
 * @interface ICalendar
 * @description Calendar props types
 */
export interface ICalendar {
    // children?: React.ReactNode;
    active: {
        startDate: string;
        endDate: string;
    };
}

/**
 * @function Calendar
 * @param props - props for children
 * @returns {Calendar}
 */
export function Calendar(props: ICalendar) {
    /**
     * @constant className - build the css classes to add to the Calendar
     */
    const className = clsx('Calendar');
    return (
        <>
            <div className={className}>
                <table className="calendar__table">
                    <thead>
                        <tr>
                            <th colSpan={7}>
                                <button className="calendar__btn-left">
                                    <i className="fa fa-chevron-left"></i>
                                </button>
                                <span>April 2021</span>
                                <button className="calendar__btn-right">
                                    <i className="fa fa-chevron-right"></i>
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Su</td>
                            <td>Mo</td>
                            <td>Tu</td>
                            <td>We</td>
                            <td>Th</td>
                            <td>Fr</td>
                            <td>Sa</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
