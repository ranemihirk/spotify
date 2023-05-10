import React, { lazy, Suspense, useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Default = lazy(
  () => import(/* webpackChunkName: "VidtuRouter" */ "./Default")
);
const Layout = lazy(
  () => import(/* webpackChunkName: "VidtuRouter" */ "./component/Core/Layout")
);
const Home = lazy(
  () => import(/* webpackChunkName: "VidtuRouter" */ "./component/Home")
);
const Search = lazy(
  () => import(/* webpackChunkName: "VidtuRouter" */ "./component/Search")
);

export default function VidtuRouter() {
  const user = null;
  const router = createBrowserRouter([
    {
      element: (
        <Suspense fallback={<>...</>}>
          <Layout />
        </Suspense>
      ),
      children: [
        {
					path: '',
					element: (
						<Suspense fallback={<>...</>}>
							<Home />
						</Suspense>
					),
				},
        {
					path: 'search',
					element: (
						<Suspense fallback={<>...</>}>
							<Search />
						</Suspense>
					),
				},
      ],
      errorElement: (
        <Suspense fallback={<>...</>}>
          <Default />
        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
