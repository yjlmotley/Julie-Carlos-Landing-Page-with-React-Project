import React from "react";

const Card = () => {
    return (
        <div className="row row-cols-1 row-cols-md-4 mb-4 g-3 text-center">
            <div className="col">
                <div className="card h-100">
                    <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec diam vitae.</p>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu molestie ex, vel eleifend mi. Suspendisse.</p>
                    </div>
                    <div className="card-footer">
                        <a href="#" class="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec diam vitae.</p>
                    </div>
                    <div className="card-footer">
                        <a href="#" class="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu molestie ex, vel eleifend mi. Suspendisse.</p>
                    </div>
                    <div className="card-footer">
                        <a href="#" class="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;