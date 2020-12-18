const { layout } = require('../utils')
const { dinner_idea } = require('../models');

const showForm = (req, res) => {
    res.render('dinner_idea/form', {
        locals: {
            title: 'Add new post'
        },
        ...layout
    });
};

const processForm = async (req, res) => {
    const { title } = req.body;
    const { id } = req.session.user;
    
    if (title && id) {
        const newIdea = await dinner_idea.create({
            title,
            userId: id
        });
        console.log(dinner_idea);
        res.redirect(`${req.baseUrl}/`)
    } else {
        res.redirect(req.url);
    }
    
};

const list = async (req, res) => {
    const {id} = req.session.user;
    if (id) {
        // Show this user's Todos
        const ideas = await dinner_idea.findAll({
            where: {
                userId: id // match the logged in user
            }
        });
        res.render('list', {
            locals: {
                ideas
            },
            ...layout
        })
    } else {
        // redirect
        res.redirect('/');
    }
};

module.exports = {
    showForm,
    processForm,
    list
};
