import './style.css';

import waterDrop from '../../assets/waterDrop.png'

export default function CircularWaterDrop() {
    return (
        <div className="circle-container">
            <div className='imgContainer'>
                <img src={waterDrop} alt="" />
            </div>
        </div>
    );
}