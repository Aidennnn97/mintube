export const trending = (req, res) => res.send("Home Page Videos");
export const see = (req, res) => {
    console.log(req.params);
    res.send("See")
};
export const edit = (req, res) => {
    console.log(req.params);
    res.send("Edit")
};
export const remove = (req, res) => {
    console.log(req.params);
    res.send("Remove")
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
