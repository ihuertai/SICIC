import './style.css';

export default function CustomCard({ children }) {
    return (
        <div className='cardBox'>
            {children}
        </div>
    );
}
