https://dvalenascimento.github.io/reqForm.project/

# ReqForm

## Visão Geral

**ReqForm** é uma aplicação web desenvolvida para facilitar o levantamento de requisitos de projetos de software. Com uma interface intuitiva, permite que analistas e desenvolvedores preencham um questionário estruturado, gerando automaticamente um documento em PDF contendo todas as informações essenciais para o desenvolvimento do projeto.

## Funcionalidades

- **Questionário Estruturado**: Formulário dividido em seções abrangentes, incluindo Informações Gerais, Requisitos Funcionais, Requisitos Não Funcionais, Requisitos Técnicos, Cronograma e Orçamento, e Considerações Finais.
- **Geração de PDF**: Exporta as respostas do formulário para um documento PDF formatado e pronto para ser compartilhado.
- **Interface Responsiva**: Design adaptável para diferentes dispositivos, garantindo uma experiência de uso consistente em desktops, tablets e smartphones.
- **Validação de Formulário**: Campos obrigatórios asseguram que todas as informações essenciais sejam preenchidas antes da geração do PDF.
- **Estilo Personalizado**: Design moderno com animações suaves e efeitos visuais atraentes para melhorar a experiência do usuário.

## Tecnologias Utilizadas

- **HTML5 & CSS3**: Estrutura e estilização da aplicação.
- **JavaScript**: Funcionalidades interativas e geração de PDF.
- **Bibliotecas**:
  - [jsPDF](https://github.com/parallax/jsPDF) para geração de documentos PDF.

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/DiegoValeNascimento/ReqForm.git
   ```

2. **Acesse o diretório do projeto:**

   ```bash
   cd ReqForm
   ```

3. **Abra o arquivo `index.html` no seu navegador preferido:**

   Você pode simplesmente clicar duas vezes no arquivo ou usar um servidor local para uma melhor experiência.

   ```bash
   # Exemplo usando Python para iniciar um servidor local
   python -m http.server
   ```

   Acesse `http://localhost:8000` no seu navegador.

## Uso

1. **Preencha o Formulário:**

   - **Informações Gerais**: Nome do projeto, objetivo, stakeholders.
   - **Requisitos Funcionais**: Funcionalidades essenciais, processos a serem automatizados, regras de negócio, integrações necessárias, relatórios e dashboards.
   - **Requisitos Não Funcionais**: Performance, segurança, escalabilidade, usabilidade.
   - **Requisitos Técnicos**: Plataformas e tecnologias, infraestrutura, ambiente de desenvolvimento e testes, banco de dados.
   - **Cronograma e Orçamento**: Prazos, orçamento disponível.
   - **Considerações Finais**: Critérios de sucesso, riscos e desafios.

2. **Gerar PDF:**

   Após preencher todas as seções obrigatórias, clique no botão **"Gerar PDF"** para baixar o documento completo com todas as informações fornecidas.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests para melhorar este projeto.

1. **Fork o Repositório**
2. **Crie uma Branch para sua Feature** (`git checkout -b feature/nova-feature`)
3. **Commit suas Alterações** (`git commit -m 'Adiciona nova feature'`)
4. **Push para a Branch** (`git push origin feature/nova-feature`)
5. **Abra um Pull Request**

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

**Diego Nascimento** - [LinkedIn](https://www.linkedin.com/in/diego-vale-do-nascimento-48212215b/) | [GitHub](https://github.com/DVALENASCIMENTO)

---

&copy; 2024 Diego Nascimento. Todos os direitos reservados.

## Roadmap

- [ ] Implementar autenticação de usuários
- [ ] Adicionar templates personalizados para documentos
- [ ] Melhorar a responsividade para dispositivos móveis
- [ ] Integrar com serviços de armazenamento na nuvem

## Contato

Para dúvidas ou sugestões, entre em contato através do [LinkedIn](https://www.linkedin.com/in/diego-vale-do-nascimento-48212215b/) ou abra uma issue no [GitHub](https://github.com/DiegoValeNascimento/ReqForm/issues).

## Agradecimentos

- [jsPDF](https://github.com/parallax/jsPDF)
- Comunidade Open Source

---

*Este README foi gerado com o objetivo de fornecer uma visão clara e concisa sobre o projeto ReqForm, suas funcionalidades, tecnologias utilizadas e como contribuir.*
