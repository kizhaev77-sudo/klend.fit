import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import KlendMain from "@/pages/KlendMain";
import Home from "@/pages/Home";
import BezumniyBarber from "@/pages/BezumniyBarber";
import LenVanil from "@/pages/LenVanil";
import DiplomatForma from "@/pages/DiplomatForma";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={KlendMain} />
      <Route path={"/diplomat"} component={Home} />
      <Route path={"/diplomat-forma"} component={DiplomatForma} />
      <Route path={"/barber"} component={BezumniyBarber} />
      <Route path={"/len-vanil"} component={LenVanil} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
