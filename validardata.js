function validaDataBr(dataBr, hora = "00", minuto = "00") {

    if (parseInt(hora) > 23 || parseInt(hora) < 0) {
      return false;
    }

    if (parseInt(minuto) > 59 || parseInt(minuto) < 0) {
      return false;
    }

    const isoData = dataBr.split("/").reverse().join('-') + 'T00:00:00';

    try {
      const novaData = new Date(isoData);
      const novoDia = novaData.getDate().toString().padStart(2, "0");
      const novoMes = (novaData.getMonth() + 1).toString().padStart(2, "0");
      const novoAno = novaData.getFullYear().toString();
      const novaDataFormatada = `${novoDia}/${novoMes}/${novoAno}`;
      if (novaDataFormatada !== dataBr) {
        throw new Error('data invalida');
      }
    } catch (error) {
      return false;
    }

    return true;
  }
