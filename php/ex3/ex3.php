
<?php
    $semana = array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta');
    foreach ($semana as $dia) {
        echo $dia.'<br>';
    }

    $colors = array('red', 'green', 'blue', 'yellow');
    foreach ($colors as $x) {
        if ($x == 'green') continue;
        echo $x.'<br>';
    }
?>