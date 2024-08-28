import React from "react";

const Jumbotron = () => {
    return (
        <div className="bg-light my-4 p-4 rounded">
            <h1 className="display-4"><b>A Warm Welcome!</b></h1>
            <div className="my-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a pellentesque velit. Sed dolor diam, sagittis et mauris viverra, ullamcorper tempor lacus. Integer sed purus non turpis dapibus interdum. Orci.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                </p>
            </div>
        </div>

    )
}
export default Jumbotron