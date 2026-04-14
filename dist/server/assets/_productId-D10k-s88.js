import { T as jsxRuntimeExports } from "./worker-entry-DjegUyKg.js";
import { R as Route, L as Link } from "./router-Dv_posNS.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function RouteComponent() {
  const product = Route.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-8 p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full md:w-[55%]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.image, alt: product.name, className: "w-full rounded-2xl object-cover" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-[45%] p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-block mb-4", children: "← Back to all products" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold mb-2", children: product.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6", children: product.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold", children: [
          "$",
          product.price.toLocaleString()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-6 py-2 rounded-lg border", children: "Add to Cart" })
      ] })
    ] })
  ] });
}
export {
  RouteComponent as component
};
