import DetailsFormPage from "./pages/DetailsFormPage";
import DetailsViewPage from "./pages/DetailsViewPage";

import { Route } from "./shared/models/Route";

export const PageRoutes: Route[] = [
  { path: "/", Component: DetailsViewPage },
  { path: "/DetailsForm", Component: DetailsFormPage },
];
