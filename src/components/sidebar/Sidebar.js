import './Sidebar.css';
import logo from '../../assets/logo.svg';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? 'sidebar-responsive' : ''} id='sidebar'>
            <div className='sidebar__title'>
                <div className='sidebar__img'>
                    <img src={logo} alt='logo' />
                </div>

                <i 
                    onClick={() => closeSidebar()}
                    className='fa fa-times'
                    id='sidebarIcon'
                    aria-hidden='true'
                ></i>

            </div>
            <div className='sidebar__menu'>

                <div className='sidebar__link active_menu_link'>
                    <i className='fa fa-house'></i>
                    <a href='#'>Home</a>
                </div>

                <h2>Admin</h2>
                <div className='sidebar__link'>
                    <i className='fa fa-tachometer'></i>
                    <a href='#'>Painel Geral</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-archive'></i>
                    <a href='#'>Relatórios</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa-solid fa-industry'></i>
                    <a href='#'>Esteiras</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-truck'></i>
                    <a href='#'>Distribuidores</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-gear'></i>
                    <a href='#'>Configurações</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-headset'></i>
                    <a href='#'>Suporte</a>
                </div>
                <div className='sidebar__logout'>
                    <i className='fa fa-right-from-bracket'></i>
                    <a href='#'>Log out</a>
                </div>

            </div>
        </div>
    )
}

export default Sidebar;