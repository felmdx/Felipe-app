# Felipe App

Um aplicativo minimalista de rastreamento de hábitos construído com React Native e Expo. O grande diferencial do Hábitos Fênix é a funcionalidade de "Renascimento" — as tarefas retornam ao estado de pendentes automaticamente à meia-noite, incentivando a consistência diária sem a necessidade de recriar listas.

## Funcionalidades

* **Renascimento Automático:** Verificação inteligente usando o ciclo de vida do app para resetar hábitos quando o dia vira.
* **Categorização em Abas:** Organização clara entre hábitos Pessoais e Foco no Trabalho.
* **100% Offline e Privado:** Sem necessidade de internet ou servidores. Todos os dados são salvos localmente no aparelho.
* **Gestão Simples:** Adicione novos hábitos com um toque, marque como concluídos e segure (Long Press) para deletar.

## Tecnologias Utilizadas

* **[React Native](https://reactnative.dev/):** Framework principal.
* **[Expo](https://expo.dev/):** Ambiente de desenvolvimento e compilação nas nuvens (EAS Build).
* **[Expo Router](https://docs.expo.dev/router/introduction/):** Navegação moderna baseada em arquivos (`app/(tabs)`).
* **[AsyncStorage](https://react-native-async-storage.github.io/async-storage/):** Armazenamento de dados local (banco de dados offline).
* **[@expo/vector-icons](https://icons.expo.fyi/):** Ícones nativos da interface.

## Como Rodar o Projeto (Desenvolvimento)

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1. Baixe ou clone este projeto.
2. Abra o terminal na pasta do projeto e instale as dependências:
   ```bash
   npm install
   npx expo start
   ```
3. Baixe o aplicativo Expo Go no seu celular (Android ou iOS) e escaneie o QR Code que aparecerá na tela do computador.
