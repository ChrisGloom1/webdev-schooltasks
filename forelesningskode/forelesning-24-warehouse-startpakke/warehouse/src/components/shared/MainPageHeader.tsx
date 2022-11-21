import {Link} from 'react-router-dom';

const MainPageHeader = () => {
    return (
        <header>
            <h1>WH - Adminsidene til Warehouse-lageret</h1>
            <ul>
                <li><Link to="/">Hjem</Link></li>
                <li><Link to="/delete-orders">Slett ordre</Link></li>
            </ul>
        </header>        
    )
}

export default MainPageHeader;