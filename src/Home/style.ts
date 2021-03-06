import styled from "styled-components";


export const Container = styled.section`
    border: 20px solid var(--background);
    padding: 0 60px;
    
    padding-bottom: 50px;
    background: var(--background-secondary);
    h1{
        text-align: center;
        margin-top: 0px;
        font-size: 1.75rem;
        height: 60px;
        margin-top: 40px;
    }

   div{
    max-width: 1500px;
    width: 100%;
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    align-self: center;
    justify-self: center;
    column-gap: 30px;
        form{
            display: grid;
            grid-template-columns: 0.8fr 0.8fr;
            align-content: center;
            column-gap: 20px;
            align-items: center;
            max-width: 600px;
            //height: 615px;
            width: 100%;
                ul{
                
                    h2{
                        margin-bottom: 20px;
                        //margin-top: 20px;
                        
                    }
                    li{
                        width: 270px;
                        margin-top: 30px;
                        margin-bottom: 20px;
                        height: 70px;

                        .texteIcon{
                            display: flex;
                            justify-content: space-between;
                            margin: 0px;
                            font-size: 0.875rem;
                            font-weight: normal;
                            padding-bottom: 10px;
                        }

                        .texteButton{
                            display: flex;
                            width: 100%;
                            border: 2px solid #000000;
                            margin: 0px;
                            border-radius: 10px;
                            margin-bottom: 40px;
                            column-gap: 0px;
                            button{
                                width: 80%;
                                padding: 18px 25px;
                                text-align: center;
                                border: none;
                                border-radius: 10px 0px 0px 10px;
                                font-weight: normal;        
                                font-size: 0.875rem;                   
                            }
                            button+button{
                               border-left: 2px solid #000000;
                                border-radius: 0px 10px 10px 0px;
                                color: var(--Tex-secundary)
                            }
                            
                        }
                        label{
                            font-weight: normal;
                            font-size: 0.875rem;
                           // margin-top: 20px;
                        }
                        input{
                            width: 100%;
                            border: none;
                            background: var(--background-secondary);
                            border-bottom: 2px solid var(--Tex);
                            //margin-bottom: 20px;
                            margin-top: 10px;
                            outline: none;
                            font-size: 1rem;
                            font-weight: 600;
                            color: var(--Tex);
                            padding-bottom: 5px;
                        }
                        input:focus{
                            border: none;
                            border-bottom: 2px solid var(--Tex);
                        }
                            
                    }
                }
            
            .textColor{
                color:var(--background-secondary)
            }

            .texteButton2{
                display: flex;
                width: 100%;
                border: 2px solid #000000;
                margin: 0px;
                border-radius: 12px;
                margin-bottom: 40px;
                column-gap: 0px;
                button{
                    width: 80%;
                    padding: 18px 10px;
                    text-align: center;
                    border: none;
                    border-radius: 10px 0px 0px 10px;
                    margin-left: 0px;
                    margin-right: 0px;
                    font-weight: normal;        
                    font-size: 0.875rem;         
                }
                .ultimo{
                    border-radius: 0px 10px 10px 0px;
                }
            }
          
            .buttomSimular
            { 
                font-weight: bold;
                border: 2px solid var(--Tex);
                background: var(--Button-secundario);
                top: 1px;
                max-width: 300px;
                position: relative;
                right: 15px;
                width: 100%;
                padding: 15px 0;
                font-size: 1rem;
                border-radius: 10px;
            }
            .buttomSimular:hover{
                background: var(--Button);
            }
            .buttomLimpar
            { 
                border: 2px solid var(--Tex);
                top: 1px;
                max-width: 300px;
                width: 100%;
                padding: 15px 0;
                font-size: 1rem;
                border-radius: 10px;
            }
            .buttomLimpar:hover{
                background: var(--Button);
            }
    }

}

    @media (max-width: 1200px){
        div{
            display: grid;
            grid-template-columns: 1fr;
            
        }
    }

    @media (max-width: 669px) {
        width: 450px;
        div{
            width: 275px;
            margin: 0 auto;
            form{
            display: grid;
            grid-template-columns: 1fr;
                ul{
                    
                }
            }
        }
        .buttomSimular
        { 
            margin-top: 10px;
            position: relative;
            left: 0px;
        }
    }

    .IconButton{
        position: relative;
        top: 2px;
        font-weight: bold;
    }
`;




export const Simulacao = styled.section`
    h2{
        //margin-top: 50px;
        margin-bottom: 20px;
    }
    ul{
        
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 30px;
        align-self: center;
        li{
            width: 60px;
            width: 100%;
            background: var(--BoxSimulacao);
            margin-bottom: 30px;
            box-shadow: 0px 0px 10px 0px rgb(44, 44, 44, 0.20);
            text-align: center;
            padding-top: 10px;
            font-weight: bold;
            p{
                margin-top: 30px;
                margin-bottom: 10px;
                font-weight: normal;
                padding-left: 5px;
                padding-right: 5px;
            }
            .Pgreen{
                color: var(--Valores);
                padding-left: 5px;
                padding-right: 5px;
            }
        }
    }
    .chart{
        display: block;
    }
    @media (max-width: 1200px){
        margin-top: 40px;
    }

    @media (max-width: 669px){
        
        ul{
            grid-template-columns: 1fr 1fr;
        }
    }

`;