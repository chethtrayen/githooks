module.exports = (promise) => async (req, res) => {
    const item = {
        ...req.params,
        ...req.body,
        ...req.query
    }

    try{
        const result = await promise(item);

        switch(req.method){
            case 'GET' :
                return result ? res.status(200).json(result) : res.status(422).json('No result');
            case 'POST' :
                return res.status(201).json(result);
        }
    }
    catch(e){
        return res.sendStatus(401);
    }
}