// hooks/useHabitos.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { AppState } from 'react-native';

export function useHabitos(categoriaAtual: 'tarefas' | 'notas') {
  const [tarefas, setTarefas] = useState([]);

  const carregarEReviver = async () => {
    try {
      const dataHoje = new Date().toDateString();
      const dataSalva = await AsyncStorage.getItem('ultima_resurreicao');
      const tarefasSalvas = await AsyncStorage.getItem('minhas_tarefas');
      
      let listaGeral = tarefasSalvas ? JSON.parse(tarefasSalvas) : [];

      if (dataSalva !== dataHoje) {
        listaGeral = listaGeral.map(t => ({ ...t, concluidaHoje: false }));
        await AsyncStorage.setItem('minhas_tarefas', JSON.stringify(listaGeral));
        await AsyncStorage.setItem('ultima_resurreicao', dataHoje);
      }

      // Filtra apenas os hábitos da categoria desta aba
      const filtrados = listaGeral.filter(t => t.categoria === categoriaAtual);
      setTarefas(filtrados);
    } catch (e) { console.error(e); }
  };

  useEffect(() => {
    carregarEReviver();
    const sub = AppState.addEventListener('change', state => {
      if (state === 'active') carregarEReviver();
    });
    return () => sub.remove();
  }, [categoriaAtual]); // Recarrega se mudar de aba

  const adicionarTarefa = async (titulo: string) => {
    const tarefasSalvas = await AsyncStorage.getItem('minhas_tarefas');
    const listaGeral = tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
    
    const novaTarefa = { 
      id: Date.now().toString(), 
      titulo, 
      concluidaHoje: false, 
      categoria: categoriaAtual 
    };
    
    const novaListaGeral = [...listaGeral, novaTarefa];
    await AsyncStorage.setItem('minhas_tarefas', JSON.stringify(novaListaGeral));
    carregarEReviver(); // Atualiza a lista filtrada
  };

  const alternarStatus = async (id: string) => {
    const tarefasSalvas = await AsyncStorage.getItem('minhas_tarefas');
    let listaGeral = JSON.parse(tarefasSalvas);
    
    listaGeral = listaGeral.map(t => t.id === id ? { ...t, concluidaHoje: !t.concluidaHoje } : t);
    
    await AsyncStorage.setItem('minhas_tarefas', JSON.stringify(listaGeral));
    carregarEReviver();
  };

  const removerTarefa = async (id: string) => {
    const tarefasSalvas = await AsyncStorage.getItem('minhas_tarefas');
    let listaGeral = JSON.parse(tarefasSalvas);
    listaGeral = listaGeral.filter(t => t.id !== id);
    await AsyncStorage.setItem('minhas_tarefas', JSON.stringify(listaGeral));
    carregarEReviver();
  };

  return { tarefas, adicionarTarefa, alternarStatus, removerTarefa };
}