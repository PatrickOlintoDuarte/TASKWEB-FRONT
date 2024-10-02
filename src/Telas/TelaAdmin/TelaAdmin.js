import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { firebaseConfig } from '../../firebase';
import './TelaAdmin.css'; 
import Header from '../../Header/Header.js';
import Chart from 'chart.js/auto';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const db = getFirestore();
const auth = getAuth();

const TelaAdmin = () => {
    const [dadosConsulta, setDadosConsulta] = useState([]);
    const [mostrarResultados, setMostrarResultados] = useState(false);
    const [mostrarGraficoAtividades, setMostrarGraficoAtividades] = useState(false);
    const [mostrarGraficoUsuariosAtivos, setMostrarGraficoUsuariosAtivos] = useState(false); 
    const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
    const [analistas, setAnalistas] = useState([]);
    const [gestoresData, setGestoresData] = useState({});
    const [atividades, setAtividades] = useState([]);
    const [atividadeSelecionada, setAtividadeSelecionada] = useState(null); 

    // Funções de manipulação de dados podem ser colocadas aqui

    return (
        <div>
            <Header />
            <div className="tela-Admin">
                <div className="menu-topo">
                    <button onClick={() => setOpcaoSelecionada('VISÃO GERAL')}>VISÃO GERAL</button>
                    <button onClick={() => setOpcaoSelecionada('PROJETO')}>PROJETOS</button>
                    <button onClick={() => setOpcaoSelecionada('EQUIPES')}>EQUIPES</button>
                </div>
                
                <div className="conteudo-principal">
                    {/* Renderização condicional baseada na opção selecionada */}
                    {opcaoSelecionada === 'VISÃO GERAL' && (
                        <div>
                            <h1>Visão Geral</h1>
                            {/* Conteúdo da Visão Geral aqui */}
                        </div>
                    )}
                    {opcaoSelecionada === 'PROJETO' && (
                        <div>
                            <h1>Projeto</h1>
                            {/* Conteúdo do Projeto aqui */}
                        </div>
                    )}
                    {opcaoSelecionada === 'EQUIPES' && (
                        <div>
                            <h1>Equipes</h1>
                            {/* Conteúdo das Equipes aqui */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TelaAdmin;
