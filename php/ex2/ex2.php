/*Exercício 2: Estruturas de Controle
Crie um formulário HTML que receba a idade de uma pessoa. No script PHP:
Use if e else para determinar se a pessoa é maior de idade ou menor de idade.
Exiba uma mensagem correspondente.*/ 

<?php
    $mensagem = ""; // Initialize the message variable

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $idade = $_POST['idade'];

        if ($idade >= 18) {
            $mensagem = 'Você é maior de idade.';
        } else {
            $mensagem = 'Você é menor de idade.';
        }
    }
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado da Idade</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Resultado</h1>
    </header>

    <section>
        <div id="resultado">
            <?php echo $mensagem; ?>
        </div>
        <div>
            <a href="index.html">Voltar</a>
        </div>
    </section>
</body>
</html>