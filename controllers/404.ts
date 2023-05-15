import { Request, Response } from "express";

const get404 = (req: Request, res: Response) => {
    res.status(404).render("404");
};

export default get404;
