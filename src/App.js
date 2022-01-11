import "./App.css";
import "./index.css";
import { createBrowserHistory } from "history";
import { Route, Switch, withRouter } from "react-router-dom";
import { renderRouteAdmin } from "./routes";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import { Suspense, lazy } from "react";

export const history = createBrowserHistory();

function App() {
  return (
    <Suspense
      fallback={
        <>
          <Loader />
        </>
      }
    >
      <ScrollToTop />
      <Switch>
        {renderRouteAdmin()}
        <Route
          path="/auth"
          exact
          component={lazy(() => import("./containers/Admin/Auth"))}
        />
      </Switch>
    </Suspense>
  );
}

export default withRouter(App);
