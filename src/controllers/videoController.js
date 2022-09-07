export const home = (req, res) => {
    const videos = [
        {
            title:"Hello",
            rating: 5,
            comments: 2,
            createdAt: "2 minutes ago",
            views: 59,
            id: 1,
        },
        {
            title:"Video #2",
            rating: 5,
            comments: 2,
            createdAt: "2 minutes ago",
            views: 59,
            id: 1,
        },
        {
            title:"Whatsup",
            rating: 5,
            comments: 2,
            createdAt: "2 minutes ago",
            views: 59,
            id: 1,
        },
    ];
    res.render("home", {pageTitle:"Home", videos})
};
export const watch = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const remove = (req, res) => res.render("remove");
export const search = (req, res) => res.render("search");
export const upload = (req, res) => res.render("upload");
