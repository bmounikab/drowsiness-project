import { Switch, Route, Router as WouterRouter } from "wouter";
import Dashboard from "@/pages/Dashboard";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <h1 className="text-2xl font-bold">404 — Page Not Found</h1>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter>
      <Router />
    </WouterRouter>
  );
}

export default App;
