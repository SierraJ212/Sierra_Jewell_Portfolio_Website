/**
 * Site footer.
 * Displays the copyright notice with the current year.
 *
 * @returns {JSX.Element} The footer
 */


function Footer(){

    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} Sierra Jewell Portfolio. All rights reserved</p>
        </footer>

    );

}

export default Footer