import path from "path";

import express from "express";

export const staticsFile = (app: any) => {
    app.use(express.static(path.join(path.resolve(), "public")));
    app.use(express.static(path.join(path.resolve(), "node_modules", "bootstrap-v4-rtl", "dist")));
    app.use(express.static(path.join(path.resolve(), "node_modules", "font-awesome")));
};
