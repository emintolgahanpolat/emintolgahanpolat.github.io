import 'bootstrap/dist/css/bootstrap.min.css';
import './Unknow.css';

function Unknows() {
    return (
        <div className="Unknows">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>
                                Oops!</h1>
                            <h2>
                                404 Not Found</h2>
                            <div className="error-details">
                                Sorry, an error has occured, Requested page not found!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Unknows;
