import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/pages/Home";
import { Services } from "./components/pages/Services";
import { About } from "./components/pages/About";
import { Team } from "./components/pages/Team";
import { FeeList } from "./components/pages/FeeList";
import { Contact } from "./components/pages/Contact";
import { NotFound } from "./components/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "about", Component: About },
      { path: "team", Component: Team },
      { path: "fees", Component: FeeList },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
