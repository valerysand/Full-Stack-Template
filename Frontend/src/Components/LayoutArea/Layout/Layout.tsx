import Router from "../Router/Router";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">

			<h1>Full Stack Template</h1>

            <hr />

            <Router />

        </div>
    );
}

export default Layout;
