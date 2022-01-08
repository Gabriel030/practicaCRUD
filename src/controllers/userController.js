let userController = {
    list: (req,res) => {
        let users = [
            {id:1,name:"Dario"},
            {id:2,name:"javier"},
            {id:3,name:"maru"},
            {id:4,name:"ale"},
            {id:5,name:"alan"},
        ];
        res.render("userList", {"users": users})
    },
    search: (req,res)=> {
        let loQueBuscoElUsuario = req.query.search; /* esto me permite obtener datos de un formulario q ingreso el cliente */
        
        let users = [
            {id:1,name:"Dario"},
            {id:2,name:"javier"},
            {id:3,name:"maru"},
            {id:4,name:"ale"},
            {id:5,name:"alan"},
        ];

        let usersResults = [];

        for (let i = 0; i < users.length; i++) {
            
            if (users[i].name.includes(loQueBuscoElUsuario)) {
                usersResults.push(users[i])
            }
            
        }
        res.render("userResults", {usersResults:usersResults})

    }
}

module.exports = userController; 
