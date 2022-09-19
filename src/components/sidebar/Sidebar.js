import './Sidebar.css';
import logo from '../../assets/logo.svg';

const Sidebar = ({ openSidebar, closeSidebar }) => {
    return (
        <div className={openSidebar ? 'sidebar-responsive' : ''} id='sidebar'>
            <div className='sidebar__title'>
                <div className='sidebar__img'>
                    <img src={logo} alt='logo'></img>
                    <h1>Teste</h1>
                </div>
                <i onClick={() => closeSidebar()}
                    className='fa fa-times'
                    id='sidebarIcon'
                    aria-hidden='true'
                ></i>
            </div>
            <div className='sidebar__menu'>
                <div className='sidebar__link'></div>
            </div>
        </div>
    )

}