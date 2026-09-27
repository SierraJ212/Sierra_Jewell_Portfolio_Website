function Header (){
   
   return(<header>
        <h1>My Portfolio</h1>
        <nav>
            <ul>
                <li><Link to ="/">HomePage</Link></li>
                <li><Link to ="/about">About me</Link></li>
                <li><Link to ="/projects">Projects</Link></li>
                <li><Link to ="/services">Services</Link></li>
                <li><Link to ="/references">References</Link></li>
                <li><Link to ="/contact">Contact me</Link></li>
            </ul>
        </nav>
        <hr></hr>
    </header>
   );
}
export default Header