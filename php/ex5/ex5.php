
<?php
    $mensagem = "";
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $user = $_POST['usuario'];
        $pass = $_POST['senha'];

        if ($user == 'admin' && $pass == 'admin') {
            $mensagem = 'Login realizado com sucesso';
        } else {
            $mensagem = 'Informações incorretas';
        }
    }
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado do Login</title>
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