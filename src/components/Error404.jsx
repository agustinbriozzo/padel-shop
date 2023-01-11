import React from "react";

const Error404 = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-danger text-center" role="alert">
                        <h1>Error 404!!</h1>
                        <h3>Esta pagina no existe</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error404