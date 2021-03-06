import React from 'react';
import sindurdan from '../images/ap.png';
import hand from '../images/w22.png';
import '../WeadingDate.css';

const WeadingDate = () => {
    return (
        <div className="main-slider">
            <div className="display-table center-text">
                <div className="display-table-cell">
                    <div className="slider-content">

                        <img className="sindur-dan" src={sindurdan} alt="Sindur Dan"/>
                        <h5 className="date name-b">1st March, 2021</h5>
                        <h3 className="pre-title name-b">Save The Date</h3>
                        <h1 className="title name-b">Tarak<img className="sindur-dan" src={hand} alt="Sindur Dan"/>Rita</h1>

                    </div>
			</div>
		</div>
	</div>
    );
}

export default WeadingDate;