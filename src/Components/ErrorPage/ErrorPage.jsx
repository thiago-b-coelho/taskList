import { Link, useRouteError } from "react-router-dom";
import "./index.scss";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="ErrorPage" id="error-page">
            <h1>Oops!</h1>
            <h3>Você precisa criar uma lista primeiro ou clicar nas listas já criadas</h3>
            <Link to={`/`}>Voltar</Link>
        </div>
    );
}
