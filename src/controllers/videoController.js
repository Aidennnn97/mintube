const videos = [
    {
        title:"Hello",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 1,
        id: 1,
    },
    {
        title:"Video #2",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 2,
    },
    {
        title:"Whatsup",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 3,
    },
];
export const home = (req, res) => {
    return res.render("home", {pageTitle:"Home", videos})
};
export const watch = (req, res) => {
    const {id} = req.params;
    const video = videos[id - 1];
    return res.render("watch", {pageTitle:`Watching: ${video.title}`, video});
}
export const edit = (req, res) => {
    const {id} = req.params;
    const video = videos[id - 1];
    return res.render("edit", {pageTitle:`Editing: ${video.title}`, video});
}
export const remove = (req, res) => res.render("remove");
export const search = (req, res) => res.render("search");
export const upload = (req, res) => res.render("upload");
