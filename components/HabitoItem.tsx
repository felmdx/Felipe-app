import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function HabitoItem({ tarefa, onToggle, onLongPress }) {
  return (
    <TouchableOpacity 
      style={[styles.card, tarefa.concluidaHoje && styles.concluidoCard]} 
      onPress={() => onToggle(tarefa.id)}
      onLongPress={() => onLongPress(tarefa.id)} // Segure para deletar
    >
      <View style={[styles.indicador, { backgroundColor: tarefa.concluidaHoje ? '#4caf50' : '#ff5e3a' }]} />
      <Text style={[styles.texto, tarefa.concluidaHoje && styles.textoConcluido]}>
        {tarefa.titulo}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },
  concluidoCard: { opacity: 0.6 },
  indicador: { width: 10, height: 10, borderRadius: 5, marginRight: 15 },
  texto: { fontSize: 17, color: '#333', fontWeight: '500' },
  textoConcluido: { textDecorationLine: 'line-through', color: '#aaa' },
});