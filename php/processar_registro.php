<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verificar se o campo de e-mail está presente e é válido
    if (isset($_POST["email"]) && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
        $email = $_POST["email"];
    } else {
        echo "E-mail inválido";
        exit;
    }

    // Verificar se o campo de senha está presente
    if (isset($_POST["senha"])) {
        $senha = $_POST["senha"];
    } else {
        echo "Senha não informada";
        exit;
    }

    // Conectar ao banco de dados (substitua com suas próprias credenciais)
    $conexao = new mysqli("localhost", "seu_usuario", "sua_senha", "seu_banco_de_dados");

    // Verificar se a conexão foi bem-sucedida
    if ($conexao->connect_error) {
        die("Erro na conexão com o banco de dados: " . $conexao->connect_error);
    }

    // Preparar a instrução SQL para inserir os dados
    $sql = "INSERT INTO usuarios (email, senha) VALUES (?, ?)";

    // Preparar a declaração SQL
    $stmt = $conexao->prepare($sql);

    // Vincular os parâmetros
    $stmt->bind_param("ss", $email, $senha);

    // Executar a instrução SQL
    if ($stmt->execute()) {
        // Exibir um alerta de sucesso e redirecionar para a página inicial
        echo '<script>alert("Dados enviados com sucesso!"); window.location.href = "pagina_inicial.html";</script>';
    } else {
        echo "Erro ao registrar: " . $stmt->error;
    }

    // Fechar a conexão e a declaração
    $stmt->close();
    $conexao->close();

} else {
    header("Location: form.html");
    exit;
}
?>
