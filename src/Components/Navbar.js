import React from 'react'
import PropTypes from 'prop-types'
import  {Link}  from 'react-router-dom';




export default function Navbar(props) {

    return (

        <>
            <div>
                <nav className={`navbar navbar-expand-lg navbar`} style = {{backgroundColor: props.mode==='green' ? 'grey' : 'black' }}>
                    <div className="container-fluid" >
                        <Link className="navbar-brand"  to= "/"  style = {{color: props.mode===('dark')||('green')? 'white' : 'black' }}>{props.title}</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page"  to= "/"  style = {{color: props.mode===('dark') || ('green')? 'white' : 'black' }}>{props.home}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to= "/about"  style = {{color: props.mode===('dark')||('green')? 'white' : 'black' }}>About</Link>
                                </li>

                            </ul>
                            <div className="form-check mx-4">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>{props.toggleMode('success')}} />
                                <label className="form-check-label" htmlFor="flexRadioDefault1" style={ {color: props.mode === ('dark') || ('green') ? 'white' :'black'}}>
                                    Green Mode
                                </label>
                            </div>
                            <div className="form-check mx-4">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>{props.toggleMode('warning')}} />
                                <label className="form-check-label" htmlFor="flexRadioDefault1"  style={ {color: props.mode === ('dark') || ('green') ? 'white' :'black'}}>
                                    Yellow Mode
                                </label>
                            </div>
                          
                        </div>


                    </div>
                </nav>

            </div>
        </>

    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: "DefaultTextUtils",
    home: "DefaultHome"
};