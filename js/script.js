function gerarPDF() {
    const { jsPDF } = window.jspdf;

    // Coleta dos valores dos campos
    const nomeProjeto = document.getElementById("nomeProjeto").value;
    const objetivoProjeto = document.getElementById("objetivoProjeto").value;
    const stakeholders = document.getElementById("stakeholders").value;
    const funcionalidades = document.getElementById("funcionalidades").value;
    const processos = document.getElementById("processos").value;
    const regrasNegocio = document.getElementById("regrasNegocio").value;
    const integracoes = document.getElementById("integracoes").value;
    const relatorios = document.getElementById("relatorios").value;
    const performance = document.getElementById("performance").value;
    const seguranca = document.getElementById("seguranca").value;
    const escalabilidade = document.getElementById("escalabilidade").value;
    const usabilidade = document.getElementById("usabilidade").value;
    const plataformas = document.getElementById("plataformas").value;
    const infraestrutura = document.getElementById("infraestrutura").value;
    const ambienteDesenvolvimento = document.getElementById("ambienteDesenvolvimento").value;
    const bancoDados = document.getElementById("bancoDados").value;
    const prazos = document.getElementById("prazos").value;
    const orcamento = document.getElementById("orcamento").value;
    const criteriosSucesso = document.getElementById("criteriosSucesso").value;
    const riscos = document.getElementById("riscos").value;

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const footerMargin = 10;
    const topMargin = 20;
    const leftMargin = 10;
    const rightMargin = 10;
    const maxY = pageHeight - footerMargin;

    let y = topMargin;
    const lineHeight = 10;
    let pageNumber = 1;

    // Função para adicionar o rodapé
    function addFooter() {
        doc.setFontSize(10);
        doc.text(`Página ${pageNumber}`, pageWidth - 20, pageHeight - footerMargin);
        pageNumber++;
    }

    // Função para verificar se é necessário adicionar uma nova página
    function addPageIfNeeded(requiredSpace = lineHeight) {
        if (y + requiredSpace > maxY) {
            addFooter();
            doc.addPage();
            y = topMargin;
        }
    }

    // Função para dividir o texto conforme a largura disponível
    function splitText(text, maxWidth) {
        return doc.splitTextToSize(text, maxWidth);
    }

    // Função para adicionar uma pergunta e sua resposta
    function addQuestion(question, answer) {
        addPageIfNeeded(lineHeight);
        doc.text(question, leftMargin, y);
        y += lineHeight;

        const splitAnswer = splitText(answer, pageWidth - leftMargin - rightMargin - 10); // 10 é para indentação
        splitAnswer.forEach(line => {
            addPageIfNeeded(lineHeight);
            doc.text(line, leftMargin + 10, y); // Indentação de 10 unidades
            y += lineHeight;
        });
        y += lineHeight; // Espaçamento adicional após cada resposta
    }

    // Adiciona o título e parágrafo conforme solicitado
    doc.setFontSize(22);
    let title = "ReqForm";
    let titleWidth = doc.getTextWidth(title);
    doc.text(title, (pageWidth - titleWidth) / 2, y); // Centraliza o título H1
    y += lineHeight + 5;

    doc.setFontSize(14);
    let paragraph = '"Software Requirements Document Generator"';
    let paragraphWidth = doc.getTextWidth(paragraph);
    doc.text(paragraph, (pageWidth - paragraphWidth) / 2, y); // Centraliza o parágrafo
    y += lineHeight + 10;

    // Lista de perguntas e respostas
    const questions = [
        { question: "Nome do Projeto:", answer: nomeProjeto },
        { question: "Objetivo do Projeto:", answer: objetivoProjeto },
        { question: "Stakeholders (Envolvidos):", answer: stakeholders },
        { question: "Funcionalidades Essenciais:", answer: funcionalidades },
        { question: "Processos que o Sistema Deve Automatizar:", answer: processos },
        { question: "Regras de Negócio:", answer: regrasNegocio },
        { question: "Integrações Necessárias:", answer: integracoes },
        { question: "Relatórios e Dashboards:", answer: relatorios },
        { question: "Performance:", answer: performance },
        { question: "Segurança:", answer: seguranca },
        { question: "Escalabilidade:", answer: escalabilidade },
        { question: "Usabilidade:", answer: usabilidade },
        { question: "Plataformas e Tecnologias:", answer: plataformas },
        { question: "Infraestrutura:", answer: infraestrutura },
        { question: "Ambiente de Desenvolvimento e Testes:", answer: ambienteDesenvolvimento },
        { question: "Banco de Dados:", answer: bancoDados },
        { question: "Prazos:", answer: prazos },
        { question: "Orçamento:", answer: orcamento },
        { question: "Critérios de Sucesso:", answer: criteriosSucesso },
        { question: "Riscos e Desafios:", answer: riscos }
    ];

    // Adiciona todas as perguntas e respostas
    questions.forEach(item => {
        addQuestion(item.question, item.answer);
    });

    // Adiciona o rodapé na última página
    addFooter();

    // Salva o PDF
    doc.save("ReqForm.pdf");
}
