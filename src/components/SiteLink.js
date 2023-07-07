import {NavLink} from "react-router-dom";

export function SiteLink({display, path}) {
    return (
        <NavLink to={path}
                 className={({isActive}) => isActive ? "btn border-0 bg-accent/20 hover:bg-accent hover:text-dark-teal text-white/90 capitalize" : "bg-transparent"}>{display}</NavLink>
    )
}

