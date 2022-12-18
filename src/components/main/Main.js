//import hello from '../../assets/hello.svg'
//import Chart from '../charts/Chart'

const Main = () => {
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src="{hello}" alt="hello" />
                    <div className="main__greeting">
                        <h1>Olá</h1>
                        <p>Bem-vindo ao seu painel</p>
                    </div>
                </div>

                <div className="main__cards">
                    <div className="card">
                        <i className="fa fa-file-text fa-2x text-lightblue"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">Número de pedidos</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-money fa-2x text-red"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">Pagamentos</p>
                            <span className="font-bold text-title">R$2.467</span>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default Main;