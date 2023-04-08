import './Footer.css'

function Footer() {
    // JSX
    return (
        <footer className="footer" style={{backgroundImage: 'url(/images/fundo.png)'}}>
            <div className='socialWrapper'>
                <a href=""><img className='logo' src="/images/fb.png" alt="Logo Facebook"/></a>
                <a href=""><img className='logo mx-2' src="/images/tw.png" alt="Logo Twitter"/></a>
                <a href=""><img className='logo' src="/images/ig.png" alt="Logo Instagram"/></a>
            </div>
            <img className='logo' src="/images/logo.png" alt="Logo Rodapé"/>
            <span className='text-white'>Desenvolvido por Marco & Alura</span>
        </footer>
    )
}

export default Footer