import React from 'react';
import DetailsNavbar from '../../DetailsNavbar/DetailsNavbar';
import img1 from '../../../img/projects/Dream Camera.png';

const Camera = () => {
    return (
        <div className="h-view text-center my-5">
            <DetailsNavbar></DetailsNavbar>
            <h2 className="pt-5">Dream Camera shop screenshot</h2>
            <div className="d-flex justify-content-center align-items-center">
                <img
                    className="w-50 text-center shadow-lg rounded border border-3 border-info"
                    src={img1}
                    alt=""
                />
            </div>
        </div>
    );
};

export default Camera;
