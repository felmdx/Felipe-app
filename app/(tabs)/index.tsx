import { HabitoItem } from '@/components/HabitoItem';
import { useHabitos } from '@/hooks/UseHabitos';
import { Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function tarefasScreen() {
  const [texto, setTexto] = useState('');
  const { tarefas, adicionarTarefa, alternarStatus, removerTarefa } = useHabitos('tarefas');
  
  let [fontsLoaded] = useFonts({ Inter_900Black });
  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>HÁBITOS</Text>
      
      <View style={styles.inputArea}>
        <TextInput 
          style={styles.input}
          placeholder="Novo hábito pessoal..."
          value={texto}
          onChangeText={setTexto}
        />
        <TouchableOpacity style={styles.btn} onPress={() => { adicionarTarefa(texto); setTexto(''); }}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={tarefas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <HabitoItem tarefa={item} onToggle={alternarStatus} onLongPress={removerTarefa} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', paddingTop: 60, paddingHorizontal: 20 },
  header: { 
    fontSize: 24, 
    fontFamily: 'Inter_900Black', // Fonte nova aplicada
    textAlign: 'center',         // Título centralizado
    color: '#015aff', 
    marginBottom: 30,
    letterSpacing: -1
  },
  inputArea: { flexDirection: 'row', marginBottom: 25 },
  input: { flex: 1, backgroundColor: '#F0F0F0', padding: 15, borderRadius: 12 },
  btn: { backgroundColor: '#015aff', marginLeft: 10, paddingHorizontal: 20, borderRadius: 12, justifyContent: 'center' },
  btnText: { color: '#FFF', fontSize: 24, fontWeight: 'bold' }
});