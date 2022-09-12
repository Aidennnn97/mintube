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
export const getEdit = (req, res) => {
    const {id} = req.params;
    const video = videos[id - 1];
    return res.render("edit", {pageTitle:`Editing: ${video.title}`, video});
}
export const postEdit = (req, res) => {
    const {id} = req.params;
    const {title} = req.body;
    videos[id - 1].title = title;
    return res.redirect(`/videos/${id}`);
};

export const getUpload = (req ,res) => {
    return res.render("upload", {pageTitle: `Upload Video`});
};

export const postUpload = (req, res) => {
    // we will add a video to the videos array.
    return res.redirect("/");
}