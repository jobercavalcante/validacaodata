function validaData(data)
{
    //YYYY-MM-DD
    var ISODate = data.split('/').reverse().join('-') + ' 00:00';
    try {
        //Criando um objeto Date usando os valores ano, mes e dia.
        var novaData = new Date(ISODate).toISOString().substr(0, 10).split('-').reverse().join('/');

        if (data !== novaData) {
            return false;
        }
        return true;
    } catch (e){
        return false;
    }

}
