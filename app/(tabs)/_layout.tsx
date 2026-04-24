import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import Feather from '@expo/vector-icons/Feather';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#0e0705',   // Cor do ícone SELECIONADO (Laranja Fênix)
        tabBarInactiveTintColor: '#cccccc', // Cor do ícone DESMARCADO (Cinza claro)
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
        borderTopWidth: 0, 
        elevation: 0,     
        backgroundColor: '#ffffff', // Fundo da barra branco
      }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'HÁBITOS',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="notas"
        options={{
          title: 'Notas',
          tabBarIcon: ({ color }) => <Feather name="bookmark" size={28}  color={color} />,
        }}
      />
    </Tabs>
  );
}
