import React from 'react';
import {Link} from 'react-router-dom' ;
import styles from './event.module.css';

function Navbar() {

    return(
        <div>
            <section id={styles.nav}>
               <Link to='/createEvent'id={styles.text}>EventCreateForm</Link>
               <Link to='/readEvent'id={styles.text}>EventList</Link>
               <Link to='/EventCalendar'id={styles.text}>EventCalendar</Link>
            </section>
        </div>
    )
}
export default Navbar;