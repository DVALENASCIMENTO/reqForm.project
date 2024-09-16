function gerarPDF() {
    const { jsPDF } = window.jspdf;

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
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const footerMargin = 10;

    let y = 20;
    const lineHeight = 10;
    const maxLinesPerPage = 22; // Number of lines you want per page
    let linesCount = 0;
    let pageNumber = 1;

    function addFooter() {
        doc.setFontSize(10);
        doc.text(`Página ${pageNumber}`, pageWidth - 20, pageHeight - footerMargin);
        pageNumber++;
    }

    function addQuestionSection() {
        questions.forEach((item, index) => {
            if (linesCount >= maxLinesPerPage) {
                addFooter();
                doc.addPage();
                y = 10; // Reset y position on new page
                linesCount = 0;
            }
            doc.text(item.question, 10, y);
            y += lineHeight;
            doc.text(item.answer, 10, y);
            y += 2 * lineHeight;
            linesCount += 2;
        });
        addFooter(); // Add footer to the last page
    }

    doc.setFontSize(16);
    doc.text("ReqForm - Questionário para Levantamento de Requisitos", 10, 10);

    doc.setFontSize(12);
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

    addQuestionSection();
    doc.save("Levantamento_Requisitos.pdf");
}
