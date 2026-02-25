import { HomePage } from "@/pages/home-page";
import { MessagePage } from "@/pages/message-page";
import { Route, Router, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";

export const App = () => {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/message/:id" component={MessagePage} />
      </Switch>
    </Router>
  );
};
