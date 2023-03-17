import { randomUUID } from 'node:crypto'

//INSERT 
export const  createUser = (req, res) => {
    const psico = global.test
    const psic = {
        nome,
        email,
        senha,
        apresentacao,
        id: randomUUID()
    } = req.body;

    psico.push(psic);

    return res.status(201).json({ psic });
}

// FIND ALL
export const findAllUsers = (req, res) => {
    const psico = global.test

    return res.status(200).json({ psico })
}

//FIND ONE
export const findOneUser = (req, res) => {
    const psico = global.test

    const {id} = req.params

    const psic = psico.find(psic => psic.id == id)

    if (!psic){
        return res.status(404).json({ messege : "ID não encontrado"})
    }

    return res.status(200).json({psic});
}

// UPDATE 
export const updateUserById = (req, res) => {
    const psico = global.test
    const {id} = req.params;
    const {nome,
           email,
           senha,
           apresentacao} = req.body

    const psic = psico.find(psic => psic.id == id);

    psic.name = name

    return res.status(200).json({psic});
}

// DELETE
export const deleteUserById = (req, res) => {
    const psico = global.test
    const {id} = req.params;

    const indexOfPsico = psico.findIndex(psic => psic.id == id)
    psico.splice(indexOfPsico, 1);

    if (!psic){
        return res.status(404).json({ messege : "ID não encontrado"})
    }

    return res.status(204).send();
}