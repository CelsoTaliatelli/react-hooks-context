import { Typography } from "@material-ui/core";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import React,{useEffect, useState} from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({aoEnviar, validarCPF}) {
  const[etapaAtual,setEtapaAtual]  = useState(0);
  const[dadosColetados,setDadosColetados] = useState({});
 
  useEffect(() => {
    if(etapaAtual === formularios.length-1){
        aoEnviar(dadosColetados); 
    }
  })

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados}/>,
    <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF}/>,
    <DadosEntrega aoEnviar={coletarDados}/>,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
  ]

  function coletarDados(dados){
    setDadosColetados({...dadosColetados,...dados})
    proximo();
  }

  function proximo(){
    setEtapaAtual(etapaAtual+1);
  }
  
  return (
    <>
       <Stepper activeStep={etapaAtual}> 
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Dados Pessoais</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalizar</StepLabel></Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}


export default FormularioCadastro;
