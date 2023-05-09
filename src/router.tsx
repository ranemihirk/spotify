import React, { lazy, Suspense, useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Default = lazy(
  () => import(/* webpackChunkName: "VidtuRouter" */ "./Default")
);
const Layout = lazy(
  () => import(/* webpackChunkName: "VidtuRouter" */ "./component/Core/Layout")
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
							<Default />
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
