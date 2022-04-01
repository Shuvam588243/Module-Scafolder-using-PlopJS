module.exports = {
    Ticket : (req,res) => {
        try{
            res.status(200).json({
                message : 'Ticket Controller Created',
                status : 200,
            });
        }catch(error){
            console.log(error);
        }
    }
}