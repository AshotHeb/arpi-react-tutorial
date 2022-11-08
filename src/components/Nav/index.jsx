
import './styles.scss'
import { NavLink } from 'react-router-dom'

export const Nav = () => {

    return (
        <ul className="nav-list">
            <li className="nav-item">
                <NavLink
                    to='/'
                    className={({ isActive }) =>
                        "nav-link" + (isActive ? " selected" : "")
                    }
                    end
                >
                    Todo List
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink to='aboutMe'
                    className={({ isActive }) =>
                        "nav-link" + (isActive ? " selected" : "")
                    }>
                    About Me
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink to='contactMe'
                    className={({ isActive }) =>
                        "nav-link" + (isActive ? " selected" : "")
                    }

                >
                    Contact me
                </NavLink>
            </li>
        </ul>
    )
}