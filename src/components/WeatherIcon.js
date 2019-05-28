import React from 'react';
import cx from 'classnames';
import './WeatherIcon.scss';


// function GenericWeather({ city, temp, status }) {
//     const cls = cx('weather-icon', status);
//     return (
//         <div className="weather-card">
//             <div className={cls} />
//             <h1>{temp}</h1>
//             <p>{city}</p>
//         </div>
//     );
// }
// <div className={cx('wind-arrow', props.wind.speed)} />
const GenericWeather = props => (
    <div className="weather-card">
        <div className={cx('weather-icon', props.status)} />
        <div className={cx('wind-arrow', 'arrow right' , props.windSpeed)}> {props.windSpeed} </div>
        <h1>{props.temp}</h1>
        <p>{props.city}</p>
    </div>
);


GenericWeather.defaultProps = {
    city: 'Jerusalem',
    temp: '25º',
    status: 'rain',
    windSpeed: '12'
};

export default GenericWeather;
