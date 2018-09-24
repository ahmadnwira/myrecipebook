import Recipe from './recipes.model';

export const index = (req, res) => {
    Recipe.find()
        .then(recipe => {
            res.send(recipe);
        })
        .catch(err => {
            res.status(500).send('');
        });
};

export const featured = (req, res) => {
    res.send({
        imgUrl: 'pic.jpg', title:'Title', url:'/recipe-title'
    });
};

export const show = (req, res) => {
    Recipe.findById(req.params.id)
        .then(recipe => {
            if(!recipe) {
                return res.status(404).send('');
            }
            res.send(recipe);
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send('');
            }
            return res.status(500).send('');
        });
};

export const add = (req, res) => {
    // Create a Note
    const note = new Recipe({
        title: 'recipe',
        imgUrl: 'pic.jpg',
    });

    // Save Note in the database
    note.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the Note.'
            });
        });
};
