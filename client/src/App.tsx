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
import Remont from "@/pages/Remont";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={KlendMain} />
      <Route path={"/diplomat"} component={Home} />
      <Route path={"/barber"} component={BezumniyBarber} />
      <Route path={"/len-vanil"} component={LenVanil} />
      <Route path={"/remont"} component={Remont} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
